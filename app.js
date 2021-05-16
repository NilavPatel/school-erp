const express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");

const apiResponse = require("./helpers/apiResponses");
var indexRouter = require("./routes/index.route");
var loginRouter = require("./modules/user/login.route");
var studentRouter = require("./modules/student/student.route");
var divisionRouter = require("./modules/division/division.route");
var staffRouter = require("./modules/staff/staff.route");
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

// add all routers here
app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/students", studentRouter);
app.use("/divisions", divisionRouter);
app.use("/staffs", staffRouter);

// throw 404 if URL not found
app.all("*", function (req, res) {
  return apiResponse.notFoundResponse(res, "Page not found");
});

module.exports = app;
