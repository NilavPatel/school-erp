const express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");

const apiResponse = require("./helpers/apiResponses");
var routerService = require("./routes/router.service");

const { constants } = require("./helpers/constants");

// MongoDB connection
mongoose
  .connect(constants.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to %s", constants.MONGODB_URL);
  })
  .catch((err) => {
    console.error("App starting error:", err.message);
    process.exit(1);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//To allow cross-origin requests
app.use(cors());

routerService.registerRoutes(app);

// throw 404 if URL not found
app.all("*", function (req, res) {
  return apiResponse.notFoundResponse(res, "Page not found");
});

module.exports = app;
