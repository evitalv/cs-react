import React from "react";

function LegalEntityQuickDetails(props) {
  return (
    <section class="quick-details">
      <h3>Name</h3>
      <div>
        <nav>
          <ul>
            <li>General</li>
            <li>Agreements</li>
            <li>Open Cases</li>
          </ul>
        </nav>
        <div class="tab-content">
          The current row number is {props.leid}.
        </div>
      </div>
    </section>
  );
}

export default LegalEntityQuickDetails;
