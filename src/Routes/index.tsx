import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Home } from "../pages/Home";
import { Play } from "../pages/Play";
import { Player } from "../pages/Player";

export const Routes: React.FunctionComponent = () => {
  const GoHome: React.FunctionComponent = () => <Redirect to="/" />;

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/player" component={Player} />
        <Route path="/play" component={Play} />
        <Route path="*" component={GoHome} />
      </Switch>
    </Router>
  );
};
