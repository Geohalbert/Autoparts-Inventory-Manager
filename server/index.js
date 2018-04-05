import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import PostRoutes from "./Routes/PostRoutes";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://halsthrowaway:goobagabba1@ds235239.mlab.com:35239/checkpoint2");

const app = express();
app.use(bodyParser.json());
app.use(PostRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
