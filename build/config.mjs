import { join } from 'node:path';
import { readdir } from 'node:fs/promises';

const resursiveRead = async (path) => {
    const paths = []
    const files = await readdir(path, { withFileTypes: true });
    for (const dirent of files) {
        const filePath = join(path, dirent.name)
        if (dirent.isDirectory()) {
            paths.push(... await resursiveRead(filePath))
        } else {
            paths.push(filePath)
        }
    }
    return paths
}

const config = {
    entryPoints: ['index.jsx', ... await resursiveRead("pages")],
    bundle: true,
    platform: "neutral",
    jsx: 'automatic',
    target: ["esnext"],
    outdir: 'dist',
}

export default config