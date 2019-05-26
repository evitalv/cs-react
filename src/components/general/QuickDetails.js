import React, {useState} from "react";

function QuickDetails(props) {
  const [activeTab, setActiveTab] = useState(0);

  function handleClick(index, url) {
    setActiveTab(index);
    props.callback(index, url);
  }
  const tabNames = (
    <ul>
      {props.data.map((item, index) => (
        <li key={item.tabName} onClick={() => handleClick(index, item.source)}>
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
