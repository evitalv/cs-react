import React from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

function Home() {
  return (
    <section>
      <Link to="/legal-entities">Legal entities</Link>
    </section>
  );
}

export default Home;
