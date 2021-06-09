const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");

const ProductController = require("../controller/classProductController");

const {
  validateBody,
  validateQueryParams,
} = require("../middleware/joiSchemaValidaation");

const {
  createProductSchema,
  getAllProductsSchema,
  updateProductSchema,
} = require("../apiSchema/productSchema");

const tokenValidation = require("../middleware/tokenValidation");

router.post(
  "/",
  tokenValidation.validationToken,
  validateBody(createProductSchema),
  ProductController.createProduct
);

router.get(
  "/",
  tokenValidation.validationToken,
  validateQueryParams(getAllProductsSchema),
  getAllProducts
);

router.get("/:id", tokenValidation.validationToken, getProductById);

router.put(
  "/:id",
  tokenValidation.validationToken,
  validateBody(updateProductSchema),
  updateProduct
);

router.delete("/:id", tokenValidation.validationToken, deleteProduct);

module.exports = router;
