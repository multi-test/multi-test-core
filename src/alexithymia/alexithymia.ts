import {buildAnswersValidator} from "../util/validateAnswers";
import {AlexithymiaAnswer as Answer, AlexithymiaScales as Scales} from "./types";

const createBlankScales: IScaleFactory<Scales> = (v) => ({A: v});
const positives = new Set([2, 3, 4, 7, 8, 10, 14, 16, 17, 18, 19, 20, 22, 23, 25, 26]);
const negatives = new Set([1, 5, 6, 9, 11, 12, 13, 15, 21, 24]);
const validate = buildAnswersValidator<Answer>(26, [0, 1, 2, 3, 4]);

function minus(answer: Answer, index: number): number {
    return negatives.has(index) ? 5 - answer : NaN;
}

function plus(answer: Answer, index: number): number {
    return positives.has(index) ? answer + 1 : minus(answer, index);
}

function reducer(scale: number, answer: Answer, index: number) {
    return scale + plus(answer, index + 1);
}

function calculate(answers: Answer[]) {
    return answers.reduce(reducer, 0);
}

export default function alexithymia(answers: any[]): Scales {
    return validate(answers) ? createBlankScales(calculate(answers)) : createBlankScales(NaN);
}
