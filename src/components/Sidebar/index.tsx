import { RiAddBoxLine, RiDashboardLine, RiWallet3Line } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

import { NavSection } from "../NavSection";
import { NavLinks } from "../NavLink";

import * as S from "./styles";
import { TiUserOutline } from "react-icons/ti";

export const Sidebar = () => {
  return (
    <S.Sidebar>
      <NavSection title="Geral">
        <NavLinks
          label="Dashboard"
          href="/dashboard"
          icon={<RiDashboardLine />}
        />
      </NavSection>
      <NavSection title="Carteira">
        <NavLinks
          label="Transações"
          href="/transactions"
          icon={<RiWallet3Line />}
        />
        <NavLinks
          label="Nova transação"
          href="/new-transaction"
          icon={<RiAddBoxLine />}
        />
      </NavSection>
      <NavSection title="Geral">
        <NavLinks label="Perfil" href="/profile" icon={<TiUserOutline />} />
        <span>
          <MdLogout /> Sair
        </span>
      </NavSection>
    </S.Sidebar>
  );
};
