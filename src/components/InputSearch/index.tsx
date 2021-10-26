import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";

import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  placeholder: string;
}

export const InputSearch: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ icon, placeholder }: InputProps, ref) => {
  return (
    <S.WrapSearch>
      <S.Icon>{icon}</S.Icon>
      <S.Input type="search" placeholder={placeholder} ref={ref} />
    </S.WrapSearch>
  );
};

export const Search = forwardRef(InputSearch);
