#!/usr/bin/env node
/*
 * Helper deploy script that reuses the Vite build output and reminds
 * maintainers how to publish the generated files.
 */
const { spawnSync } = require('node:child_process');
const { existsSync } = require('node:fs');
const { resolve } = require('node:path');

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const buildResult = spawnSync(npmCommand, ['run', 'build'], {
  stdio: 'inherit',
});

if (buildResult.status !== 0) {
  console.error('\n❌ Build failed. Deployment steps were skipped.');
  process.exit(buildResult.status ?? 1);
}

const distPath = resolve(process.cwd(), 'dist');

if (!existsSync(distPath)) {
  console.warn('\n⚠️ Build finished, but the dist/ directory could not be found.');
  console.warn('Please verify your Vite configuration before deploying.');
  process.exit(0);
}

console.log('\n✅ Build complete.');
console.log('Deploy hint: upload the contents of dist/ to your hosting provider.');
console.log('If you use GitHub Pages, push the dist/ folder to a gh-pages branch');
console.log('or configure an automated workflow to publish the static assets.');
