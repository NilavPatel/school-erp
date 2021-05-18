var indexRouter = require("./index.route");
var loginRouter = require("../modules/user/login.route");
var studentRouter = require("../modules/student/student.route");
var divisionRouter = require("../modules/division/division.route");
var staffRouter = require("../modules/staff/staff.route");

function registerRoutes(app) {
  // add all routers here
  app.use("/", indexRouter);
  app.use("/login", loginRouter);
  app.use("/students", studentRouter);
  app.use("/divisions", divisionRouter);
  app.use("/staffs", staffRouter);
}

module.exports = {
  registerRoutes: registerRoutes,
};
