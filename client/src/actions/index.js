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
//player functions
export function loadPlayers() {
  return function (dispatch) {
    fetch("/players")
    .then( (response) => {
      return response.json();
    }).then((players) => {
      dispatch(playersLoaded(players));
    });
  };
}
function playersLoaded(players) {
  return {
    type: "PLAYERS_LOADED",
    value: players
  };
}
export function loadPlayer() {
  return function (dispatch) {
    fetch("/players/" +id)
    .then( (response) => {
      return response.json();
    }).then((player) => {
      dispatch(getPlayerDone(player));
    });
  };
}
function getPlayerDone(player) {
  return {
    type: "GET_POST_DONE",
    value: player
  };
}
export function setSearchText(text){
  return {
    type: "SET_SEARCH_TEXT",
    value: text
  }
}
export function createPlayer(newPlayer) {
  return function (dispatch) {
    fetch("/players", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(p)
    }).then(() => dispatch(loadPlayers()));
  };
}
export function loadBoards() {
  return function (dispatch) {
    fetch("/boards")
    .then( (response) => {
      return response.json();
    }).then((boards) => {
      dispatch(boardssLoaded(boards));
    });
  };
}
function boardsLoaded(posts) {
  return {
    type: "BOARDS_LOADED",
    value: boards
  };
}
export function loadPlayer() {
  return function (dispatch) {
    fetch("/player/" +id)
    .then( (response) => {
      return response.json();
    }).then((player) => {
      dispatch(getPlayerDone(player));
    });
  };
}
function getPlayerDone(player) {
  return {
    type: "GET_POST_DONE",
    value: player
  };
}
export function loadTurn() {
  return function (dispatch) {
    fetch("/turn")
    .then( (response) => {
      return response.json();
    }).then((turn) => {
      dispatch(turnLoaded(turn));
    });
  };
}
function turnLoaded(turn) {
  return {
    type: "TURN_LOADED",
    value: turn
  };
}
function getGameStatus() {
  return function (dispatch) {
    fetch("/gamestatus")
    .then( (response) => {
      return response.json();
    }).then((status) => {
      dispatch(getGameStatus(status));
    });
  };
}
function turnLoaded(turn) {
  return {
    type: "TURN_LOADED",
    value: turn
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
