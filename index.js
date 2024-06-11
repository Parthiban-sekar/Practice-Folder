
import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv'
import { productsRouter } from "./Routes/products.js";
dotenv.config()

const app = express()
const PORT = process.env.PORT

console.log(process.env.Mongo_URL)

app.use(express.json())

const Mongo_URL = process.env.Mongo_URL

async function createConnection(){
  const client = new MongoClient(Mongo_URL)
  await client.connect()
  console.log("MongoDb is Connected");
  return client
}

export const client = await createConnection()

app.get('/', (req, res) => { 
  res.send('Hello World welcome to Express Server')
})

app.use("/products", productsRouter) 

app.listen(PORT,()=>console.log("server running on",PORT))

 