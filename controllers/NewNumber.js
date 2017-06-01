'use strict';

let url = require('url');

let NewNumber = require('./NewNumberService');

module.exports.numberFromInterval = function numberFromInterval(req, res, next) {
    if (res.statusCode === 400) {
        res.end('"min" and/or "max" are not numbers');
        return next();
    }

    NewNumber.numberFromInterval(req.swagger.params, res, next);
};
