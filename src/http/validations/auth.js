const { body } = require("express-validator");

function registerValidator() {
  return [
    body("username").custom((value, ctx) => {
      if (value) {
        const usernameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/gi;
        if (usernameRegex.test(value)) {
          return true;
        }
        throw "The username not correct";
      }
      throw "userName can not be emty";
    }),
    body("email").isEmail().withMessage("email not correct"),
    body("mobile").isMobilePhone("fa-IR").withMessage("the number not correct"),
    body("password")
      .isLength({ min: 6, max: 16 })
      .withMessage(" the password must between the 6 and 16 charecters")
      .custom((value, ctx) => {
        if (!value) throw "password can not be empty";
        if (value !== ctx?.req?.body?.confirm_password)
          throw "the password with confirmPassword its not quels";
        return true;
      }),
  ];
}

module.exports = {
  registerValidator,
};
