import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/WhateverController";


router.get("/whatever", list);
router.get("/whatever/:id", show);
router.post("/whatever", create);
router.put("/whatever/:id", update);
router.delete("/whatever/:id", remove);

export default WhateverRoutes;
