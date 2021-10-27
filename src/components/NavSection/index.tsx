import { ReactNode } from "react";

import * as S from "./styles";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export const NavSection = ({ title, children }: NavSectionProps) => {
  return (
    <S.Wrapper>
      <h4>{title}</h4>
      <S.Links>{children}</S.Links>
    </S.Wrapper>
  );
};
