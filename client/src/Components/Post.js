import React, { Component } from "react";
import {getPost,loadPosts} from "../actions/index";

class Post extends Component {

  componentDidMount() {
        const _id = this.props.match.params.id;
        console.log("_id1: ",_id);
    this.props.getPost(_id);
    console.log("this.props: ",this.props)
  }
//   constructor(props) {
//     super(props);
//   }
// }

// componentDidMount() {
  // this.props.loadPosts();
  //     console.log("this.props1: ",this.props);
  //     // const id = this.props.match.params.id;
  //     const _id = this.props.match.params.id;
  //     console.log("_id1: ",_id);
  //     const postGot = this.props.getPost(_id);
  //     console.log("postGot: ", postGot);
  //   // this.props.getPost(id);
  //         console.log("this.props2: ",this.props);
// }
//
//   componentWillReceiveProps(nextprops) {
//     if (this.props.match.params.id !== nextprops.match.params.id) {
//         this.props.getPost(nextprops.match.params.id);
//     }
// }

  render() {
    return (
      <div>
        <div><b>ID:</b> {this.props.post.id}</div>
        <div><b>Location:</b> {this.props.post.location}</div>
        <div><b>Item:</b> {this.props.post.item}</div>
        <div><b>Price:</b> {this.props.post.price}</div>
        <div><b>Seller:</b> {this.props.post.seller}</div>
      </div>
    );
  }
}
export default Post;
