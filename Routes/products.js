import express from "express"
import { getAllProducts, getProductsById, deleteProductsById, addProductsById, updateProductsById } from "../helper.js";

const router = express.Router()

//Get All Products
router.get('/', async (req, res) => {
  const { category, rating } = req.query;
  console.log(req.query, category);
  const pro = await getAllProducts(req);
  res.send(pro);
});

//Get Products By ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(req.params, id);
  const pro = await getProductsById(id);
  pro ? res.send(pro) : res.status(404).send({ message: "No Product Found" });
});

// Delete Products
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(req.params, id);
  const pro = await deleteProductsById(id);
  res.send(pro);
});

//Add Products
router.post("/", async (req, res) => {
  const newProducts = req.body;
  console.log(newProducts);
  const pro = await addProductsById(newProducts);
  res.send(pro);
});

//Update Products
router.post("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedProducts = req.body;
  console.log(updatedProducts);
  const pro = await updateProductsById(id ,updatedProducts);
  res.send(pro);
});


export const productsRouter = router 