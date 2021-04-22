const Division = require('../models/division.model');
const apiResponse = require('../helpers/apiResponses');
var mongoose = require('mongoose');

// GET list of all divisions.
exports.division_list = function (req, res) {
    try {
        Division.find()
            .populate('classTeacher')
            .populate("students")
            .then((divisions) => {
                return apiResponse.successResponseWithData(res, 'Success', divisions);
            });
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
};

// GET detail for a specific division.
exports.division_detail = function (req, res) {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return apiResponse.validationErrorWithData(res, "Invalid Error.", "Invalid ID");
        }
        
        Division.findById(req.params.id)
            .populate('classTeacher')
            .populate("students")
            .then((division) => {
                return apiResponse.successResponseWithData(res, 'Success', division);
            });
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
};

// POST Handle division create.
exports.division_create = function (req, res) {
    try {
        var division = new Division({
            divisionName: req.body.divisionName,
            classTeacher: req.body.classTeacher
        });

        division.save(function (err) {
            if (err) {
                return apiResponse.errorResponse(res, err);
            }
            return apiResponse.successResponseWithData(res, 'Division added successfully', division._id);
        });
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
};

// PUT Handle division update.
exports.division_update = function (req, res) {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return apiResponse.validationErrorWithData(res, "Invalid Error.", "Invalid ID");
        }

        var division = new Division({
            _id: req.params.id,
            divisionName: req.body.divisionName,
            classTeacher: req.body.classTeacher
        });

        Division.findByIdAndUpdate(req.params.id, division, {}, function (err) {
            if (err) {
                return apiResponse.errorResponse(res, err);
            }
            return apiResponse.successResponseWithData(res, 'Division updated successfully', req.params.id);
        });
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
};

// DELETE Handle division remove.
exports.division_delete = function (req, res) {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return apiResponse.validationErrorWithData(res, "Invalid Error.", "Invalid ID");
        }

        Division.findByIdAndRemove(req.params.id, function (err) {
            if (err) {
                return apiResponse.errorResponse(res, err);
            }
            return apiResponse.successResponseWithData(res, 'Division removed successfully', req.params.id);
        });
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
};