import {IScaleReducer} from "../util/interfaces";
import {IEminScales, createBlankScales} from "./scales";
import createAnswersValidator from "../util/validateAnswers";
import combineReducers from "../util/combineReducers";

const rootReducer: IScaleReducer<IEminScales> = combineReducers([
    { id: 'МП', plus: [1, 3, 11, 13, 20, 27, 29, 32, 34], minus: [38, 42, 46] },
    { id: 'МУ', plus: [9, 15, 17, 24, 36], minus: [2, 5, 30, 40, 44] },
    { id: 'ВП', plus: [7, 14, 26], minus: [8, 18, 22, 31, 35, 41, 45] },
    { id: 'ВУ', plus: [4, 25, 28, 37], minus: [12, 33, 43] },
    { id: 'ВЭ', plus: [19, 21, 23], minus: [6, 10, 16, 39] },
].map(scaleMeta => {
    let { id, plus, minus } = scaleMeta;
    let setP = new Set<number>(plus);
    let setM = new Set<number>(minus);

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

interface IComputedScaleMeta {
    id: string;
    sum: string[];
}

const computeScales = (function (computedScales: IComputedScaleMeta[]) {
    return function compute(scales: IEminScales): IEminScales {
        return computedScales.reduce(function (acc: IEminScales, scale) {
            scales[scale.id] = scale.sum.reduce(function (sum, scaleId) {
                return sum + scales[scaleId];
            }, 0);

            return scales;
        }, scales);
    };
}([
    { id: 'МЭИ', sum: ['МП', 'МУ'] },
    { id: 'ВЭИ', sum: ['ВП', 'ВУ', 'ВЭ'] },
    { id: 'ПЭ', sum: ['МП', 'ВП'] },
    { id: 'УЭ', sum: ['МУ', 'ВУ', 'ВЭ'] },
    { id: 'ОУ', sum: ['МП', 'МУ', 'ВП', 'ВУ', 'ВЭ'] },
]));

const validate = createAnswersValidator(46, [0, 1, 2, 3], createBlankScales(NaN));

function calculate(answers: any[]): IEminScales {
    return computeScales(answers.reduce(rootReducer, createBlankScales(0)));
}

export default function emin(answers: any[]) {
    return validate(answers) || calculate(answers);
}
