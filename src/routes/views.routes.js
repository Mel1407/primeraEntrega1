import { Router } from "express";
import { productManager } from "../managers/productManager.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/realTimeProducts", (req, res) => {
  res.render("realTimeProducts");
});

export default router;
