import React from "react";

function useCustomLegalEntityDataUpdate() {
  const fields = [
    {name: "legalName", number: 10, label: "Custom legal name"},
    {name: "regNo", number: 15, label: "Registration number"}
  ];
  return fields;
}

export {useCustomLegalEntityDataUpdate};
