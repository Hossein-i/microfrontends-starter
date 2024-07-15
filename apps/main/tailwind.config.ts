import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",

    // @repo/ui
    // "../../node_modules/@repo/ui/dist/index.css",
    "../../node_modules/@repo/ui/src/components/**/*.{ts,tsx}",
  ],
  presets: [sharedConfig],
};
export default config;
