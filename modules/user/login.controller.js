const jwt = require('jsonwebtoken');
const { constants } = require("../../helpers/constants");
const apiResponse = require('../../helpers/apiResponses');
const Staff = require('../staff/staff.model');
const Student = require('../student/student.model');

exports.login = function (req, res) {
    try {
        var userType = req.body.userType;
        /**
         * User type 1 is for staff, 2 is for student
         */
        if (userType == 1) {
            Staff.findOne({ emailId: req.body.userName, password: req.body.password }).then((staff) => {
                if (!staff) {
                    return apiResponse.errorResponse(res, "User not found", {});
                }
                const accessToken = jwt.sign({ username: staff.emailId, userId: staff._id, isStudent: false }, constants.accessTokenSecret, { expiresIn: "10h" });
                return apiResponse.successResponseWithData(res, "Login Successfully", accessToken);
            });
        } else if (userType == 2) {
            Student.findOne({ emailId: req.body.emailId, password: req.body.password }).then((student) => {
                if (!student) {
                    return apiResponse.errorResponse(res, "User not found", {});
                }
                const accessToken = jwt.sign({ username: student.emailId, userId: student._id, isStudent: true }, constants.accessTokenSecret, { expiresIn: "10h" });
                return apiResponse.successResponseWithData(res, accessToken);
            });
        } else {
            return apiResponse.validationErrorWithData(res, "Usertype not found", {});
        }
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
}