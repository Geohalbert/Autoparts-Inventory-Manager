import { connect } from "react-redux";
import Posts from "../components/Posts";
import {
  removePost
} from "../actions";


function mapStateToProps(state) {
  return {
    posts: state.posts,
    searchFilter: state.searchText,
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
