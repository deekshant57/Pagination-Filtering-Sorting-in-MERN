const express = require("express");
const path = require("path");
const Product = require("../models/product.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    //   Pagination to send only 30 products
    const page = req.query.page || 1; // serial number of page
    const pagesize = req.query.pagesize || 30; // 30 - number of products shown on a page
    const skip = (page - 1) * pagesize; // 1 - 1 = 0 0 * anything  = 0

    let product;

    //sorting
    const sort = req.query.sort; // acceps "asc" or "desc"
    if (sort) {
      product = await Product.find()
        .skip(skip) // 30
        .sort({ price: sort })
        .limit(pagesize) // 31 - 60
        .lean()
        .exec();
    }

    // filtering
    else {
      product = await Product.find()
        .skip(skip) // 30
        .limit(pagesize) // 31 - 60
        .select({ product_type: "eyeliner" })
        .lean()
        .exec();
    }

    //total count of pages
    const totalPages = Math.ceil(
      (await Product.find().countDocuments()) / pagesize
    );
    res.status(200).send({ product, totalPages });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
