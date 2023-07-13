const express = require("express");
const mongoose = require("mongoose");

module.exports = class Applications {
  #app = express();
  constructor(PORT, DB_URI) {
    this.configDatabase(DB_URI);
    this.configApplications();
    this.createServer(PORT);
    this.createRoute();
    this.errorHandler();
  }

  configApplications() {
    const path = require("path");
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
    this.#app.use(express.static(path.join(__dirname, "..", "public")));
  }

  createServer(PORT) {
    const http = require("http");
    const server = http.createServer(this.#app);
    server.listen(PORT, () => {
      console.log(`server runnig on http://localhost:${PORT}`);
    });
  }

  configDatabase(DB_URI) {
    mongoose.connect(DB_URI, (error) => {
      if (error) throw error;
      return console.log("conecting to database");
    });
  }

  createRoute() {
    this.#app.get("/", (req, res, next) => {
      return res.json({
        message: " thisi s a new express aplications",
      });
    });
  }

  errorHandler() {
    this.#app.use((req, res, next) => {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "PAGE NOF FOUNDED",
      });
    });

    this.#app.use((error, req, res, next) => {
      const status = error?.status || 500;
      const message = error?.message || "internalServerError";
      return res.status(status).json({
        status,
        suscces: false,
        message,
      });
    });
  }
};
