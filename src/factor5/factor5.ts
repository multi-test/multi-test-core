import {buildAnswersValidator} from "../util/validateAnswers";
import {createBlankScales} from "./scales";
import {Factor5Answer as Answer, Factor5Scales as Scales} from "./types";

const SECONDARY_SCALES: Array<keyof Scales> = ["I", "II", "III", "IV", "V"];
const SUB_SCALES: string[] = ["1", "2", "3", "4", "5"];
const PRIMARY_SCALES: Array<keyof Scales> = []; // I.1, I.2, ..., V.4, V.5

SECONDARY_SCALES.forEach((x) => {
    SUB_SCALES.forEach((y) => {
        PRIMARY_SCALES.push(`${x}.${y}` as (keyof Scales));
    });
});

function rootReducer(scales: Scales, answer: Answer, index: number): Scales {
    let III = SECONDARY_SCALES[index % 5];
    let _3 = Math.floor(index / 15) + 1;
    let III_3: keyof Scales = `${III}.${_3}` as any;
    let incrementValue = 3 - answer;

    scales[III] += incrementValue;
    scales[III_3] += incrementValue;

    return scales;
}

const validator = buildAnswersValidator<Answer>(75, [-2, -1, 0, 1, 2]);

function calculate(answers: Answer[]): Scales {
    return answers.reduce(rootReducer, createBlankScales(0));
}

export default function factor5(answers: any[]): Scales {
    return validator(answers) ? calculate(answers) : createBlankScales(NaN);
}
