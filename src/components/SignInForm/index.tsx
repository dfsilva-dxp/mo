import { Link } from "react-router-dom";
import { TiLockClosedOutline, TiMail } from "react-icons/ti";

import Head from "../HeadPage";
import { Input } from "../Input";
import { Button } from "../Button";

import * as S from "./styles";

export const SignInForm = () => {
  return (
    <S.Wrapper className="float-left">
      <Head
        title="Login | Mo."
        description="Faça seu login
na plataforma, acompanhe seus gastos e controle suas finanças."
      />
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
        <Link to="/forgot">Esqueceu a senha?</Link>
        <Button type="submit" btnStyle="primary">
          Entrar
        </Button>
        <S.Paragraph>
          Não tem conta?
          <Link to="/signup">Cadastre-se</Link>
        </S.Paragraph>
      </S.Form>
    </S.Wrapper>
  );
};
