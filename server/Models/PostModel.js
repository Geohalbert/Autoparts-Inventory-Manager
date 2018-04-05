import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id: {
    required: true,
    type: String
  },
  seller: {
    required: true,
    type: String
  },
  item: {
    required: true,
    type: String
  },
  location: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: String
  }
});

const PostModel = mongoose.model("Post", schema);
export default PostModel;
