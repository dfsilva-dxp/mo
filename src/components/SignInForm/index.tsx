import { TiLockClosedOutline, TiMail } from "react-icons/ti";

import { Input } from "../Input";
import { Button } from "../Button";

import * as S from "./styles";

export const SignInForm = () => (
  <S.Wrapper className="float-left">
    <S.WelcomeDisplay>
      <p>Bem-vindo (a) ao MO.</p>
      <h1>
        Faça login e <br />
        construa o futuro financeiro que você <span> SONHA.</span>
      </h1>
    </S.WelcomeDisplay>
    <S.Form>
      <Input
        type="email"
        name="email"
        id="email"
        required
        placeholder="Seu e-mail"
        icon={<TiMail />}
      />
      <Input
        type="password"
        name="password"
        id="password"
        required
        placeholder="Sua senha"
        icon={<TiLockClosedOutline />}
      />
      <a href="/login/esqueci-a-senha">Esqueceu a senha?</a>
      <Button type="submit" btnStyle="primary">
        Entrar
      </Button>
      <S.Paragraph>
        Não tem conta?
        <a href="/login/cadastrar">Cadastre-se</a>
      </S.Paragraph>
    </S.Form>
  </S.Wrapper>
);
