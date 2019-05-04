import React, {useEffect, useRef} from "react";

function ClickableTable(props) {
  const tbodyRef = useRef(null);
  const data = props.data;

  // Set the focus on the current table row
  useEffect(() => {
    const id = props.currentRowId;
    if (id > -1) {
      const rows = tbodyRef.current.children;
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].tabIndex == id) {
          rows[i].focus();
          break;
        }
      }
    }
  });

  const tHeadings = (
    <tr>
      {props.headings.map(item => (
        <th key={item}>{item}</th>
      ))}
    </tr>
  );

  const tRows = data.map(item => (
    <tr
      tabIndex={item.id}
      key={item.id}
      onClick={() => props.rowClick(item.id)}
      onKeyDown={props.keyDown}
    >
      {props.attributes.map(attr => (
        <td key={attr}>{item[attr]}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>{tHeadings}</thead>
      <tbody ref={tbodyRef}>{tRows}</tbody>
    </table>
  );
}

export default ClickableTable;
