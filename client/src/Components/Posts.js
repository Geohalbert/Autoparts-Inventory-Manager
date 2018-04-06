import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Posts(props) {
  return (
    <CollapsableMapper data={props.posts} path="post" field="seller" />
  );
}
export default Posts;
