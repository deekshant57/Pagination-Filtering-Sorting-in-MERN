const { application } = require("express");
const express = require("express");

const connect = require("./configs/db");
const productController = require("./controllers/product.controller");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

// EndPoints

app.use("/products", productController);

app.listen(4000, async () => {
  try {
    await connect();
    console.log("Listening on port 4000");
  } catch (error) {
    console.log(error);
  }
});
