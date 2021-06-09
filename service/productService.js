const Product = require("../database/models/productModel");
const { formateMongoData, checkObjectId } = require("../helper/dbHelper");
const constants = require("../constants");
const mongoose = require("mongoose");

module.exports.createProduct = async (serviceData) => {
  try {
    let product = new Product({ ...serviceData });
    let result = await product.save();
    return formateMongoData(result);
  } catch (error) {
    console.log("Some went wrong : services :create product");
    throw new Error(error);
  }
};

module.exports.getAllProducts = async ({ skip = 0, limit = 10 }) => {
  try {
    let products = await Product.find({})
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return formateMongoData(products);
  } catch (error) {
    console.log("Some went wrong : services : getAllProducts");
    throw new Error(error);
  }
};

module.exports.getProductById = async ({ id }) => {
  try {
    checkObjectId(id);
    let product = await Product.findById(id);
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formateMongoData(product);
  } catch (error) {
    console.log("Some went wrong : services : getProductById");
    throw new Error(error);
  }
};

module.exports.updateProduct = async ({ id, updateInfo }) => {
  try {
    checkObjectId(id);
    let product = await Product.findOneAndUpdate({ _id: id }, updateInfo, {
      new: true,
    });
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formateMongoData(product);
  } catch (error) {
    console.log("Some went wrong : services : updateProduct");
    throw new Error(error);
  }
};

module.exports.deleteProduct = async ({ id }) => {
  try {
    checkObjectId(id);
    let product = await Product.findByIdAndDelete(id);
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formateMongoData(product);
  } catch (error) {
    console.log("Some went wrong : services : deleteProduct");
    throw new Error(error);
  }
};
