import { Route, Switch } from "react-router-dom";

import { Layout } from "../components/Layout";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Login} />
      <Layout>
        <Route exact path="/dashboard" component={Dashboard} />
      </Layout>
    </Switch>
  );
};
