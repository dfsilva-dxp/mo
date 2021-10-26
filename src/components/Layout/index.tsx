import { Header } from "../Header";
import * as S from "./styles";

export const Layout = () => (
  <S.Wrapper>
    <div className="container">
      <Header />
      <S.Sidebar>Aside</S.Sidebar>
      <S.About>About</S.About>
      <S.Content>Content</S.Content>
    </div>
  </S.Wrapper>
);
