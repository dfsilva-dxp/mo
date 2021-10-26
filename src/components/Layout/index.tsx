import { ReactNode } from "react";

import { Header } from "../Header";

import * as S from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper>
      <div className="container">
        <Header />
        <S.Sidebar>Aside</S.Sidebar>
        <S.About>About</S.About>
        <S.Content>{children}</S.Content>
      </div>
    </S.Wrapper>
  );
};
