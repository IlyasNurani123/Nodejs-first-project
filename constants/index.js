module.exports = {
  defaultServiceResponse: {
    status: 400,
    message: "",
    body: {},
  },
  productMessage: {
    PRODUCT_CREATED: "product created successfuly!",
    PRODUCT_FETCHED: "productS fetched successfully!",
    PRODUCT_UPDATETED: "product updated successfuly!",
    PRODUCTE_DELETED: "product delete successfully!",
    PRODUCT_FETCHED_BY_ID: "product fetched  successfully!",
    PRODUCT_NOT_FOUND: "product not found!",
  },

  userMessage: {
    SIGNUP_SUCCESS: "Signup Successfylly!",
    DUPLICATE_EMAIL: "User already exist with given email",
    SIGNUP_FAILED: "Signup Failed!",
    LOGIN_SUCCESS: "Login Successfully!",
    LOGIN_FAILED: "LOGIN failed!",
    USER_NOT_FOUND: "User Not Found!",
    INVALID_PASSWORD: "Incorrect Password!",
  },

  requestValidationMessage: {
    TOKEN_MISSING: "Token missing from header",
  },
  databaseMessage: {
    INVALID_ID: "Invalid Id",
  },
};
