import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: {
    type: Number
  },
  players: {
   required: true,
    type: Array
  },
  status: {
    required: true,
    type: String
  },
  grid: {
    required: true,
    type: Array
  },
  ships1: {
    required: true,
    type: Array
  },
  ships2: {
    required: true,
    type: Array
  },
  occupied1: {
    required: true,
    type: Array
  },
  occupied2: {
    required: true,
    type: Array
  },
  miss1: {
    required: true,
    type: Array
  },
  miss2: {
    required: true,
    type: Array
  },
  hits1: {
    required: true,
    type: Array
  },
  hits2: {
    required: true,
    type: Array
  }
});

const GameModel = mongoose.model("Game", schema);
export default GameModel;
