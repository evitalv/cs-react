import React from "react";

function useTableCurrentRow(setId) {
  const handleRowClick = id => {
    setId(id);
  };

  const handleRowKeyDown = e => {
    if (e.keyCode === 40) {
      const nextRow = e.target.nextElementSibling;
      if (nextRow) {
        setId(nextRow.tabIndex);
      }
    } else if (e.keyCode === 38) {
      const prevRow = e.target.previousElementSibling;
      if (prevRow) {
        setId(prevRow.tabIndex);
      }
    }
  };

  return [handleRowClick, handleRowKeyDown];
}

export default useTableCurrentRow;
