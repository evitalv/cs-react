import React, {useState, useEffect} from "react";
import Axios from "axios";
import TableForSearchResults from "../components/general/TableForSearchResults";
import LegalEntityQuickDetails from "../components/legal-entities/LegalEntityQuickDetails";
import SearchCriteriaLE from "../components/legal-entities/SearchCriteriaLE";
import UpdateLE from "../components/legal-entities/UpdateLE";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
// import useTableCurrentRow from "../hooks/useTableCurrentRow";
import {useCustomLegalEntityDataTable} from "../hooks/custom/TableData";

function LegalEntitySearchPage({match}) {
  const [legalEntities, setLegalEntities] = useState([]);
  const [currentRowId, setCurrentRowId] = useState(null);
  const [update, setUpdate] = useState(false);
  const [idForUpdate, setIdForUpdate] = useState(null);

  let [columnHeadings, columnData] = useCustomLegalEntityDataTable();
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
  const nameField = "legalName";

  const showUpdate = (id) => {
    setUpdate(true);
    setIdForUpdate(id);
  };
  const hideUpdate = () => {
    setUpdate(false);
  };
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
      <UpdateLE leid={idForUpdate} isShowing={update} hide={hideUpdate} nameField={nameField} />
      <div className="table-quick">
        <TableForSearchResults
          data={legalEntities}
          headings={columnHeadings}
          attributes={columnData}
          detailsLink="/legal-entities-quick"
          update={showUpdate} nameField={nameField}
        />
        <LegalEntityQuickDetails leid={match.params.leid} />
      </div>
    </React.Fragment>
  );
}

export default LegalEntitySearchPage;
