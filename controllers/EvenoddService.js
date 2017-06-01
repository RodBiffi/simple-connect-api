'use strict';

const SimpleNumbers = require("../business/simplenumbers");

exports.isEvenOdd = function(args, res, next) {
    let resultObj = require("../viewModel/evenOdd_vm")(SimpleNumbers.isEven(args.number.value));

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(resultObj));
};
