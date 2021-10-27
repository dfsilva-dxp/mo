import { NavLink } from "react-router-dom";

import * as S from "./styles";

interface NavLinkProps {
  icon: JSX.Element;
  label: string;
  href: string;
}

export const NavLinks = ({ icon, label, href, ...props }: NavLinkProps) => {
  return (
    <S.Wrapper>
      <NavLink to={href}>
        {icon}
        {label}
      </NavLink>
    </S.Wrapper>
  );
};
