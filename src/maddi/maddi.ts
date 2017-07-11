import combineReducers from "../util/combineReducers";
import {IScaleMapper, IScaleReducer} from "../util/interfaces";
import buildAnswersValidator from "../util/validateAnswers";
import {createBlankScales} from "./scales";
import {IMaddiAnswer, IMaddiScales} from "./scales";

const neg = (v: IMaddiAnswer) => (3 - v) as IMaddiAnswer;
const pos = (v: IMaddiAnswer) => v;

const rootReducer = combineReducers<IMaddiScales>([
    { scaleId: "commitment", sign: pos, indices: [4, 12, 22, 23, 24, 29, 41]                },
    { scaleId: "commitment", sign: neg, indices: [2, 3, 10, 11, 14, 28, 32, 37, 38, 40, 42] },
    { scaleId: "control",    sign: pos, indices: [9, 15, 17, 21, 25, 44]                    },
    { scaleId: "control",    sign: neg, indices: [1, 5, 6, 8, 16, 20, 27, 31, 35, 39, 43]   },
    { scaleId: "challenge",  sign: pos, indices: [34, 45]                                   },
    { scaleId: "challenge",  sign: neg, indices: [7, 13, 18, 19, 26, 30, 33, 36]            },
].map(({scaleId, sign, indices}) => (scales: IMaddiScales, answer: IMaddiAnswer, index: number) => {
    if (~indices.indexOf(index)) {
        scales[scaleId] += sign(answer);
    }

    return scales;
}));

const calculate = (answers: IMaddiAnswer[]) => answers.reduce(rootReducer, createBlankScales(0));
const compute = (scales: IMaddiScales) => {
    scales.hardiness = scales.challenge + scales.commitment + scales.control;
    return scales;
};

const norms = {
    average: {
        "hardiness": 80.72,
        "commitment": 37.64,
        "control": 29.17,
        "challenge": 13.91,
    },
    dispersion: {
        "hardiness": 18.53,
        "commitment": 8.08,
        "control": 8.43,
        "challenge": 4.39,
    },
};

const validate = buildAnswersValidator(45, [0, 1, 2, 3], createBlankScales(NaN));

export default function maddi(answers: IMaddiAnswer[]): IMaddiScales {
    return validate(answers) || compute(calculate(answers));
}
