import React from "react";

function useCustomLegalEntityDataTable() {
  const columnHeadings = [];
  const columnData = [];
  return [columnHeadings, columnData];
}

function useCustomCaseDataTable() {
  const columnHeadings = [];
  const columnData = [];
  return [columnHeadings, columnData];
}

export {useCustomLegalEntityDataTable, useCustomCaseDataTable};
