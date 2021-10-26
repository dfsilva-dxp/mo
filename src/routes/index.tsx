import { Route, Switch } from "react-router-dom";

import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { PrivateRoute } from "./private";

export const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Route path="/" component={Login} />
      <Route path="*" component={() => <h1>Not Found</h1>} />
    </Switch>
  );
};
