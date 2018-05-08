import React from "react";
import PartsContainer from "../Containers/PartsContainer";
import CreatePartsContainer from "../Containers/CreatePartsContainer";
import SearchPartsContainer from "../Containers/SearchPartsContainer";
import EditPartContainer from "../Containers/EditPartContainer";
function Main() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <div><SearchPartsContainer /></div>
        <h1>Parts </h1>
        <PartsContainer />
      </div>
      <div style={{float: "left", width: "49%"}}>
        <div><CreatePartsContainer /></div>
        <div><EditPartContainer /></div>
      </div>
    </div>
  );
}
export default Main;
