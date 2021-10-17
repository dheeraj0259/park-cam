import { Route, Switch } from 'react-router-dom';
// layouts
import Home from '../src/pages/Home';
import Page404 from '../src/pages/Page404';
import SignIn from '../src/pages/SignIn';
import SignUp from '../src/pages/SignUp';

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
          <Route path="*">
            <Page404 />
          </Route>
      </Switch>
  );
}
