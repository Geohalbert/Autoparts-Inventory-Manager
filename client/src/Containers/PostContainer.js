import { connect } from "react-redux";
import Post from "../components/Post";
import {getPost} from "../actions";

function mapStateToProps(state) {
  return {
    post: state.post
  };
}

function mapDispatchToProps(dispatch){
    return {
      getPost:function(post){
            let action = getPost(post);
            dispatch(action);
          },
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Post);
