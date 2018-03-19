import { connect } from "react-redux";
import CreatePost from "../components/CreatePost";
import {createPost} from "../actions";

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createPost: function (post) {
      dispatch(createPost(post));
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CreatePost);
