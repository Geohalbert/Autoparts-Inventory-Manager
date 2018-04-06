import { connect } from "react-redux";
import CreateThings from "../Components/CreateThings";
import {createPost} from "../actions";

// function mapStateToProps(state) {
//   return {
//     posts: state.posts,
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    createPost: function (post) {
      dispatch(createPost(post));
    },
  };
}

export default connect(null,mapDispatchToProps)(CreateThings);
