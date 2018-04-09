import {combineReducers} from "redux";

function posts(state = [], action) {
  if (action.type === "POSTS_LOADED") {
    return action.posts;
  }
  return state;
}

function post(state = {}, action) {
  if (action.type === "POST_LOADED") {
    return action.post;
  }
  return state;
}

const rootReducer = combineReducers({
  posts, post
});
export default rootReducer;
