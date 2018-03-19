import React from "react";
import PostsContainer from "../containers/PostsContainer";
import CreatePostsContainer from "../containers/CreatePostsContainer";

function Posts() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>Posts </h1>
        <PostsContainer />
      </div>
      <div style={{float: "left", width: "49%"}}>
        <CreatePostsContainer />
      </div>
    </div>
  );
}
export default Contacts;
