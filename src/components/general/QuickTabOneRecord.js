import React from "react";

function QuickTabOneRecord(props) {
  const labels = props.fixedData[props.tab].labels;
  const attributes = props.fixedData[props.tab].attributes;

  const dList = attributes.map((item, index) => (
    <React.Fragment key={labels[index]}>
      <dt>{labels[index]}</dt>
      <dd>{props.data[item[0]]}</dd>
    </React.Fragment>
  ));

  return (
    <dl>
      <dt>Legal name</dt>
      <dd>{props.data.legalName}</dd>
      {dList}
    </dl>
  );
}
export default QuickTabOneRecord;
