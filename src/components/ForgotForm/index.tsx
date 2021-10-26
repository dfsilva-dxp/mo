import { TiArrowLeft, TiMail } from "react-icons/ti";

import Head from "../HeadPage";
import { Input } from "../Input";
import { Button } from "../Button";

import * as S from "./styles";
import { Link } from "react-router-dom";

export const ForgotForm = () => (
  <S.Wrapper className="float-left">
    <Head
      title="Recuperar senha | Mo."
      description="Recupere sua senha e continue mantendo o controle financeiro."
    />
    <S.Form>
      <h1>Recuperar senha</h1>
      <Input
        type="email"
        name="email"
        id="email"
        required
        placeholder="Seu e-mail"
        icon={<TiMail />}
      />
      <Button type="submit" btnStyle="primary">
        Recuperar
      </Button>
      <Link to="/">
        <TiArrowLeft />
        Voltar
      </Link>
    </S.Form>
  </S.Wrapper>
);
