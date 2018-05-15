import React from 'react';
import {Input} from "semantic-ui-react";

function SearchParts(props) {
  return (
      <div>
        <center>
        <h2>Parts Search</h2>
        Search Parts:
        <Input placeholder="Bin or part #" onChange={(e)=>{
            if(e.target.value.length>7){
              props.set(e.target.value);
            }
        }} />
        </center>
      </div>
  );
}

export default SearchParts;
