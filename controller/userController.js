const userService = require("../service/userService");
const constants = require("../constants");

module.exports.signup = async (req, res) => {
  let response = constants.defaultServiceResponse;
  try {
    const responseFromService = await userService.signup(req.body);
    response.status = 200;
    response.message = constants.userMessage.SIGNUP_SUCCESS;
    response.body = responseFromService;
  } catch (error) {
    console.log("some went wrong: controller :userController ");
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};

module.exports.login = async (req, res) => {
  let response = constants.defaultServiceResponse;
  try {
    const responseFromService = await userService.login(req.body);
    response.status = 200;
    response.message = constants.userMessage.LOGIN_SUCCESS;
    response.body = responseFromService;
  } catch (error) {
    console.log("some went wrong: controller :login ");
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};
