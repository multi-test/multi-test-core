import combineReducers from "../util/combineReducers";
import {IScaleReducer} from "../util/interfaces";
import createAnswersValidator from "../util/validateAnswers";
import {createBlankScales, IAmonScales} from "./scales";

const validate = createAnswersValidator<IAmonScales>(220, ["+", "-"], createBlankScales(NaN));

const scaleReducers: Array<IScaleReducer<IAmonScales>> = [
    { scaleId: "A1", indices: [1, 8, 26, 30, 51, 74, 112, 126, 157, 173, 184, 195, 210] },
    { scaleId: "A2", indices: [2, 4, 6, 63, 92, 97, 104, 118, 132, 145, 168, 175, 180, 203] },
    { scaleId: "A3", indices: [25, 28, 39, 61, 66, 72, 100, 102, 150, 153, 161, 215] },
    { scaleId: "C1", indices: [11, 35, 50, 94, 127, 136, 143, 160, 171, 191, 213, 220] },
    { scaleId: "C2", indices: [32, 47, 54, 59, 91, 109, 128, 163, 178, 179, 188] },
    { scaleId: "C3", indices: [69, 75, 76, 108, 116, 131, 149, 155, 170, 177, 181, 196, 207, 219] },
    { scaleId: "LO1", indices: [23, 36, 58, 89, 90, 95, 99, 137, 138, 140, 176] },
    { scaleId: "LO2", indices: [3, 14, 37, 38, 46, 82, 88, 148, 154, 158, 209] },
    { scaleId: "LO3", indices: [7, 17, 57, 71, 84, 86, 120, 123, 164, 166, 218] },
    { scaleId: "LI1", indices: [5, 13, 21, 29, 42, 98, 107, 130, 147, 167, 192, 201] },
    { scaleId: "LI2", indices: [10, 16, 55, 80, 117, 169, 185, 187, 193, 200, 202, 208] },
    { scaleId: "LI3", indices: [12, 41, 45, 49, 52, 56, 77, 119, 122, 125, 172, 190, 211] },
    { scaleId: "N1", indices: [18, 34, 44, 73, 85, 96, 106, 115, 141, 183, 189, 198] },
    { scaleId: "N2", indices: [19, 31, 53, 68, 87, 113, 162, 174, 199, 204, 206, 214] },
    { scaleId: "N3", indices: [9, 24, 27, 64, 79, 101, 103, 111, 124, 134, 146, 156, 216] },
    { scaleId: "S1", indices: [15, 33, 40, 43, 48, 65, 78, 83, 105, 133, 139, 151, 217] },
    { scaleId: "S2", indices: [20, 22, 62, 67, 70, 93, 110, 129, 142, 159, 186, 194, 197] },
    { scaleId: "S3", indices: [60, 81, 114, 121, 135, 144, 152, 165, 182, 205, 212] },
].map((scaleMeta) => {
    let { indices, scaleId } = scaleMeta;
    let set = new Set<number>(indices);

    return function scaleReducer(scales, value, index) {
        if (value === "+" && set.has(index)) {
            scales[scaleId] = (scales[scaleId] | 0) + 1;
        }

        return scales;
    };
});

function calculate(answers: any[]): IAmonScales {
    return answers.reduce(combineReducers(scaleReducers), createBlankScales(0));
}

export default function amon(answers: any[]): IAmonScales {
    return validate(answers) || calculate(answers);
}
