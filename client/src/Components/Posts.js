import React from "react";
import {Link} from "react-router-dom";

function Posts(props) {

  let postDivs = null;
  if (props.posts) {
    postDivs = props.posts;
  }
  // console.log(props.posts)
  return (
    <div>
      {postDivs.map((p,i) =>
          <div key={i} id="post">
          <br />  <div><b>Item:</b> {p.item}</div>
          <br />  <div><b>Location: </b> {p.location}</div>
          <br />  <div><b>Price:</b> {p.price}</div>
          <br />  <div><b>Seller:</b> {p.seller}</div>
            <Link to={"/posts/" + p._id}> View </Link>
            <button onClick={
              (e) => {
                  props.removePost(p._id);
              }
            }>Delete</button>

          </div>
          )}
    </div>
  );
}
export default Posts;
