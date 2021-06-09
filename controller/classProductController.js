const ProductService = require("../service/classProductService");

class ProductController {
  static async createProduct(request, res, next) {
    try {
      const service = new ProductService(request);
      const result = await service.createProduct(request.body);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProductController;
