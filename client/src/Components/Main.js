import React from "react";
import PostsContainer from "../Containers/PostsContainer";
import CreatePostContainer from "../Containers/CreatePostContainer";

function Posts() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>Posts </h1>
        <PostsContainer />
      </div>
      <div style={{float: "left", width: "49%"}}>
        <CreatePostContainer />
      </div>
    </div>
  );
}
export default Posts;
