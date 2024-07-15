import { tv } from "tailwind-variants";

const buttonStyle = tv({
  base: "rounded-full px-4 py-1.5 hover:opacity-80",
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      neutral: "bg-zinc-500 text-black dark:text-white",
    },
    flat: {
      true: "bg-transparent",
    },
  },
  defaultVariants: {
    color: "primary",
  },
  compoundVariants: [
    {
      color: "primary",
      flat: true,
      class: "bg-blue-500/40",
    },
    {
      color: "neutral",
      flat: true,
      class: "bg-zinc-500/20",
    },
  ],
});

export default buttonStyle;
