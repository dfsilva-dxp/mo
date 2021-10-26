import { RiSearchLine } from "react-icons/ri";

import { Search } from "../InputSearch";

import * as S from "./styles";

export const Header = () => (
  <S.Header>
    <img
      src="/images/logo.svg"
      alt="Logotipo do aplicativo Mo. para controle financeiro"
      title="Logotipo do aplicativo Mo. para controle financeiro"
    />
    <Search placeholder="Buscar na plataforma" icon={<RiSearchLine />} />
  </S.Header>
);
