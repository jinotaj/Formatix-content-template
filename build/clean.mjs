import { access, constants, rm } from 'node:fs/promises';
import config from "./config.mjs"

const recursiveDelete = async (path) => {
    try {
        await access(path, constants.F_OK);
        await rm(path, { recursive: true })
    } catch {
        // directory doesn't exists, nothing to delete
    }

}

await recursiveDelete(config.outdir)