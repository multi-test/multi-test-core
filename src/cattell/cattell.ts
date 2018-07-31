import createAnswersValidator from "../util/validateAnswers";
import rawMetadata from "./rawMetadata";
import {createBlankScales, ICattellScales} from "./scales";
import stenMetadata from "./stenMetadata";

const GENDER_QUESTION_INDEX = 187;
const AGE_QUESTION_INDEX = 188;
const TOTAL_QUESTIONS = 189;

const invalidScales = Object.freeze(createBlankScales(NaN));
const isAnswerValid = (answer: any): boolean => answer === "A" || answer === "B" || answer === "C";
const isGenderValid = (gender: any): boolean => gender === "M" || gender === "F";
const isAgeValid = (age: number): boolean => (16 <= age) && (age <= 70);

const validate = createAnswersValidator<ICattellScales>(
    TOTAL_QUESTIONS,
    function cattellAnswerValidator(answer: any, index: number): boolean {
        switch (index) {
            case GENDER_QUESTION_INDEX:
                return isGenderValid(answer);
            case AGE_QUESTION_INDEX:
                return isAgeValid(answer);
            default:
                return isAnswerValid(answer);
        }
    },
    invalidScales,
);

function calculateRaw(answers: any[]): ICattellScales {
    const scales = createBlankScales(0);

    for (let index = 0; index < rawMetadata.length; index++) {
        const { scale, scores } = rawMetadata[index];

        if (scale === "") {
            continue;
        }

        scales[scale] += scores[answers[index]];
    }

    return scales;
}

function calculateNormalized(answers: any[], raw: ICattellScales): ICattellScales {
    const gender = answers[GENDER_QUESTION_INDEX];
    const age = answers[AGE_QUESTION_INDEX];

    const stenTableId = getSTenScoreTableId(gender, age);
    const stenTable = stenMetadata[stenTableId];

    const scales = createBlankScales(NaN);
    stenTable.forEach(({ scale, scores }) => {
        const value = raw[scale];

        scales[scale] = scores.findIndex(([min, max]) => {
            return (min <= value) && (value <= max);
        }) + 1;
    });

    return scales;
}

function getSTenScoreTableId(gender: "M" | "F", age: number) {
    const suffix = (age <= 18) ? "1618" : (age <= 28) ? "1928" : "2970";
    return gender + suffix;
}

function calculate(answers: any[]): ICattellScales {
    const raw = calculateRaw(answers);
    const normalized = calculateNormalized(answers, raw);

    return {
        ...normalized,
        raw,
    };
}

export default function cattell(answers: any[]): ICattellScales {
    return validate(answers) || calculate(answers);
}
