import { LoginRoutes } from "../../routes/login";

import * as S from "./styles";

export const Login = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <div className="container">
          <img
            src="/images/logo.svg"
            alt="Logotipo do aplicativo Mo. para controle financeiro"
            title="Logotipo do aplicativo Mo. para controle financeiro"
          />
        </div>
      </S.Header>

      <div className="container">
        <LoginRoutes />
      </div>

      <S.Footer>
        <p>
          &copy; 2021 &bull; <span>MO.app</span> Todos os direitos reservados{" "}
        </p>
      </S.Footer>
    </S.Wrapper>
  );
};
