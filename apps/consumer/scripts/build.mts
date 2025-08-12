import { promises as fs } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Source and destination directories
const srcDir = resolve(__dirname, '../src');
const isProduction = process.env.BUILD_ENV === 'production';
const destDir = isProduction
    ? resolve(__dirname, '../../../dist/consumer')
    : resolve(__dirname, '../../../dist');

// Recursively copy directory
async function copyDir(src: string, dest: string) {
    await fs.mkdir(dest, { recursive: true });
    await fs.cp(src, dest, {
        recursive: true,
        force: true
    });

    // If production, patch index.html's data-env
    if (isProduction) {
        const indexPath = join(dest, 'index.html');
        try {
            let html = await fs.readFile(indexPath, 'utf8');
            html = html.replace(/data-env="[^"]*"/, 'data-env="production"');
            await fs.writeFile(indexPath, html, 'utf8');
        } catch (e) {
            console.warn('Could not patch data-env in index.html:', e);
        }
    }
}

await copyDir(srcDir, destDir);