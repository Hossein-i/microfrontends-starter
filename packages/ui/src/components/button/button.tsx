import buttonStyle from "./button-style";

import type { VariantProps } from "tailwind-variants";

type BaseButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonVariants = VariantProps<typeof buttonStyle>;

export type ButtonProps = BaseButtonProps & ButtonVariants;

const Button: React.FC<ButtonProps> = (props) => {
  return <button {...{ ...props, className: buttonStyle(props) }} />;
};

export default Button;
