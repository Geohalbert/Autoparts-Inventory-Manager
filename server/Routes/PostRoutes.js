import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../Controllers/PostController";
import PostModel from "../Models/PostModel";

router.get("/posts", list);
router.get("/post/:id", show);
router.posts("/posts", create);
router.put("/post/:id", update);
router.delete("/post/:id", remove);

export default PostRoutes;
