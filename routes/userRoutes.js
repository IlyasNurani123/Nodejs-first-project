const express = require("express");

const router = express.Router();

const { signup, login } = require("../controller/userController");
const { validateBody } = require("../middleware/joiSchemaValidaation");
const userSchema = require("../apiSchema/userSchema");

router.post("/signup", validateBody(userSchema.signup), signup);

router.post("/login", validateBody(userSchema.login), login);

module.exports = router;
