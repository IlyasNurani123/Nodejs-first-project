const productService = require("../service/productService");
const constants = require("../constants");

module.exports.createProduct = async (req, res) => {
  let response = { ...constants.defaultServiceResponse };
  try {
    const responseFromService = await productService.createProduct(req.body);
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_CREATED;
    response.body = responseFromService;
  } catch (error) {
    console.log("some we wrong: controller :productController ");
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};

module.exports.getAllProducts = async (req, res) => {
  let response = { ...constants.defaultServiceResponse };
  try {
    const responseFromService = await productService.getAllProducts(req.query);
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_FETCHED;
    response.body = responseFromService;
  } catch (error) {
    console.log("some we wrong: controller :productController ");
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};

module.exports.getProductById = async (req, res) => {
  let response = { ...constants.defaultServiceResponse };
  try {
    const responseFromService = await productService.getProductById(req.params);
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_FETCHED_BY_ID;
    response.body = responseFromService;
  } catch (error) {
    console.log("some we wrong: controller :getProductById");
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};

module.exports.updateProduct = async (req, res) => {
  let response = { ...constants.defaultServiceResponse };
  try {
    const responseFromService = await productService.updateProduct({
      id: req.params.id,
      updateInfo: req.body,
    });
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_UPDATETED;
    response.body = responseFromService;
  } catch (error) {
    console.log("some we wrong: controller :updateProduct ");
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};

module.exports.deleteProduct = async (req, res) => {
  let response = { ...constants.defaultServiceResponse };
  try {
    const responseFromService = await productService.deleteProduct(req.params);
    response.status = 200;
    response.message = constants.productMessage.PRODUCTE_DELETED;
    response.body = responseFromService;
  } catch (error) {
    console.log("some we wrong: controller :deleteProduct");
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};
