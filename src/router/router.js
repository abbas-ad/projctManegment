const router = require("express").Router();

const { userRouters } = require("./user");
const { teamRouters } = require("./team");
const { authRouters } = require("./auth");
const { projectRouters } = require("./project");

router.use("/auth", authRouters);
router.use("/project", projectRouters);
router.use("/team", teamRouters);
router.use("/user", userRouters);

module.exports = {
  AllRoutes: router,
};
