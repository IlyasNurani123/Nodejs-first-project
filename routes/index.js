const productRoutes = require("./productRoutes");
const userRoutes = require("./userRoutes");

const config = (app) => {
  app.use("/api/v1/product", productRoutes);
  app.use("/api/v1/user", userRoutes);
};

module.exports = {
  config,
};
