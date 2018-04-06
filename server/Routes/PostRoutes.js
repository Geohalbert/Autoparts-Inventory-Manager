import express from "express";
// import PostModel from "../models/ContactModel";
// import {list,show,create,update,remove} from "../controllers/ContactController";
import {list,show,create} from "../Controllers/PostController";

const router = express.Router();

router.get("/posts", list);
router.get("/posts/:id", show);
router.post("/posts", create);
// router.put("/contacts/:id", update);
// router.delete("/contacts/:id", remove);

export default router;
