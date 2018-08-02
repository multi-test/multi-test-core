'use strict';

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

var createBlankScales = function (v) {
    return {
        "I": v,
        "I.1": v,
        "I.2": v,
        "I.3": v,
        "I.4": v,
        "I.5": v,
        "II": v,
        "II.1": v,
        "II.2": v,
        "II.3": v,
        "II.4": v,
        "II.5": v,
        "III": v,
        "III.1": v,
        "III.2": v,
        "III.3": v,
        "III.4": v,
        "III.5": v,
        "IV": v,
        "IV.1": v,
        "IV.2": v,
        "IV.3": v,
        "IV.4": v,
        "IV.5": v,
        "V": v,
        "V.1": v,
        "V.2": v,
        "V.3": v,
        "V.4": v,
        "V.5": v,
    };
};

var SECONDARY_SCALES = ["I", "II", "III", "IV", "V"];
function rootReducer(scales, answer, index) {
    var III = SECONDARY_SCALES[index % 5];
    var _3 = Math.floor(index / 15) + 1;
    var III_3 = III + "." + _3;
    var incrementValue = 3 - answer;
    scales[III] += incrementValue;
    scales[III_3] += incrementValue;
    return scales;
}
var validator = buildAnswersValidator(75, [-2, -1, 0, 1, 2], createBlankScales(NaN));
function calculate(answers) {
    return answers.reduce(rootReducer, createBlankScales(0));
}
function factor5(answers) {
    return validator(answers) || calculate(answers);
}

module.exports = factor5;
