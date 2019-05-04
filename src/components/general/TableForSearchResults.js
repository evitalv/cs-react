import React from "react";
import {Link} from "react-router-dom";

function TableForSearchResults(props) {
  const data = props.data;

  function format(value, type) {
    if (type === "" || value == null) {
      return value;
    } else if (type === "d") {
      const dateObj = new Date(value);
      return dateObj.toLocaleDateString();
    } else {
      return "Error: Unknown data type";
    }
  }

  const tHeadings = (
    <tr>
      {props.headings.map(item => (
        <th key={item}>{item}</th>
      ))}
    </tr>
  );

  const tRows = data.map(item => (
    <tr key={item.id}>
      {props.attributes.map(attr => (
        <td key={attr[0]}>
          <Link to={`${props.detailsLink}/${item.id}`}>
            {format(item[attr[0]], attr[1])}
          </Link>
        </td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>{tHeadings}</thead>
      <tbody>{tRows}</tbody>
    </table>
  );
}

export default TableForSearchResults;
