import React from "react";
import PostsContainer from "../Containers/PostsContainer";
import CreatePostsContainer from "../Containers/CreatePostsContainer";

function Main() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>Posts </h1>
        <PostsContainer />
      </div>
      <div style={{float: "left", width: "49%"}}>
        <div><CreatePostsContainer /></div>
      </div>
    </div>
  );
}
export default Main;
