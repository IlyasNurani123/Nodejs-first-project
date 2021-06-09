const constants = require("../constants");
const jwt = require("jsonwebtoken");

module.exports.validationToken = (req, res, next) => {
  let response = { ...constants.defaultServiceResponse };
  try {
    if (!req.headers.authorization) {
      throw new Error(constants.requestValidationMessage.TOKEN_MISSING);
    }
    const token = req.headers.authorization.split("Bearer")[1].trim();
    const decode = jwt.verify(token, process.env.SECRET_KEY || "my-secret-key");
    console.log("decode", decode);
    return next();
  } catch (error) {
    response.message = error.message;
    response.status = 401;
    console.log("Error", error);
  }
  return res.status(response.status).send(response);
};
