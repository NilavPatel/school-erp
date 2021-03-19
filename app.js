const express = require('express');
var mongoose = require('mongoose');
const apiResponse = require('./helpers/apiResponses');
var indexRouter = require('./routes/index.route');
var studentRouter = require('./routes/student.route');
var divisionRouter = require('./routes/division.route');
var staffRouter = require('./routes/staff.route');

// MongoDB connection
var MONGODB_URL = 'mongodb://localhost:27017/school-erp';
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to %s', MONGODB_URL);
}).catch(err => {
    console.error('App starting error:', err.message);
    process.exit(1);
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// add all routers here
app.use('/', indexRouter);
app.use('/students', studentRouter);
app.use('/divisions', divisionRouter);
app.use('/staffs', staffRouter);

// throw 404 if URL not found
app.all("*", function (req, res) {
    return apiResponse.notFoundResponse(res, "Page not found");
});

module.exports = app;