import { Route, Switch, Redirect } from 'react-router-dom';
// layouts
import Home from '../src/pages/Home';
import Page404 from '../src/pages/Page404';
import SignIn from '../src/pages/SignIn';
import SignUp from '../src/pages/SignUp';
import Products from '../src/pages/Products';

import useAuth from "../src/utils/useAuth";

function PrivateRoute({ children, ...rest }) {
  const { isUserAuthenticated } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
      isUserAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default function Router() {
  return (
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <PrivateRoute path="/dashboard">
            <Products />
          </PrivateRoute>
          <Route path="*">
            <Page404 />
          </Route>
       </Switch>
  );
}
