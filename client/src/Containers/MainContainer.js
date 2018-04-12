import Main from "../Components/Main";
import { connect } from "react-redux";
import {loadPosts,getPost} from "../actions";



function mapDispatchToProps(dispatch) {
  return {
    loadPosts: function () {
      dispatch(loadPosts());
    },
    getPost:function(post){
          let action = getPost(post);
          dispatch(action);
        }
  };
}

export default connect(null,mapDispatchToProps)(Main);


// import Main from "../components/Main";
// import { connect } from "react-redux";
// import {loadPosts} from "../actions";
//
//
//
// function mapDispatchToProps(dispatch) {
//   return {
//     loadPosts: function () {
//       dispatch(loadPosts());
//     },
//   };
// }
//
// export default connect(null,mapDispatchToProps)(Main);
