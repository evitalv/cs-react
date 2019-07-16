import React, {useState, useEffect, useReducer} from "react";
import Axios from "axios";
import QuickDetails from "../general/QuickDetails";
import ContentsOfOneQuickTab from "../general/ContentsOfOneQuickTab";
import {useCustomLegalEntityDataQuick} from "../../hooks/custom/QuickViewData";

function LegalEntityQuickDetails(props) {
  let [generalLabels, generalAttributes, acceptorLabels, acceptorAttr] = useCustomLegalEntityDataQuick();
  if (!generalLabels.length) {
    generalLabels = [
      "Internal ID",
      "Legal name",
      "Legal form",
      "Country",
      "Registration no.",
      "Reg. date",
      "Status"
    ];
  }
  if (!generalAttributes.length) {
    generalAttributes = [
      ["id", ""],
      ["legalName", ""],
      ["legalForm", ""],
      ["country", ""],
      ["regNo", ""],
      ["regDate", "d"],
      ["status", ""]
    ];
  }
  if (!acceptorLabels.length) {
    acceptorLabels = [
      "Internal ID",
      "Local name",
      "MCC"
    ];
  }
  if (!acceptorAttr.length) {
    acceptorAttr = [
      ["id", ""],
      ["localName", ""],
      ["mcc", ""]
    ];
  }
  const general = {
    tabName: "General",
    source: `http://localhost:8080/legal-entities/${props.leid}`,
    labels: generalLabels,
    attributes: generalAttributes,
    type: "one"
  }
  const acceptors = {
    tabName: "Acceptors",
    source: `http://localhost:8080/legal-entities/${props.leid}/acceptors`,
    labels: acceptorLabels,
    attributes: acceptorAttr,
    type: "many"
  }
  const allFixedData = [general, acceptors];
  const initialState = {activeTab: 0, tabData: {}};
  function reducer(state, action) {
    return {activeTab: action.activeTab, tabData: action.tabData};
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  function loadData(index, url) {
    Axios.get(url).then(res => {
      // setTabData(res.data);
      // setActiveTab(index);
      dispatch({activeTab: index, tabData: res.data});
    });
  }

  useEffect(() => {
    if (props.leid) {
      Axios.get(`http://localhost:8080/legal-entities/${props.leid}`).then(res => {
        // setTabData(res.data);
        console.log("Inside le qd useeffect");
        dispatch({activeTab: 0, tabData: res.data});
      });
    }
  }, [props.leid]);

  return props.leid ? (
    <QuickDetails name={state.tabData[props.nameField]} data={allFixedData} callback={loadData} activeTab={state.activeTab}>
      <ContentsOfOneQuickTab data={state.tabData} tab={state.activeTab} fixedData={allFixedData}/>
    </QuickDetails>
  ) : null;
}

export default LegalEntityQuickDetails;
