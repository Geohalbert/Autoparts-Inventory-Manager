import React from "react";
import CollapsableMapper from "./CollapsableMapper";


function Posts(props) {
  // console.log(props.posts)
  return (
    // console.log("from Posts Component - this.props.posts: ",this.props.posts)
    <CollapsableMapper data={props.posts} path="posts" field="seller" field1="item" field2="price" field3="location" />
  );
}
export default Posts;
