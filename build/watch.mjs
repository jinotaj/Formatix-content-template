import * as esbuild from 'esbuild'
import config from "./config.mjs"

console.log(config)

const ctx = await esbuild.context(config)
await ctx.watch()