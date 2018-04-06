import React, { Component } from "react";
import "./App.css";
import Main from "./Components/Main";
import Post from "./Containers/PostContainer";
import CreateThings from "./Containers/CreateThingsContainer";
import {Link} from "react-router-dom";
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
          <h1>Greg's List</h1>
          <Link to="/posts"><b>List Posts</b></Link>
          <Link to="/createPost"><b>Create Post</b></Link>
        </center>
          <Switch>
            <Route path="/post/:id" component={Post} />
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
