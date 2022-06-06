const { application } = require("express");
const express = require("express");

const connect = require("./configs/db");

const app = express();

// EndPoints

app.get("/products", async (req, res) => {
  try {
    const product = await res.status(200).send("Hello");
  } catch (error) {
    res.status(500);
  }
});

app.listen(4000, async () => {
  try {
    await connect();
    console.log("Listening on port 4000");
  } catch (error) {
    console.log(error);
  }
});
