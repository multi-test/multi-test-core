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
        A: v,
    };
};

var positives = new Set([2, 3, 4, 7, 8, 10, 14, 16, 17, 18, 19, 20, 22, 23, 25, 26]);
var negatives = new Set([1, 5, 6, 9, 11, 12, 13, 15, 21, 24]);
var validate = buildAnswersValidator(26, [0, 1, 2, 3, 4], createBlankScales(NaN));
function minus(answer, index) {
    return negatives.has(index) ? 5 - answer : NaN;
}
function plus(answer, index) {
    return positives.has(index) ? answer + 1 : minus(answer, index);
}
function reducer(scale, answer, index) {
    return scale + plus(answer, index + 1);
}
function calculate(answers) {
    return answers.reduce(reducer, 0);
}
function alexithymia(answers) {
    return validate(answers) || createBlankScales(calculate(answers));
}

module.exports = alexithymia;
