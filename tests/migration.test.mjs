import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script, runInNewContext } from 'node:vm';
import test from 'node:test';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = (...parts) => readFileSync(path.join(root, ...parts), 'utf8');
const manifest = JSON.parse(read('plugin.json'));
const marketplace = JSON.parse(read('.github', 'plugin', 'marketplace.json'));

test('marketplace resolves the root Copilot plugin and its canonical project skill', () => {
  assert.equal(marketplace.plugins.length, 1);
  const entry = marketplace.plugins[0];
  assert.equal(path.resolve(root, entry.source), path.resolve(root));
  for (const field of ['name', 'version', 'description', 'repository', 'homepage', 'license']) {
    assert.equal(entry[field], manifest[field], `marketplace ${field} must match the plugin`);
  }
  const skillRoot = path.resolve(root, manifest.skills);
  assert.equal(skillRoot, path.join(root, '.github', 'skills'));
  const skill = readFileSync(path.join(skillRoot, 'noslop', 'SKILL.md'), 'utf8');
  assert.match(skill, /^---\r?\nname: noslop\r?\ndescription: >-\r?\n/);
  assert.match(skill, /Copilot CLI and VS Code agent mode/);
  assert.match(skill, /real HTML file in the workspace/);
  assert.doesNotMatch(skill, /claude|anthropic|--clay|var\(--serif\)/i);
  assert.equal(existsSync(path.join(root, '.claude-plugin', 'marketplace.json')), false);
  assert.equal(existsSync(path.join(root, 'plugins', 'noslop', '.claude-plugin', 'plugin.json')), false);
});

test('all documented example links resolve to files in the fork', () => {
  const readme = read('README.md');
  const links = [...readme.matchAll(/\]\((examples\/[^)]+\.html)\)/g)].map(match => match[1]);
  assert.equal(new Set(links).size, 9);
  for (const link of links) assert.ok(existsSync(path.join(root, ...link.split('/'))), link);
  assert.match(readme, /copilot plugin install stefanstranger\/grenade/);
  assert.match(readme, /copilot plugin install noslop@grenade/);
  assert.match(readme, /copilot --plugin-dir \./);
});

const examples = readdirSync(path.join(root, 'examples')).filter(name => name.endsWith('.html'));
for (const name of examples) {
  test(`${name} is standalone and retains valid application scripts`, () => {
    const html = read('examples', name);
    assert.doesNotMatch(html, /claude|anthropic|frame-runtime|__FRAME_PREAMBLE|postMessage/i);
    for (const [index, match] of [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].entries()) {
      assert.doesNotThrow(() => new Script(match[1], { filename: `${name}:script-${index}` }));
    }

    if (name === 'sloppy-dashboard.html') return;
    assert.match(html, /^<!DOCTYPE html>\n<html lang="en">\n<head>/);
    assert.match(html, /<meta charset="utf-8">/);
    assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1">/);
    assert.match(html, /<\/style>\n<\/head>\n<body>/);
    assert.equal((html.match(/<body>/g) ?? []).length, 1);
    assert.match(html, /--accent: #0969da/);
    assert.match(html, /--accent: #58a6ff/);
    assert.doesNotMatch(html, /--clay|--serif|#d97757|#c6613f|Georgia/i);
    const expectedScripts = ['deal-pricer.html', 'expense-guide.html', 'monthly-report.html',
      'pitch-slides.html', 'support-cheat-sheet.html'].includes(name) ? 1 : 0;
    assert.equal([...html.matchAll(/<script\b/gi)].length, expectedScripts);
  });
}

function renderExample(name, id, initialCount) {
  const element = () => ({
    children: [],
    appendChild(child) { this.children.push(child); },
    replaceChildren() { this.children = []; },
    setAttribute() {},
    addEventListener() {}
  });
  const target = element();
  target.children = Array.from({ length: initialCount }, element);
  const document = {
    getElementById: key => key === id ? target : element(),
    createElement: element,
    createElementNS: element,
    querySelectorAll: () => [],
    addEventListener() {}
  };
  const script = [...read('examples', name).matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)][0][1];
  runInNewContext(script, { document });
  return target.children;
}

test('standalone monthly chart replaces the preview snapshot instead of duplicating data', () => {
  const nodes = renderExample('monthly-report.html', 'chart', 46);
  assert.equal(nodes.filter(node => /^\$\d+\.\d+k$/.test(node.textContent)).length, 10);
  assert.equal(nodes.filter(node => node.textContent === 'Churned').length, 1);
});

test('standalone pitch renders exactly 100 squares, 87 highlighted, even with a preview snapshot', () => {
  const nodes = renderExample('pitch-slides.html', 'waffle', 100);
  assert.equal(nodes.length, 100);
  assert.equal(nodes.filter(node => node.className === 'on').length, 87);
});
