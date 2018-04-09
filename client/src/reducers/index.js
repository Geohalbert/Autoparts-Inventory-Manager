import {combineReducers} from "redux";

function players(state = [], action) {
  if (action.type === "PLAYERS_LOADED") {
    return action.players;
  }
  return state;
}

function player(state = {}, action) {
  if (action.type === "PLAYER_LOADED") {
    return action.player;
  }
  return state;
}
function games(state = [], action) {
  if (action.type === "GAMES_LOADED") {
    return action.games;
  }
  return state;
}
function game(state = {}, action) {
  if (action.type === "GAME_LOADED") {
    return action.game;
  }
  return state;
}

const rootReducer = combineReducers({
  players, player, games, game
});
export default rootReducer;
