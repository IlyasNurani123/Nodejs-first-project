const User = require("../database/models/userModel");
const { formateMongoData, checkObjectId } = require("../helper/dbHelper");
const constants = require("../constants");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signup = async ({ name, email, password }) => {
  try {
    let user = await User.findOne({ email });
    if (user) {
      throw new Error(constants.userMessage.DUPLICATE_EMAIL);
    }

    const pass = await bcrypt.hash(password, 12);
    const newUser = new User({ name, email, password: pass });
    let result = await newUser.save();
    return formateMongoData(result);
  } catch (error) {
    console.log("Some went wrong : services :create user");
    throw new Error(error);
  }
};

module.exports.login = async ({ email, password }) => {
  try {
    let user = await User.findOne({ email });
    if (!user) {
      throw new Error(constants.userMessage.USER_NOT_FOUND);
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error(constants.userMessage.INVALID_PASSWORD);
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY || "my-secret-key",
      { expiresIn: "1d" }
    );
    return { token };
  } catch (error) {
    console.log("Some went wrong : services :login user");
    throw new Error(error);
  }
};
