import React from 'react';
import {Input} from "semantic-ui-react";

function SearchPosts(props) {
  return (
      <div>
        <center>
        <h2>Posts Search</h2>
        Search Posts:
        <Input placeholder="Search by location or item" onChange={(e)=>{
            if(props.set){
              props.set(e.target.value);
            }
        }} />
        </center>
      </div>
  );
}

export default SearchPosts;
