import React from "react";
import "./App.css";
import LegalEntitySearchPage from "./views/LegalEntitySearchPage";
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
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
