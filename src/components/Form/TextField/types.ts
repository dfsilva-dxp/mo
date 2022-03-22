import { InputHTMLAttributes, ReactNode } from "react";

export type TextFieldProps = {
  label?: string;
  labelFor?: string;
  icon?: ReactNode;
  initialValue?: string;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  onInput?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;
