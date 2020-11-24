import { Router } from "express";
const router = Router();

import LinksController from "../controllers/LinksController";

router.post("/links", LinksController.postLink);

router.get("/links/:code/stats", LinksController.getLink);

router.get("/links/:code", LinksController.hitLink);

export default router;
