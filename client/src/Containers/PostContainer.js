import { connect } from "react-redux";
import Post from "../Components/Post";
import {getPost} from "../actions";

function mapStateToProps(state) {
  return {
    posts: state.posts
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
