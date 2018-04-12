import React, { Component } from "react";
import "./App.css";
import Main from "./Components/Main";
import Post from "./Containers/PostContainer";
// import CreateThings from "./Containers/CreateThingsContainer";
import {Link} from "react-router-dom";
import {BrowserRouter,Route,Switch} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {posts: []};
  }
  componentDidMount() {
    console.log(this.props)
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
            <Route path="/posts/:id" component={Post} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);
