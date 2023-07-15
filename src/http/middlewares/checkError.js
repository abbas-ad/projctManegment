const { validationResult } = require("express-validator");

function expressValidatorMapper(req, res, next) {
  let message = {};
  const result = validationResult(req);
  if (result?.errors?.length > 0) {
    result?.errors.forEach((err) => {
      message[err.path] = err.msg;
    console.log(err.path + err.msg)
    });
    return res.status(400).json({
      status: 400,
      susccess: false,
      message,
    });
  }
  next();
}

module.exports = {
  expressValidatorMapper,
};
