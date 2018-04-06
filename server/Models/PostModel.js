import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: {
    type: Number
  },
  location: {
    type: String
  },
  item: {
    type: String
  },
  price: {
    type: String
  },
  seller: {
    type: String
  }
});

const PostModel = mongoose.model("Post", schema);
export default PostModel;
