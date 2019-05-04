import React from "react";
import "./App.css";
import LegalEntitySearchPage from "./views/LegalEntitySearchPage";
import CaseSearchPage from "./views/CaseSearchPage";
import Home from "./views/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/legal-entities" component={LegalEntitySearchPage} />
          <Route exact path="/legal-entities/:leid" component={LegalEntitySearchPage} />
          <Route exact path="/cases" component={CaseSearchPage} />
          <Route exact path="/cases/:caseId" component={CaseSearchPage} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
