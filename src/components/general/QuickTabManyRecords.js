import React from "react";

function QuickTabManyRecords(props) {
  const labels = props.fixedData[props.tab].labels;
  const attributes = props.fixedData[props.tab].attributes;

  function OneRecord(recordIndex) {
    return attributes.map((item, attrIndex) => (
      <React.Fragment key={labels[attrIndex]}>
        <dt>{labels[attrIndex]}</dt>
        <dd>{props.data[recordIndex][item[0]]}</dd>
      </React.Fragment>
    ));
  }

  return props.data.map((item, index) => (
    <dl key={index}>{OneRecord(index)}</dl>
  ));
}
export default QuickTabManyRecords;
