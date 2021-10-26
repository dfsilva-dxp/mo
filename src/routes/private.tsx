import { Redirect, Route, RouteProps } from "react-router-dom";
import { Layout } from "../components/Layout";

interface PrivateRouteProps extends RouteProps {}

export const PrivateRoute = ({ ...props }: PrivateRouteProps) => {
  return true ? (
    <Layout>
      <Route {...props} />
    </Layout>
  ) : (
    <Redirect to="/" />
  );
};
