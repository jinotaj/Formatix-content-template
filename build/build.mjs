import * as esbuild from 'esbuild'
import config from "./config.mjs"

const result = await esbuild.build(config)
console.log(result)