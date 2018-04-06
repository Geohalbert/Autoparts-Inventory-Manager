import React from "react";
import PostsContainer from "../Containers/PostsContainer";
import CreateThingsContainer from "../Containers/CreateThingsContainer";

function Main() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>Posts </h1>
        <PostsContainer />
      </div>
      <div style={{float: "left", width: "49%"}}>
        <div><CreateThingsContainer /></div>
      </div>
    </div>
  );
}
export default Main;
