import combineReducers from "../util/combineReducers";
import {buildAnswersValidator} from "../util/validateAnswers";
import {createBlankScales} from "./scales";
import {EminAnswer as Answer, EminScales as Scales} from "./types";

type EminScaleMeta = {
    id: keyof Scales,
    plus: number[],
    minus: number[],
};

const meta: EminScaleMeta[] = [
    {id: "МП", plus: [1, 3, 11, 13, 20, 27, 29, 32, 34], minus: [38, 42, 46]},
    {id: "МУ", plus: [9, 15, 17, 24, 36], minus: [2, 5, 30, 40, 44]},
    {id: "ВП", plus: [7, 14, 26], minus: [8, 18, 22, 31, 35, 41, 45]},
    {id: "ВУ", plus: [4, 25, 28, 37], minus: [12, 33, 43]},
    {id: "ВЭ", plus: [19, 21, 23], minus: [6, 10, 16, 39]},
];

const rootReducer: IScaleReducer<Scales, number> = combineReducers(meta.map((scaleMeta) => {
    const {id, plus, minus} = scaleMeta;
    const setP = new Set<number>(plus);
    const setM = new Set<number>(minus);

    return function scaleReducer(scales: Scales, value: number, index: number): Scales {
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

type ComputedScaleMeta = {
    id: keyof Scales;
    sum: Array<keyof Scales>;
};

const computedMeta: ComputedScaleMeta[] = [
    {id: "МЭИ", sum: ["МП", "МУ"]},
    {id: "ВЭИ", sum: ["ВП", "ВУ", "ВЭ"]},
    {id: "ПЭ", sum: ["МП", "ВП"]},
    {id: "УЭ", sum: ["МУ", "ВУ", "ВЭ"]},
    {id: "ОУ", sum: ["МП", "МУ", "ВП", "ВУ", "ВЭ"]},
];

const computeScales = (function (computedScales: ComputedScaleMeta[]) {
    return function compute(scales: Scales): Scales {
        return computedScales.reduce(function (acc: Scales, scale: ComputedScaleMeta) {
            scales[scale.id] = scale.sum.reduce(function (sum: number, scaleId: keyof Scales) {
                return sum + scales[scaleId];
            }, 0);

            return scales;
        }, scales);
    };
}(computedMeta));

const validate = buildAnswersValidator<Answer>(46, [0, 1, 2, 3]);

function calculate(answers: Answer[]): Scales {
    return computeScales(answers.reduce(rootReducer, createBlankScales(0)));
}

export default function emin(answers: any[]) {
    return validate(answers) ? calculate(answers) : createBlankScales(NaN);
}
