import React from "react";
import {Link} from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <section id="home-main">
        <h1>Card Suite Home</h1>
        <div>
          <Link to="/legal-entities">Legal entities</Link>
          <Link to="/cases">Cases</Link>
          <Link to="/cases">Something</Link>
          <Link to="/cases">Something</Link>
          <Link to="/cases">Something</Link>
        </div>
      </section>
      </React.Fragment>
  );
}

export default Home;
