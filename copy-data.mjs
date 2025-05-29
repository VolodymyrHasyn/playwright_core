// copy-data.mjs
import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const src = './data';
const dest = './dist/data';

function copyDir(srcDir, destDir) {
  mkdirSync(destDir, { recursive: true });
  for (const item of readdirSync(srcDir)) {
    const srcPath = join(srcDir, item);
    const destPath = join(destDir, item);
    if (statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(src, dest);
console.log('✅ data/ скопійовано в dist/');
