import React, { Component } from "react";
import "./App.css";
import Main from "./Containers/MainContainer";
import {getPost,loadPosts} from "./actions";
import Post from "./Containers/PostContainer";
// import CreateThings from "./Containers/CreateThingsContainer";
import {Link} from "react-router-dom";
import {BrowserRouter,Route,Switch} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadPosts();
    console.log("getPost(4): ",getPost(4));

  }
  render() {
    return (
      <BrowserRouter>
        <div>
        <center>
          <h1>Greg's List</h1>
          <Link to="/posts"><b>List Posts</b></Link>
          <Link to="/createPost"><b>Create Post</b></Link>
        </center>
          <Switch>
            <Route path="/posts/:id" component={Post} />
            <Route path="/" component={Main} />
            {/* <Route path="/posts" component={Main} />
            <Route path="/createPost" component={CreatePost} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);
