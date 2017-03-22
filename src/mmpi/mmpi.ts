import combineReducers from "../util/combineReducers";
import {IScaleReducer} from "../util/interfaces";
import {IScaleMapper} from "../util/interfaces";
import buildAnswersValidator from "../util/validateAnswers";
import {createBlankScales, IMMPIScales} from "./scales";

const rootReducer = combineReducers<IMMPIScales>([
    { scaleId: "1", answer: "-", indices: [1, 2, 6, 37, 45] },
    { scaleId: "1", answer: "+", indices: [9, 18, 26, 32, 44, 46, 55, 62, 63] },
    { scaleId: "2", answer: "-", indices: [1, 3, 6, 11, 28, 37, 40, 42, 60, 61, 65] },
    { scaleId: "2", answer: "+", indices: [4, 9, 17, 18, 22, 25, 36, 44] },
    { scaleId: "3", answer: "-", indices: [11, 23, 28, 29, 37, 40, 41, 43, 45, 50, 56] },
    { scaleId: "3", answer: "+", indices: [1, 2, 3, 9, 18, 26, 31, 33, 35, 44, 46, 55, 57, 62] },
    { scaleId: "4", answer: "-", indices: [3, 28, 34, 35, 41, 43, 50, 65] },
    { scaleId: "4", answer: "+", indices: [7, 10, 13, 14, 15, 16, 22, 27, 52, 58, 71] },
    { scaleId: "6", answer: "-", indices: [28, 29, 31, 67] },
    { scaleId: "6", answer: "+", indices: [5, 8, 10, 15, 30, 39, 63, 64, 66, 68] },
    { scaleId: "7", answer: "-", indices: [2, 3, 42] },
    { scaleId: "7", answer: "+", indices: [5, 8, 13, 17, 22, 25, 27, 36, 44, 51, 57, 66, 68] },
    { scaleId: "8", answer: "-", indices: [3, 42] },
    { scaleId: "8", answer: "+", indices: [5, 7, 8, 10, 13, 14, 15, 16, 17, 26, 38, 39, 46, 57, 63, 64, 66] },
    { scaleId: "9", answer: "-", indices: [43] },
    { scaleId: "9", answer: "+", indices: [4, 7, 8, 21, 29, 34, 38, 39, 54, 57, 60] },
    { scaleId: "F", answer: "-", indices: [22, 24, 61] },
    { scaleId: "F", answer: "+", indices: [9, 12, 15, 19, 30, 48, 49, 58, 59] },
    { scaleId: "K", answer: "-", indices: [11, 23, 31, 33, 34, 40, 41, 43, 56, 61, 65, 67, 69, 70] },
    { scaleId: "K", answer: "+", indices: [] },
    { scaleId: "L", answer: "-", indices: [5, 11, 24, 47, 53] },
    { scaleId: "L", answer: "+", indices: [] },
].filter(({indices}) => indices.length > 0)
 .map(({scaleId, answer, indices}) => (scales, userAnswer, index) => {
    if (~indices.indexOf(index)) {
        scales[scaleId] += Number(answer === userAnswer);
    }

    return scales;
}));

const normalize: IScaleMapper<IMMPIScales> = (function () {
    const k0_16 = (k) => Math.max(0, Math.min(k, 16));

    const getCorrectionMatrix = (k) =>
        (k === 0) ? [0, 0, 0, 0, 0] :
        (k === 1) ? [1, 1, 0, 1, 1] :
        (k === 2) ? [1, 1, 0, 2, 2] :
        (k === 3) ? [2, 2, 1, 3, 3] :
        (k === 4) ? [2, 2, 1, 4, 4] :
        (k === 5) ? [2, 2, 1, 5, 5] :
        (k === 6) ? [3, 2, 1, 6, 6] :
        (k === 7) ? [4, 3, 2, 7, 7] :
        (k === 8) ? [4, 3, 2, 8, 8] :
        (k === 9) ? [5, 4, 2, 9, 9] :
        (k === 10) ? [5, 4, 2, 10, 10] :
        (k === 11) ? [6, 4, 2, 11, 11] :
        (k === 12) ? [6, 5, 2, 12, 12] :
        (k === 13) ? [7, 6, 3, 13, 13] :
        (k === 14) ? [7, 6, 3, 14, 14] :
        (k === 15) ? [8, 6, 3, 15, 15] :
        (k === 16) ? [8, 6, 3, 16, 16] :
        [NaN, NaN, NaN, NaN, NaN];

    const addCorrections = (scales: IMMPIScales, corrections) => {
        scales[1] += corrections[0];
        scales[4] += corrections[1];
        scales[9] += corrections[2];
        scales[7] += corrections[3];
        scales[8] += corrections[4];

        return scales;
    };

    const T = {
        1: [26, 30, 34, 35, 38, 42, 45, 48, 52, 55, 58, 62, 65, 68, 72, 75, 78, 82, 86, 88, 94, 96, 98, 104, 106],
        2: [26, 28, 34, 36, 38, 42, 45, 48, 52, 55, 58, 62, 68, 72, 78, 82, 86, 88, 94, 96, 98],
        3: [0, 0, 22, 25, 28, 34, 36, 38, 42, 45, 52, 55, 58, 62, 65, 72, 75, 78, 82, 86, 88, 94, 96, 98, 104, 106, 110],
        4: [0, 0, 0, 0, 22, 25, 30, 36, 38, 45, 48, 55, 58, 65, 72, 75, 78, 74, 76, 94, 98, 104, 108, 110],
        6: [28, 34, 38, 45, 48, 55, 62, 65, 72, 78, 86, 94, 96, 104, 108],
        7: [0, 0, 0, 0, 0, 0, 22, 25, 28, 34, 36, 38, 42, 45, 48, 55, 58, 62, 65, 72, 75, 82, 86, 94, 95, 98, 104, 108],
        8: [0, 0, 0, 0, 0, 22, 25, 28, 34, 36, 38, 42, 45, 48, 52, 55, 58, 62, 68, 72, 75, 78, 82, 86, 88, 94, 96, 98, 104, 108, 110],
        9: [0, 22, 25, 28, 36, 42, 45, 52, 58, 66, 68, 75, 82, 86, 88, 96, 98, 110],
        L: [35, 45, 55, 65, 72, 78],
        F: [34, 38, 45, 48, 55, 58, 65, 72, 75, 78, 86, 88, 96],
        K: [24, 26, 30, 34, 35, 38, 42, 45, 48, 52, 55, 58, 62, 65, 68, 72],
    };

    const calcT = (scales: IMMPIScales) => {
        scales.T1 = T[1][scales[1]] || NaN;
        scales.T2 = T[2][scales[2]] || NaN;
        scales.T3 = T[3][scales[3]] || NaN;
        scales.T4 = T[4][scales[4]] || NaN;
        scales.T6 = T[6][scales[6]] || NaN;
        scales.T7 = T[7][scales[7]] || NaN;
        scales.T8 = T[8][scales[8]] || NaN;
        scales.T9 = T[9][scales[9]] || NaN;
        scales.TL = T.L[scales.L] || NaN;
        scales.TF = T.F[scales.F] || NaN;
        scales.TK = T.K[scales.K] || NaN;

        return scales;
    };

    return (scales) => calcT(addCorrections(scales, getCorrectionMatrix(k0_16(scales.K))));
}());

const calculate = (answers) => normalize(answers.reduce(rootReducer, createBlankScales(0)));
const validate = buildAnswersValidator(71, ["+", "-"], createBlankScales(NaN));

export default function mmpi(answers: any[]): IMMPIScales {
    return validate(answers) || calculate(answers);
}
