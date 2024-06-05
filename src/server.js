import express from "express";
import productsRoutes from "./routes/products.routers.js";
import cartsRoutes from "./routes/carts.routers.js";

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1> Bienvenido </h1>");
});

app.use("/api/products", productsRoutes);
app.use("/api/carts", cartsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on Port http://localhost:${PORT}`);
});
