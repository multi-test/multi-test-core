import {IScaleReducer} from "../util/interfaces";
import {IScaleMapper} from "../util/interfaces";
import buildAnswersValidator from "../util/validateAnswers";
import {createBlankScales} from "./scales";
import {ILSIScales} from "./scales";

const rootReducer: IScaleReducer<ILSIScales> = (function () {
    const keys = [
        "A", "C", "D", "G", "H", "B", "E", "F", "E", "D", "B", "H", "G", "C",
        "F", "A", "G", "C", "B", "F", "H", "A", "E", "D", "B", "C", "E", "A",
        "D", "G", "F", "H", "C", "A", "B", "G", "D", "E", "H", "F", "E", "A",
        "B", "G", "D", "H", "F", "C", "B", "C", "A", "D", "H", "F", "E", "G",
        "H", "C", "B", "F", "A", "G", "E", "D", "D", "B", "F", "A", "C", "G",
        "E", "H", "E", "D", "B", "F", "A", "C", "H", "G", "G", "A", "F", "E",
        "B", "C", "G", "C", "B", "A", "F", "E", "C", "A", "C", "E", "F",
    ];

    return (scales: ILSIScales, answer, index) => {
        scales[keys[index]] += Number(answer === "+");
        return scales;
    };
}());

const normalize: IScaleMapper<ILSIScales> = (function () {
    const t = [
        { id: "A", values: [3, 13, 27, 39, 50, 61, 79, 84, 90, 97, 98, 99] },
        { id: "B", values: [2, 8, 25, 42, 63, 76, 87, 92, 97, 98, 99] },
        { id: "C", values: [2, 6, 19, 35, 53, 70, 80, 85, 88, 95, 97, 99] },
        { id: "D", values: [5, 20, 37, 63, 78, 88, 95, 97, 99] },
        { id: "E", values: [1, 5, 6, 7, 12, 20, 27, 36, 46, 64, 72, 90, 96, 99] },
        { id: "F", values: [6, 23, 37, 48, 65, 77, 86, 93, 97, 98, 99] },
        { id: "G", values: [0, 3, 6, 17, 28, 42, 59, 76, 87, 92, 97, 99] },
        { id: "H", values: [7, 19, 39, 61, 76, 91, 97, 98, 99] },
    ];

    const ensureRange = (a, x, b) => Math.max(a, Math.min(x, b));

    return (scales: ILSIScales) => {
        t.forEach(({id, values}) => {
            scales["T" + id] = values[ensureRange(0, scales[id], values.length - 1)];
        });

        return scales;
    };
}());

const calculate = (answers) => normalize(answers.reduce(rootReducer, createBlankScales(0)));
const validate = buildAnswersValidator(97, ["+", "-"], createBlankScales(NaN));

export default function lsi(answers: any[]): ILSIScales {
    return validate(answers) || calculate(answers);
}
