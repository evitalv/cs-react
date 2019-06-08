import React from "react";

function useCustomLegalEntityDataQuick() {
  const generalLabels = [];
  const generalAttributes = [];
  const acceptorLabels = [];
  const acceptorAttributes = [];
  return [generalLabels, generalAttributes, acceptorLabels, acceptorAttributes];
}

function useCustomCaseDataQuick() {
  const labels = [];
  const values = [];
  return [labels, values];
}

export {useCustomLegalEntityDataQuick, useCustomCaseDataQuick};
