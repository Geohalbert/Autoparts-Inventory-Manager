import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadPosts} from "./actions/index";

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: function () {
      dispatch(loadPosts())
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
