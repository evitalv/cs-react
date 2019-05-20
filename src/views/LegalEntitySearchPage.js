import React, {useState, useEffect} from "react";
import Axios from "axios";
import TableForSearchResults from "../components/general/TableForSearchResults";
import LegalEntityQuickDetails from "../components/legal-entities/LegalEntityQuickDetails";
import SearchCriteriaLE from "../components/legal-entities/SearchCriteriaLE";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
// import useTableCurrentRow from "../hooks/useTableCurrentRow";
import {useCustomLegalEntityData} from "../hooks/custom/TableData";

function LegalEntitySearchPage({match}) {
  const [currentRowId, setCurrentRowId] = useState(null);
  // const legalEntities1 = createLegalEntities(5);
  const [legalEntities, setLegalEntities] = useState([]);

  let [columnHeadings, columnData] = useCustomLegalEntityData();
  if (!columnHeadings.length) {
    columnHeadings = [
      "Internal ID",
      "Legal Name",
      "Legal form",
      "Country",
      "Registration No.",
      "Reg. Date",
      "Status"
    ];
  }
  if (!columnData.length) {
    columnData = [
      ["id", "", ""],
      ["legalName", "", ""],
      ["legalForm", "", ""],
      ["country", "", ""],
      ["regNo", "", "r"],
      ["regDate", "d", ""],
      ["status", "", ""]
    ];
  }

  // const [handleRowClick, handleRowKeyDown] = useTableCurrentRow(
  //   setCurrentRowId
  // );

  useEffect(() => {
    Axios.get("http://localhost:8080/legal-entities").then(res => {
      setLegalEntities(res.data);
    });
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios("http://localhost:8080/legal-entities");
  //     setLegalEntities(result.data);
  //     console.log("axios");
  //   };
  //   fetchData();
  // }, []);

  return (
    <React.Fragment>
      <SearchCriteriaLE />
      <div class="table-quick">
        <TableForSearchResults
          data={legalEntities}
          headings={columnHeadings}
          attributes={columnData}
          detailsLink="/legal-entities-quick"
        />
        <LegalEntityQuickDetails leid={match.params.leid} />
      </div>
    </React.Fragment>
  );
}

// Factory function
function createLegalEntity(id, legalName, bank, contractNo) {
  return {id, legalName, bank, contractNo};
}

function createLegalEntities(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(createLegalEntity(i, `name${i}`, "OTP", `contractNo${i}`));
  }
  return result;
}

export default LegalEntitySearchPage;
