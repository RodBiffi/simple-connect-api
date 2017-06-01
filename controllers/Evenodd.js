'use strict';

let url = require('url');

let Evenodd = require('./EvenoddService');

module.exports.isEvenOdd = function isEvenOdd(req, res, next) {
    if(res.statusCode === 400) {
        res.end('"' + req.swagger.params.number.originalValue + '" is not a number');
        return next();
    }

    Evenodd.isEvenOdd(req.swagger.params, res, next);
};
