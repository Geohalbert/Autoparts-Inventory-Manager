import {combineReducers} from "redux";

function posts(state = [], action) {
  if (action.type === "POSTS_LOADED") {
    return action.value;
  }
  return state;
}

function post(state = {}, action) {
  if (action.type === "GET_POST_DONE") {
    return action.value;
  }
  return state;
}

function searchText(state="", action){
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value;
  }
  return state;
}


const rootReducer = combineReducers({
  posts,post,searchText
});
export default rootReducer;
