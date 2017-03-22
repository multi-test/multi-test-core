import {
    IAnswersValidator,
    IScaleFactory,
} from "../util/interfaces";

export default function buildAnswersValidator<TScales>(countOfAnswers: number, validAnswers: any[], invalidScales: TScales): IAnswersValidator<TScales> {
    const isInvalid = function (answer) {
        return !this.has(answer);
    }.bind(new Set(validAnswers));

    return function (answers) {
        if (!answers) {
            return invalidScales;
        }

        if (answers.length !== countOfAnswers) {
            return invalidScales;
        }

        for (let i = 0; i < countOfAnswers; i++) {
            if (isInvalid(answers[i])) {
                return invalidScales;
            }
        }
    };
}
