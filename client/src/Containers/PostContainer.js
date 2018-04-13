import { connect } from "react-redux";
import Post from "../Components/Post";
import {getPost} from "../actions";

function mapStateToProps(state) {
  return {
    post: state.post
  };
}

function mapDispatchToProps(dispatch) {
    return {
      getPost: function (id) {
        dispatch(getPost(id));
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Post);
