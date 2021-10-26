import { Route, Switch, useRouteMatch } from "react-router-dom";

import { SignInForm } from "../components/SignInForm";
import { SignUpForm } from "../components/SignUpForm";
import { ForgotForm } from "../components/ForgotForm";

export const LoginRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`} component={SignInForm} />
      <Route exact path={`/signup`} component={SignUpForm} />
      <Route exact path={`/forgot`} component={ForgotForm} />
    </Switch>
  );
};
