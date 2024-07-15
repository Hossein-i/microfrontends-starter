import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";
import { withTV } from "tailwind-variants/transformer";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/components/**/*.{ts,tsx}"],
  presets: [sharedConfig],
};

export default withTV(config);
