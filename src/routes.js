import { Route, Switch } from 'react-router-dom';
// layouts
import Home from '../src/pages/Home';

export default function Router() {
  return (
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
      </Switch>
  );
}
