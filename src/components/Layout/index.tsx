import { ReactNode } from "react";

import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

import * as S from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper>
      <div className="container">
        <Header />
        <Sidebar />
        <S.About>About</S.About>
        <S.Content>{children}</S.Content>
      </div>
    </S.Wrapper>
  );
};
