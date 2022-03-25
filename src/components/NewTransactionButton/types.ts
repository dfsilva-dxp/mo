import { AnchorHTMLAttributes, ReactNode } from "react";

export type NewTransactionButtonProps = {
  label: string;
  description?: string;
  icon: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
