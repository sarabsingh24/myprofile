import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Preview from "../pages/preview";

import Home from "./home";

import ErrorPage from "./error-page";

const pageScrollTo = React.createContext();

export default function Index() {
  return (
    <>
      <Router basename="/sarabportfolio">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/preview/:id" component={Preview} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export { pageScrollTo };
