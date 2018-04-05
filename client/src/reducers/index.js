import {combineReducers} from "redux";

function posts(state = [], action) {
  if (action.type === "POSTS_LOADED") {
    return action.value;
  }
  return state;
}

function post(state={}, action) {
  if (action.type === "POST_LOADED") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  posts, post
});
export default rootReducer;
