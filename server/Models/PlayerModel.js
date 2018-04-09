import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: {
    type: Number
  },
  name: {
   required: true,
    type: String
  },
  available:  {
    required: true,
    type: Boolean
  },
  wins: {
    required: true,
    type: Number
  },
  losses: {
    required: true,
    type: Number
  }
});

const PlayerModel = mongoose.model("Player", schema);
export default PlayerModel;
