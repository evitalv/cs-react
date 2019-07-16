import React from "react";

function useCustomLegalEntityDataUpdate() {
  const fields = [
    {name: "legalName", orderNumber: 10, label: "Custom legal name"},
    {name: "regNo", orderNumber: 15, label: "Registration number"}
  ];
  return fields;
}

export {useCustomLegalEntityDataUpdate};
