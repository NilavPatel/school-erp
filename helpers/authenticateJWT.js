const jwt = require('jsonwebtoken');
const { constants } = require("../helpers/constants");
const apiResponse = require('../helpers/apiResponses');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, constants.accessTokenSecret, (err, user) => {
            if (err) {
                return apiResponse.unauthorizedResponse(res, "Invalid credentials");
            }
            // if token is valid then add user details into req and continue
            req.user = user;
            next();
        });
    } else {
        return apiResponse.unauthorizedResponse(res, "Invalid credentials");
    }
};

module.exports = authenticateJWT;