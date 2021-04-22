
const Staff = require('../models/staff.model');
const apiResponse = require('../helpers/apiResponses');
var mongoose = require('mongoose');

// GET list of all staffs.
exports.staff_list = function (req, res) {
    try {
        Staff.find().then((staffs) => {
            return apiResponse.successResponseWithData(res, 'Success', staffs);
        });
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
};

// GET detail for a specific staff.
exports.staff_detail = function (req, res) {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return apiResponse.validationErrorWithData(res, "Invalid Error.", "Invalid ID");
        }
        
        Staff.findById(req.params.id).then((staff) => {
            return apiResponse.successResponseWithData(res, 'Success', staff);
        });
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
};

// POST Handle staff create.
exports.staff_create = function (req, res) {
    try {
        var staff = new Staff({
            emailId: req.body.emailId,
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
            designation: req.body.designation
        });

        staff.save(function (err) {
            if (err) {
                return apiResponse.errorResponse(res, err);
            }
            return apiResponse.successResponseWithData(res, 'Staff added successfully', staff._id);
        });
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
};

// PUT Handle staff update.
exports.staff_update = function (req, res) {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return apiResponse.validationErrorWithData(res, "Invalid Error.", "Invalid ID");
        }

        var staff = new Staff({
            _id: req.params.id,
            emailId: req.body.emailId,
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
            designation: req.body.designation
        });

        Staff.findByIdAndUpdate(req.params.id, staff, {}, function (err) {
            if (err) {
                return apiResponse.errorResponse(res, err);
            }
            return apiResponse.successResponseWithData(res, 'Staff updated successfully', req.params.id);
        });
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
};

// DELETE Handle staff remove.
exports.staff_delete = function (req, res) {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return apiResponse.validationErrorWithData(res, "Invalid Error.", "Invalid ID");
        }

        Staff.findByIdAndRemove(req.params.id, function (err) {
            if (err) {
                return apiResponse.errorResponse(res, err);
            }
            return apiResponse.successResponseWithData(res, 'Staff removed successfully', req.params.id);
        });
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
};