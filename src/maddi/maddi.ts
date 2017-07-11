import {IScaleReducer} from "../util/interfaces";
import {IScaleMapper} from "../util/interfaces";
import buildAnswersValidator from "../util/validateAnswers";
import {createBlankScales} from "./scales";
import {IMaddiScales} from "./scales";

const rawSchema = {
    "commitment": {
        [-1]: [2, 3, 10, 11, 14, 28, 32, 37, 38, 40, 42],
        [+1]: [4, 12, 22, 23, 24, 29, 41 ],
    },
    "control": {
        [-1]: [1, 5, 6, 8, 16, 20, 27, 31, 35, 39, 43],
        [+1]: [9, 15, 17, 21, 25, 44 ],
    },
    "challenge": {
        [-1]: [7, 13, 18, 19, 26, 30, 33, 36],
        [+1]: [34, 45 ],
    },
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

const calculate = () => createBlankScales(NaN);
const validate = buildAnswersValidator(45, [1, 2, 3, 4], createBlankScales(NaN));

export default function maddi(answers: any[]): IMaddiScales {
    return validate(answers) || calculate();
}
