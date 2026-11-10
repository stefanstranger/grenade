import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = (...parts) => readFileSync(path.join(root, ...parts), 'utf8').replaceAll('\r\n', '\n');
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

test('README documents direct, marketplace, and local plugin installation', () => {
  const readme = read('README.md');
  assert.match(readme, /copilot plugin install stefanstranger\/grenade/);
  assert.match(readme, /copilot plugin install noslop@grenade/);
  assert.match(readme, /copilot --plugin-dir \./);
});
