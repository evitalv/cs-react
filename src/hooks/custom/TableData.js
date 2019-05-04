import React from "react";

function useCustomLegalEntityData() {
  const columnHeadings = [];
  const columnData = [];
  return [columnHeadings, columnData];
}

function useCustomCaseData() {
  const columnHeadings = [];
  const columnData = [];
  return [columnHeadings, columnData];
}

export {useCustomLegalEntityData, useCustomCaseData};
