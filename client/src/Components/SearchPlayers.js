import React from 'react';

function SearchPlayers(props) {
  return (
    <div>
      <center>
      <h2>Player Search</h2>
      Search Posts:
      <Input placeholder="Search by name" onChange={(e)=>{
          if(props.set){
            props.set(e.target.value);
          }
      }} />
      </center>
    </div>
);
}

export default SearchPlayers;
