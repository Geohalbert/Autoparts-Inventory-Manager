import React, { Component } from "react";
import "./App.css";
import Main from "./containers/MainContainer";
import Post from "./containers/PostContainer";
import CreatePost from "./containers/CreatePostContainer";
import {Link} from "react-router-dom";
import {Button} from "semantic-ui-react";
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
          <Link to="/posts"><Button>List Posts</Button></Link>
          <Link to="/createpost"><Button>Create Post</Button></Link>
        </center>
          <Switch>
            <Route path="/post/:id" component={Post} />
            <Route path="/posts" component={Main} />
            <Route path="/createpost" component={CreatePost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);
