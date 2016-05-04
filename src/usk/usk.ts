import buildAnswersValidator from "../util/validateAnswers";
import combineReducers from "../util/combineReducers";
import {IScaleReducer} from "../util/interfaces";
import {IUSKScales, createBlankScales} from "./scales";

const rootReducer = combineReducers<IUSKScales>([
    { scaleId: 'Ио', sign: 1, indices: [2, 4, 11, 12, 13, 15, 16, 17, 19, 20, 22, 25, 27, 29, 31, 32, 34, 36, 37, 39, 42, 44] },
    { scaleId: 'Ио', sign: -1, indices: [1, 3, 5, 6, 7, 8, 9, 10, 14, 18, 21, 23, 24, 26, 28, 30, 33, 35, 38, 40, 41, 43] },
    { scaleId: 'Ид', sign: 1, indices: [12, 15, 27, 32, 36, 37] },
    { scaleId: 'Ид', sign: -1, indices: [1, 5, 6, 14, 26, 43] },
    { scaleId: 'Ин', sign: 1, indices: [2, 4, 20, 31, 42, 44] },
    { scaleId: 'Ин', sign: -1, indices: [7, 24, 33, 38, 40, 41] },
    { scaleId: 'Ис', sign: 1, indices: [2, 16, 20, 32, 37] },
    { scaleId: 'Ис', sign: -1, indices: [7, 14, 26, 28, 41] },
    { scaleId: 'Ип', sign: 1, indices: [19, 22, 25, 42, 36, 37] },
    { scaleId: 'Ип', sign: -1, indices: [1, 9, 10, 30, 26, 43] },
    { scaleId: 'Им', sign: 1, indices: [4, 27] },
    { scaleId: 'Им', sign: -1, indices: [6, 38] },
    { scaleId: 'Из', sign: 1, indices: [13, 34] },
    { scaleId: 'Из', sign: -1, indices: [3, 23] },
].map(({scaleId, sign, indices}) => (scales: IUSKScales, answer, index) => {
    if (~indices.indexOf(index)) {
        scales[scaleId] += sign * answer;
    }

    return scales;
}));

const normalize = (function () {
    const findIndexOfGreater = arr => val => {
        return arr.reduce((i, v) => i + (val >= v), 0);
    };

    const meta = [
        { scaleId: "Ио", normalize: findIndexOfGreater([-132, -13, -2, 10, 22, 33, 45, 57, 69, 80, 133]) },
        { scaleId: "Ид", normalize: findIndexOfGreater([-36, -10, -6, -2, 2, 6, 10, 15, 19, 23, 37]) },
        { scaleId: "Ин", normalize: findIndexOfGreater([-36, -7, -3, 1, 5, 8, 12, 16, 20, 24, 37]) },
        { scaleId: "Ис", normalize: findIndexOfGreater([-30, -11, -7, -4, 0, 4, 7, 11, 14, 18, 31]) },
        { scaleId: "Ип", normalize: findIndexOfGreater([-30, -4, 0, 4, 8, 12, 16, 20, 24, 28, 31]) },
        { scaleId: "Им", normalize: findIndexOfGreater([-12, -6, -4, -2, 0, 2, 5, 7, 9, 11, 13]) },
        { scaleId: "Из", normalize: findIndexOfGreater([-12, -3, -1, 1, 3, 4, 5, 7, 9, 11, 13]) },
    ];

    return function (scales: IUSKScales): IUSKScales {
        return meta.reduce((normalizedScales, {scaleId, normalize}) => {
            normalizedScales[scaleId] = normalize(scales[scaleId]);
            return normalizedScales;
        }, createBlankScales(0));
    };
}());

const calculate = answers => answers.reduce(rootReducer, createBlankScales(0));
const validate = buildAnswersValidator(44, [-3, -2, -1, 1, 2, 3], createBlankScales(NaN));

export default function usk(answers: any[]): IUSKScales {
    return validate(answers) || normalize(calculate(answers));
}