import { client } from "./index.js";

export async function getAllProducts(req) {
  return await client.db("practice").collection("products").find(req.query).toArray();
}

export async function getProductsById(id) {
  return await client.db("practice").collection("products").findOne({ id: id });
}

export async function deleteProductsById(id) {
  return await client.db("practice").collection("products").deleteOne({ id: id });
}

export async function addProductsById(newProducts) {
  return await client.db("practice").collection("products").insertMany(newProducts);
}

export async function updateProductsById(id, updatedProducts) {
  return await client.db("practice").collection("products").updateOne({ id: id },{$set: updatedProducts});
}
