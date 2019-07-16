import React, {useEffect} from "react";
import OneRecord from "./QuickTabOneRecord";
import ManyRecords from "./QuickTabManyRecords";

function ContentsOfOneQuickTab(props) {
  useEffect(() => {
    console.log(`Tab is ${props.tab}`);
  });
  let oneOrMany;
  if (props.fixedData[props.tab].type == "one") {
    oneOrMany = <OneRecord {...props} />;
  } else {
    oneOrMany = <div class="many"><ManyRecords {...props} /></div>;
  }
  return oneOrMany;
}
export default ContentsOfOneQuickTab;
