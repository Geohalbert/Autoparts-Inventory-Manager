import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Posts(props) {
  return (
    <CollapsableMapper data={props.posts} path="post" field="Location" field1="Item" field2="Price"  />
  );
}
export default Posts;
