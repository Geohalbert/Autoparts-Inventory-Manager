import React from "react";
import CollapsableMapper from "./CollapsableMapper";


function Posts(props) {
  // console.log(props.posts)
  return (
    // console.log("from Posts Component - this.props.posts: ",this.props.posts)
    <CollapsableMapper data={props.posts} path="posts" field="seller" />
  );
}
export default Posts;
