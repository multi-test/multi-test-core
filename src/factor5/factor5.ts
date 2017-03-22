import buildAnswersValidator from "../util/validateAnswers";
import {createBlankScales, IFactor5Scales} from "./scales";

const SECONDARY_SCALES = ["I", "II", "III", "IV", "V"];
const SUB_SCALES = ["1", "2", "3", "4", "5"];
const PRIMARY_SCALES = []; // I.1, I.2, ..., V.4, V.5

SECONDARY_SCALES.forEach((x) => {
    SUB_SCALES.forEach((y) => {
        PRIMARY_SCALES.push(`${x}.${y}`);
    });
});

function rootReducer(scales: IFactor5Scales, answer: number, index: number): IFactor5Scales {
    let III = SECONDARY_SCALES[index % 5];
    let _3 = Math.floor(index / 15) + 1;
    let III_3 = `${III}.${_3}`;
    let incrementValue = 3 - answer;

    scales[III] += incrementValue;
    scales[III_3] += incrementValue;

    return scales;
}

const validator = buildAnswersValidator(75, [-2, -1, 0, 1, 2], createBlankScales(NaN));

function calculate(answers: any[]) {
    return answers.reduce(rootReducer, createBlankScales(0));
}

export default function factor5(answers: any[]): IFactor5Scales {
    return validator(answers) || calculate(answers);
}
