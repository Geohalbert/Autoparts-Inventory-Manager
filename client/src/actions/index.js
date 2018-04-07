export function loadPosts() {
  return function (dispatch) {
    fetch("/posts")
    .then( (response) => {
      return response.json();
    }).then((posts) => {
      dispatch(postsLoaded(posts));
    });
  };
}
function postsLoaded(posts) {
  return {
    type: "POSTS_LOADED",
    value: posts
  };
}
export function getPost(id) {
  return function (dispatch) {
    fetch("/posts/" +id)
    .then( (response) => {
      return response.json();
    }).then((post) => {
      dispatch(getPostDone(post));
    });
  };
}
function getPostDone(post) {
  return {
    type: "GET_POST_DONE",
    value: post
  };
}
export function createPost(p) {
  return function (dispatch) {
    fetch("/posts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(p)
    }).then(() => dispatch(loadPosts()));
  };
}
// export function loadPost(id) {
//   return function (dispatch) {
//     fetch("/post/" +id)
//     .then( res => res.json() )
//     .then( pos => dispatch(postLoaded(pos)))
//     .catch(err => {console.log(err)})
//   }
// }
// function postLoaded(pos) {
//   return {
//     type: "POST_LOADED",
//     value: pos
//   };
// }

export function setSearchText(txt){
  return {
    type:"SET_SEARCH_TEXT",
    value:txt
  };
}
