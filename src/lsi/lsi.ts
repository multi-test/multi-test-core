import {buildAnswersValidator} from "../util/validateAnswers";
import {createBlankScales} from "./scales";
import {LSIAnswer as Answer, LSIScales as Scales} from "./types";

const rootReducer: IScaleReducer<Scales, Answer> = (function () {
    const keys: Array<keyof Scales> = [
        "A", "C", "D", "G", "H", "B", "E", "F", "E", "D", "B", "H", "G", "C",
        "F", "A", "G", "C", "B", "F", "H", "A", "E", "D", "B", "C", "E", "A",
        "D", "G", "F", "H", "C", "A", "B", "G", "D", "E", "H", "F", "E", "A",
        "B", "G", "D", "H", "F", "C", "B", "C", "A", "D", "H", "F", "E", "G",
        "H", "C", "B", "F", "A", "G", "E", "D", "D", "B", "F", "A", "C", "G",
        "E", "H", "E", "D", "B", "F", "A", "C", "H", "G", "G", "A", "F", "E",
        "B", "C", "G", "C", "B", "A", "F", "E", "C", "A", "C", "E", "F",
    ];

    return (scales: Scales, answer: Answer, index: number): Scales => {
        const inc01 = Number(answer === "+");
        scales[keys[index]] += inc01;

        return scales;
    };
}());

type LSIMetaScale = {
    id: keyof Scales;
    values: number[];
};

const normalize: IScaleMapper<Scales> = (function () {
    const meta: LSIMetaScale[] = [
        {id: "A", values: [3, 13, 27, 39, 50, 61, 79, 84, 90, 97, 98, 99]},
        {id: "B", values: [2, 8, 25, 42, 63, 76, 87, 92, 97, 98, 99]},
        {id: "C", values: [2, 6, 19, 35, 53, 70, 80, 85, 88, 95, 97, 99]},
        {id: "D", values: [5, 20, 37, 63, 78, 88, 95, 97, 99]},
        {id: "E", values: [1, 5, 6, 7, 12, 20, 27, 36, 46, 64, 72, 90, 96, 99]},
        {id: "F", values: [6, 23, 37, 48, 65, 77, 86, 93, 97, 98, 99]},
        {id: "G", values: [0, 3, 6, 17, 28, 42, 59, 76, 87, 92, 97, 99]},
        {id: "H", values: [7, 19, 39, 61, 76, 91, 97, 98, 99]},
    ];

    function ensureIndexIsInArray(index: number, arr: any[]): number {
        return Math.max(0, Math.min(index, arr.length - 1));
    }

    return (scales: Scales) => {
        for (const metaScale of meta) {
            const { id, values } = metaScale;
            const rawValue = scales[id];
            const indexOfNormalizedValue = ensureIndexIsInArray(rawValue, values);
            const tkey: keyof Scales = ("T" + id) as any;

            scales[tkey] = values[indexOfNormalizedValue];
        }

        return scales;
    };
}());

const calculate = (answers: Answer[]) => normalize(answers.reduce(rootReducer, createBlankScales(0)));
const validate = buildAnswersValidator<Answer>(97, ["+", "-"]);

export default function lsi(answers: any[]): Scales {
    return validate(answers) ? calculate(answers) : createBlankScales(NaN);
}
