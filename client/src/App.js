import React, { Component } from "react";
import "./App.css";
import Main from "./Containers/MainContainer";
import Post from "./Containers/PostContainer";
import CreatePost from "./Containers/CreatePostContainer";
import {Link} from "react-router-dom";
// import {Button} from "semantic-ui-react";
import {BrowserRouter,Route,Switch} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadPosts();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
        <center>
          <h1>Post Catalog</h1>
          <Link to="/posts"><a>List Posts</a></Link>
          <Link to="/createPost"><a>Create Post</a></Link>
        </center>
          <Switch>
            <Route path="/post/:id" component={Post} />
            <Route path="/posts" component={Main} />
            <Route path="/createPost" component={CreatePost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);
