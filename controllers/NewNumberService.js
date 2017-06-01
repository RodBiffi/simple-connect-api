'use strict';

const SimpleNumbers = require("../business/simplenumbers");

exports.numberFromInterval = function (args, res, next) {
    let newNumber;

    try {
       newNumber = SimpleNumbers.numberFromInterval(args.min.value, args.max.value);
    }
    catch (err) {
        if(err.name === "ArgumentInvalidError") {
            res.writeHead(400, {'Content-Type': 'text/plain'});
            return next();
        }
    }

    res.setHeader('Content-Type', 'text/plain');
    res.end(newNumber.toString());
};
