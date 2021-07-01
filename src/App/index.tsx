import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTES } from "../routes/components";

const App = () => (
  <React.StrictMode>
    <Router>
      <Switch>
        {ROUTES.map(({ pathname, component: Component }) => (
          <Route path={pathname} component={Component} />
        ))}
      </Switch>
    </Router>
  </React.StrictMode>
);

export default App;
