const { default: mongoose } = require("mongoose");

const productSchmea = new mongoose.Schema({
  name: { type: String, required: true },
});

const Product = mongoose.model("beautyproduct", productSchmea);

module.exports = Product;
