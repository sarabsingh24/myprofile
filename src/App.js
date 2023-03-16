import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Preview from "./component/pages/preview/indexOLD";
import SinglePage from "./component/pages/singlepage/SinglePage";
import ErrorPage from "./component/pages/error-page/ErrorPage";
import "./asset/css/common.css";

const pageScrollTo = React.createContext();

export default function App() {
  return (
    <>
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={SinglePage} />
          <Route exact path="/preview/:id" component={Preview} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}


export { pageScrollTo };
