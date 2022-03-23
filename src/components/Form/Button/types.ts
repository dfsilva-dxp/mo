import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  fullSize?: boolean;
  icon?: ReactNode;
  color?: "primary" | "darkgray" | "lightgray";
} & ButtonHTMLAttributes<HTMLButtonElement>;
