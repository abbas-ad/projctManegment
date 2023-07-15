const { AuthContollers } = require("../http/controllers/auth.controllers");
const { expressValidatorMapper } = require("../http/middlewares/checkError");
const { registerValidator } = require("../http/validations/auth");

const router = require("express").Router();

router.post("/register", registerValidator(), expressValidatorMapper, AuthContollers.register);

module.exports = {
  authRouters: router,
};
