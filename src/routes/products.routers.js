import { Router } from "express";
import { productManager } from "../managers/productManager.js";

const router = Router;

router.get("/", (req, res) => {
  res.json(productManager.getProducts());
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  try {
    const product = productManager.getProductById(id);

    res.json(product);
  } catch (error) {
    return res.status(404).json({
      error: "No se encontro el producto",
    });
  }
});

export default router;
