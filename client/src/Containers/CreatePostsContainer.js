import { connect } from "react-redux";
import CreatePosts from "../Components/CreatePosts";
import {createPost} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createPost: function (post) {
      dispatch(createPost(post));
    }
  };
}

export default connect(null,mapDispatchToProps)(CreatePosts);
