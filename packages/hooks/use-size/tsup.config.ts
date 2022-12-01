import { defineConfig } from "tsup"
import { findUpSync } from "find-up"

export default defineConfig({
  clean: true,
  format: ["cjs", "esm"],
  outExtension(ctx) {
    return { js: `.${ctx.format}.js` }
  },
  target: ["chrome64", "edge79", "firefox67", "opera51", "safari12"],
})
