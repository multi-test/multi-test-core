'use strict';

function combineReducers(reducers) {
    return function rootReducer(scales, value, index) {
        return reducers.reduce(function (acc, reducer) {
            return reducer(acc, value, index + 1);
        }, scales);
    };
}

function buildAnswersValidator(countOfAnswers, validatorArg, invalidScales) {
    var isValid = Array.isArray(validatorArg)
        ? buildAnswerValidator(validatorArg)
        : validatorArg;
    return function anAnswersValidator(answers) {
        if (!answers) {
            return invalidScales;
        }
        if (answers.length !== countOfAnswers) {
            return invalidScales;
        }
        for (var i = 0; i < countOfAnswers; i++) {
            if (!isValid(answers[i], i, answers)) {
                return invalidScales;
            }
        }
    };
}
function buildAnswerValidator(validAnswers) {
    var set = new Set(validAnswers);
    return function setValidatorForAnswer(answer) {
        return set.has(answer);
    };
}

var createBlankScales = function (v) { return ({
    hardiness: v,
    commitment: v,
    control: v,
    challenge: v,
}); };

var neg = function (v) { return (3 - v); };
var pos = function (v) { return v; };
var rootReducer = combineReducers([
    { scaleId: "commitment", sign: pos, indices: [4, 12, 22, 23, 24, 29, 41] },
    { scaleId: "commitment", sign: neg, indices: [2, 3, 10, 11, 14, 28, 32, 37, 38, 40, 42] },
    { scaleId: "control", sign: pos, indices: [9, 15, 17, 21, 25, 44] },
    { scaleId: "control", sign: neg, indices: [1, 5, 6, 8, 16, 20, 27, 31, 35, 39, 43] },
    { scaleId: "challenge", sign: pos, indices: [34, 45] },
    { scaleId: "challenge", sign: neg, indices: [7, 13, 18, 19, 26, 30, 33, 36] },
].map(function (_a) {
    var scaleId = _a.scaleId, sign = _a.sign, indices = _a.indices;
    return function (scales, answer, index) {
        if (~indices.indexOf(index)) {
            scales[scaleId] += sign(answer);
        }
        return scales;
    };
}));
var calculate = function (answers) { return answers.reduce(rootReducer, createBlankScales(0)); };
var compute = function (scales) {
    scales.hardiness = scales.challenge + scales.commitment + scales.control;
    return scales;
};
var validate = buildAnswersValidator(45, [0, 1, 2, 3], createBlankScales(NaN));
function maddi(answers) {
    return validate(answers) || compute(calculate(answers));
}

module.exports = maddi;
