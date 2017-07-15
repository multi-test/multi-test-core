import {
    IScaleFactory,
    IAnswersValidator
} from "../util/interfaces";

export default function buildAnswersValidator<TScales>(countOfAnswers: number, validAnswers: any[], invalidScales: TScales): IAnswersValidator<TScales> {
    const isValid = function (answer) {
        return this.has(answer);
    }.bind(new Set(validAnswers));

    return function (answers) {
        if (!answers) {
            return invalidScales;
        }

        if (answers.length !== countOfAnswers) {
            return invalidScales;
        }

        if (!answers.every(isValid)) {
            return invalidScales;
        }
    };
}
