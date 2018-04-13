import { connect } from "react-redux";
import Posts from "../Components/Posts";
import {removePost} from "../actions";


function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removePost: function (id) {
      dispatch(removePost(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);
