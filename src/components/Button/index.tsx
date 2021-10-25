import { ButtonHTMLAttributes, ReactNode } from "react";

import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  btnStyle: "primary" | "secondary";
}

export function Button({ children, btnStyle, ...props }: ButtonProps) {
  return (
    <>
      <S.Button {...props} className={btnStyle}>
        {children}
      </S.Button>
    </>
  );
}
