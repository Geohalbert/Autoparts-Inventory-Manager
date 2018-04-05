export function loadPosts() {
  return function (dispatch) {
    fetch("/posts")
    .then( (response) => {
      return response.json();
    }).catch(err => {console.log(err)})
    .then((list) => dispatch(postsLoaded(list))
    ).catch(err => {console.log(err)})
  };
}
function postsLoaded(list) {
  return {
    type: "POSTS_LOADED",
    value: list
  };
}
export function loadPost(id) {
  return function (dispatch) {
    fetch("/post/${id}")
    .then( res => res.json() )
    .then( pos => dispatch(postLoaded(pos)))
    .catch(err => {console.log(err)})
  }
}
function postLoaded(pos) {
  return {
    type: "POST_LOADED",
    value: pos
  };
}
export function createPost(newPost) {
  return function (dispatch) {
    fetch("/posts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPost)
    }).then(() => dispatch(loadPosts()));
  };
}



export function setSearchText(txt){
  return {
    type:"SET_SEARCH_TEXT",
    value:txt
  };
}
