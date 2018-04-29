export function buildAnswersValidator<TAnswer>(
    countOfAnswers: number,
    validAnswers: TAnswer[],
): IAnswersValidator<TAnswer> {

    const setOfValidAnswers = new Set(validAnswers);

    return function areAnswersValid(answers: any[]): answers is TAnswer[] {
        if (!answers) {
            return false;
        }

        if (answers.length !== countOfAnswers) {
            return false;
        }

        for (let i = 0; i < countOfAnswers; i++) {
            if (!setOfValidAnswers.has(answers[i])) {
                return false;
            }
        }

        return true;
    };
}
