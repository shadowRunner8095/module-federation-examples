import { promises as fs } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Source and destination directories
const srcDir = resolve(__dirname, '../src');
const destDir = resolve(__dirname, '../../../dist');

// Recursively copy directory
async function copyDir(src: string, dest: string) {
  
    await fs.mkdir(dest, { recursive: true });
    await fs.cp(src, destDir, {
        recursive: true,
        force: true
    })

}

await copyDir(srcDir, destDir);