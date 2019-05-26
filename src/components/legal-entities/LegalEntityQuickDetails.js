import React, {useState, useEffect} from "react";
import Axios from "axios";
import QuickDetails from "../general/QuickDetails";

function LegalEntityQuickDetails(props) {
  const [tabData, setTabData] = useState({});
  const general = {
    "tabName": "General",
    "source": `http://localhost:8080/legal-entities/${props.leid}`
  }
  const agreements = {
    "tabName": "Agreements",
    "source": `http://localhost:8080/legal-entities/${props.leid}`
  }
  const cases = {
    "tabName": "Open Cases",
    "source": `http://localhost:8080/legal-entities/${props.leid}`
  }

  function loadData(index, url) {
    Axios.get(url).then(res => {
      setTabData(res.data);
      // console.log(res.data);
    });
  }

  useEffect(() => {
    if (props.leid) {
      Axios.get(`http://localhost:8080/legal-entities/${props.leid}`).then(res => {
        setTabData(res.data);
        console.log("Inside le qd useeffect");
      });
    }
  }, [props.leid]);

  return (
    <QuickDetails name="Alfa" data={[general, agreements, cases]} callback={loadData}>
      <DataWithTags data={tabData}/>
    </QuickDetails>
  );
}

export default LegalEntityQuickDetails;

function DataWithTags(props) {

  useEffect(() => {

    console.log("Inside datawithtags");

  });

  return (
     <div>{props.data.legalName}</div>
  );

}
