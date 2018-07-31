import {
    IAnswersValidator, IAnswerValidator,
    IScaleFactory,
} from "../util/interfaces";

export default function buildAnswersValidator<TScales>(
    countOfAnswers: number,
    validatorArg: any[] | IAnswerValidator,
    invalidScales: TScales,
): IAnswersValidator<TScales> {
    const isValid: IAnswerValidator = Array.isArray(validatorArg)
        ? buildAnswerValidator(validatorArg)
        : validatorArg;

    return function anAnswersValidator(answers) {
        if (!answers) {
            return invalidScales;
        }

        if (answers.length !== countOfAnswers) {
            return invalidScales;
        }

        for (let i = 0; i < countOfAnswers; i++) {
            if (!isValid(answers[i], i, answers)) {
                return invalidScales;
            }
        }
    };
}

function buildAnswerValidator(validAnswers: any[]): IAnswerValidator {
    const set = new Set(validAnswers);

    return function setValidatorForAnswer(answer: any): boolean {
        return set.has(answer);
    };
}
