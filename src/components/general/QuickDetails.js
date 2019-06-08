import React, {useState} from "react";

function QuickDetails(props) {

  const tabNames = (
    <ul>
      {props.data.map((item, index) => (
        <li key={item.tabName} onClick={() => props.callback(index, item.source)}
          className={`${props.activeTab == index ? "active" : ""}`}>
          {item.tabName}
        </li>
      ))}
    </ul>
  );

  return (
    <section className="quick-details">
      <h3>{props.name}</h3>
      <div>
        <nav>{tabNames}</nav>
        {props.children}
      </div>
    </section>
  );
}

export default QuickDetails;
