const Applications = require("./src/server.js");
const DB_URI = "mongodb://localhost:27017/projectManagerDB"
new Applications (3000, DB_URI)