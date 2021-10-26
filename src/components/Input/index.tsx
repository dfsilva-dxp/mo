import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";

import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
}

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { icon, ...props }: InputProps,
  ref
) => {
  return (
    <S.FormGroup>
      <S.Icon>{icon}</S.Icon>
      <S.Input {...props} ref={ref} />
    </S.FormGroup>
  );
};

export const Input = forwardRef(InputDefault);
