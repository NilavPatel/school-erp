
const Student = require('./student.model');
const apiResponse = require('../../helpers/apiResponses');
var mongoose = require('mongoose');

// GET list of all students.
exports.student_list = function (req, res) {
    try {
        Student.find().populate('division').then((students) => {
            return apiResponse.successResponseWithData(res, 'Success', students);
        });
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
};

// GET detail for a specific student.
exports.student_detail = function (req, res) {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return apiResponse.validationErrorWithData(res, "Invalid Error.", "Invalid ID");
        }

        Student.findById(req.params.id).populate('division').then((student) => {
            return apiResponse.successResponseWithData(res, 'Success', student);
        });
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
};

// POST Handle student create.
exports.student_create = function (req, res) {
    try {

        var student = new Student({
            emailId: req.body.emailId,
            password: req.body.password,
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            birthDate: req.body.birthDate,
            bloodGroup: req.body.bloodGroup,
            phoneNumber1: req.body.phoneNumber1,
            phoneNumber2: req.body.phoneNumber2,
            addressLine1: req.body.addressLine1,
            addressLine2: req.body.addressLine2,
            landmark: req.body.landmark,
            city: req.body.city,
            pincode: req.body.pincode,
            state: req.body.state,
            country: req.body.country,
            height: req.body.height,
            weight: req.body.weight,
            division: req.body.division
        });

        student.save(function (err) {
            if (err) {
                return apiResponse.errorResponse(res, err);
            }
            return apiResponse.successResponseWithData(res, 'Student added successfully', student._id);
        });
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
};

// PUT Handle student update.
exports.student_update = function (req, res) {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return apiResponse.validationErrorWithData(res, "Invalid Error.", "Invalid ID");
        }

        var student = new Student({
            _id: req.params.id,
            emailId: req.body.emailId,
            password: req.body.password,
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            birthDate: req.body.birthDate,
            bloodGroup: req.body.bloodGroup,
            phoneNumber1: req.body.phoneNumber1,
            phoneNumber2: req.body.phoneNumber2,
            addressLine1: req.body.addressLine1,
            addressLine2: req.body.addressLine2,
            landmark: req.body.landmark,
            city: req.body.city,
            pincode: req.body.pincode,
            state: req.body.state,
            country: req.body.country,
            height: req.body.height,
            weight: req.body.weight,
            division: req.body.division
        });

        Student.findByIdAndUpdate(req.params.id, student, {}, function (err) {
            if (err) {
                return apiResponse.errorResponse(res, err);
            }
            return apiResponse.successResponseWithData(res, 'Student updated successfully', req.params.id);
        });
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
};

// DELETE Handle student remove.
exports.student_delete = function (req, res) {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return apiResponse.validationErrorWithData(res, "Invalid Error.", "Invalid ID");
        }

        Student.findByIdAndRemove(req.params.id, function (err) {
            if (err) {
                return apiResponse.errorResponse(res, err);
            }
            return apiResponse.successResponseWithData(res, 'Student removed successfully', req.params.id);
        });
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
};
