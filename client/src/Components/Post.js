import React, { Component } from "react";

class Post extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("id: ",id);
    // let test = getPost(id);
    // console.log("getPost(id): ",test);
    this.props.getPost(id);
    console.log("this.props: ",this.props)
  }

  render() {
    return (
      <div>
        <div><b>ID:</b> {this.props.match.params.id}</div>
        <div><b>Location:</b> {this.props.match.params.location}</div>
        <div><b>Item:</b> {this.props.posts.item}</div>
        <div><b>Price:</b> {this.props.posts.price}</div>
        <div><b>Seller:</b> {this.props.posts.seller}</div>
      </div>
    );
  }
}
export default Post;
