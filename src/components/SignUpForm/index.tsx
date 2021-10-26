import { Link } from "react-router-dom";
import { TiArrowLeft, TiLockClosedOutline, TiMail } from "react-icons/ti";

import Head from "../HeadPage";
import { Input } from "../Input";
import { Button } from "../Button";

import * as S from "./styles";

export const SignUpForm = () => (
  <S.Wrapper className="float-left">
    <Head
      title="Cadastro | Mo."
      description="Faça seu cadastro e junte-se aos muitos que alcançaram o controle financeiro."
    />
    <S.Form>
      <h1>Crie sua conta</h1>
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
      <Button type="submit" btnStyle="primary">
        Cadastrar
      </Button>
    </S.Form>
    <S.WelcomeDisplay>
      <h1>
        Somos muitos em busca <br />
        do controle financeiro <span> DESEJADO.</span>
      </h1>
      <p>junte-se a nós!</p>
      <Link to="/">
        <TiArrowLeft />
        Voltar para login
      </Link>
    </S.WelcomeDisplay>
  </S.Wrapper>
);
