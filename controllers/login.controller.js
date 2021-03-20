const jwt = require('jsonwebtoken');
const { constants } = require("../helpers/constants");
const apiResponse = require('../helpers/apiResponses');

exports.login = function (req, res) {
    try {
        // add check for signin validation.
        // pass any json object in jwt.sign method to get accessToken.
        const accessToken = jwt.sign({ username: 'username' }, constants.accessTokenSecret);
        return apiResponse.successResponseWithData(res, accessToken);
    }
    catch (err) {
        return apiResponse.errorResponse(res, err);
    }
}