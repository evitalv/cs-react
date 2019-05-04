import React, {useState, useEffect} from "react";
import Axios from "axios";
import TableForSearchResults from "../components/general/TableForSearchResults";
import CaseQuickDetails from "../components/cases/CaseQuickDetails";
import SearchCriteriaCase from "../components/cases/SearchCriteriaCase";
import {useCustomCaseData} from "../hooks/custom/TableData";

function CaseSearchPage({match}) {
  const [cases, setCases] = useState([]);

  let [columnHeadings, columnData] = useCustomCaseData();
  if (!columnHeadings.length) {
    columnHeadings = ["Internal ID", "Status"];
  }
  if (!columnData.length) {
    columnData = [["id", ""], ["status", ""]];
  }

  useEffect(() => {
    Axios.get("http://localhost:8080/cases").then(res => {
      setCases(res.data);
    });
  }, []);

  return (
    <React.Fragment>
      <SearchCriteriaCase />
      <TableForSearchResults
        data={cases}
        headings={columnHeadings}
        attributes={columnData}
        detailsLink="/cases"
      />
      <CaseQuickDetails caseId={match.params.caseId} />
    </React.Fragment>
  );
}

export default CaseSearchPage;
