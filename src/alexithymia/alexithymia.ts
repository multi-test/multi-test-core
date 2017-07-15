import {IAlexithymiaScale, createBlankScales} from "./scales";
import {IAnswersValidator} from "../util/interfaces";
import createAnswersValidator from "../util/validateAnswers";

const positives = new Set([2, 3, 4, 7, 8, 10, 14, 16, 17, 18, 19, 20, 22, 23, 25, 26]);
const negatives = new Set([1, 5, 6, 9, 11, 12, 13, 15, 21, 24]);
const validate = createAnswersValidator(26, [0, 1, 2, 3, 4], createBlankScales(NaN));

function minus(answer, index) {
    return negatives.has(index) ? 5 - answer : NaN;
}

function plus(answer, index) {
    return positives.has(index) ? answer + 1 : minus(answer, index);
}

function reducer(scale, answer, index) {
    return scale + plus(answer, index + 1);
}

function calculate(answers: number[]) {
    return answers.reduce(reducer, 0);
}

export default function alexithymia(answers): IAlexithymiaScale {
    return validate(answers) || createBlankScales(calculate(answers))
}
