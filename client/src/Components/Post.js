import React, { Component } from "react";

class Post extends Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getPost(id);
  }

  render() {
    console.log(this.props.post);
    console.log(this.props.match.params.id);
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
