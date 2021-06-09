const BaseService = require("./base.service");
const Product = require("../database/models/productModel");
const constants = require("../constants");
const { formateMongoData, checkObjectId } = require("../helper/dbHelper");

class ProductService extends BaseService {
  constructor(request) {
    super(request);
  }

  createProduct = async (serviceData) => {
    let response = constants.defaultServiceResponse;
    try {
      let product = new Product(serviceData);
      let result = await product.save();
      response.message = constants.productMessage.PRODUCT_CREATED;
      return formateMongoData(result);
    } catch (error) {
      console.log("Some went wrong : services :create product");
      throw new Error(error);
    }
  };
}

module.exports = ProductService;
