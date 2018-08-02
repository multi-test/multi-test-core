'use strict';

function combineReducers(reducers) {
    return function rootReducer(scales, value, index) {
        return reducers.reduce((acc, reducer) => {
            return reducer(acc, value, index + 1);
        }, scales);
    };
}

function buildAnswersValidator(countOfAnswers, validatorArg, invalidScales) {
    const isValid = Array.isArray(validatorArg)
        ? buildAnswerValidator(validatorArg)
        : validatorArg;
    return function anAnswersValidator(answers) {
        if (!answers) {
            return invalidScales;
        }
        if (answers.length !== countOfAnswers) {
            return invalidScales;
        }
        for (let i = 0; i < countOfAnswers; i++) {
            if (!isValid(answers[i], i, answers)) {
                return invalidScales;
            }
        }
    };
}
function buildAnswerValidator(validAnswers) {
    const set = new Set(validAnswers);
    return function setValidatorForAnswer(answer) {
        return set.has(answer);
    };
}

const createBlankScales = function (v) {
    return {
        МП: v,
        МУ: v,
        ВП: v,
        ВУ: v,
        ВЭ: v,
        МЭИ: v,
        ВЭИ: v,
        ПЭ: v,
        УЭ: v,
        ОУ: v,
    };
};

const rootReducer = combineReducers([
    { id: "МП", plus: [1, 3, 11, 13, 20, 27, 29, 32, 34], minus: [38, 42, 46] },
    { id: "МУ", plus: [9, 15, 17, 24, 36], minus: [2, 5, 30, 40, 44] },
    { id: "ВП", plus: [7, 14, 26], minus: [8, 18, 22, 31, 35, 41, 45] },
    { id: "ВУ", plus: [4, 25, 28, 37], minus: [12, 33, 43] },
    { id: "ВЭ", plus: [19, 21, 23], minus: [6, 10, 16, 39] },
].map((scaleMeta) => {
    let { id, plus, minus } = scaleMeta;
    let setP = new Set(plus);
    let setM = new Set(minus);
    return function scaleReducer(scales, value, index) {
        if (!scales.hasOwnProperty(id)) {
            scales[id] = 0;
        }
        if (setP.has(index)) {
            scales[id] += value;
        }
        if (setM.has(index)) {
            scales[id] += 3 - value;
        }
        return scales;
    };
}));
const computeScales = (function (computedScales) {
    return function compute(scales) {
        return computedScales.reduce(function (acc, scale) {
            scales[scale.id] = scale.sum.reduce(function (sum, scaleId) {
                return sum + scales[scaleId];
            }, 0);
            return scales;
        }, scales);
    };
}([
    { id: "МЭИ", sum: ["МП", "МУ"] },
    { id: "ВЭИ", sum: ["ВП", "ВУ", "ВЭ"] },
    { id: "ПЭ", sum: ["МП", "ВП"] },
    { id: "УЭ", sum: ["МУ", "ВУ", "ВЭ"] },
    { id: "ОУ", sum: ["МП", "МУ", "ВП", "ВУ", "ВЭ"] },
]));
const validate = buildAnswersValidator(46, [0, 1, 2, 3], createBlankScales(NaN));
function calculate(answers) {
    return computeScales(answers.reduce(rootReducer, createBlankScales(0)));
}
function emin(answers) {
    return validate(answers) || calculate(answers);
}

module.exports = emin;
