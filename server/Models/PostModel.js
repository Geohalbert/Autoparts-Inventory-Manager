import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: {
    type: Number
  },
  location: {
   required: true,
    type: String
  },
  item: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: String
  },
  seller: {
    required: true,
    type: String
  }
});

const PostModel = mongoose.model("Post", schema);
export default PostModel;
