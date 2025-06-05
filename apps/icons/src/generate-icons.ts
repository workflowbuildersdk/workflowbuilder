import { execSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { createIconEntry } from './create-icon-entry';
import { outputDirectory, sources } from '../config.json';
import { mkdirSync, rmSync } from 'node:fs';

function setupOutputDirectory() {
  rmSync(outputDirectory, { recursive: true, force: true });
  mkdirSync(outputDirectory);
}

export function generateIcons() {
  setupOutputDirectory();

  for (const path of sources) {
    execSync(`npx @svgr/cli --no-index --typescript --out-dir ${outputDirectory} -- ${path}`);
  }

  const keys = readdirSync(outputDirectory).map((fileName) => fileName.split('.tsx')[0]);

  createIconEntry(keys);
}

generateIcons();
