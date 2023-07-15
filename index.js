const Applications = require("./src/server.js");
require("dotenv").config();

const DB_URI = "mongodb://localhost:27017/projectManagerDB";
new Applications(process.env.PORT, process.env.DB_URI);
