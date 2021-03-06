const Joi = require("joi");

module.exports.signup = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports.login = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
