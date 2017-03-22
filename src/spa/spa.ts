import combineReducers from "../util/combineReducers";
import buildAnswersValidator from "../util/validateAnswers";
import {createBlankScales, ISpaScales} from "./scales";

const rootReducer = combineReducers<Object>([
    // Адаптивность
    [[1, "a"], [4, 5, 9, 12, 15, 19, 22, 23, 26, 27, 29, 33, 35, 37, 41, 44, 47, 51, 53, 55, 61, 63, 67, 72, 74, 75, 78, 80, 88, 91, 94, 96, 97, 98]],
    // Дезадаптивность
    [[1, "b"], [2, 6, 7, 13, 16, 18, 25, 28, 32, 36, 38, 40, 42, 43, 49, 50, 54, 56, 59, 60, 62, 64, 69, 71, 73, 76, 77, 83, 84, 86, 90, 95, 99, 100]],
    // Лживость -
    [[2, "a"], [34, 45, 48, 81, 89]],
    // Лживость +
    [[2, "b"], [8, 82, 92, 101]],
    // Приятие себя
    [[3, "a"], [33, 35, 55, 67, 72, 74, 75, 80, 88, 94, 96]],
    // Неприятие себя
    [[3, "b"], [7, 59, 62, 65, 90, 95, 99]],
    // Приятие других
    [[4, "a"], [9, 14, 22, 26, 53, 97]],
    // Неприятие других
    [[4, "b"], [2, 10, 21, 28, 40, 60, 76]],
    // Эмоциональный комфорт
    [[5, "a"], [23, 29, 30, 41, 44, 47, 78]],
    // Эмоциональный дискомфорт
    [[5, "b"], [6, 42, 43, 49, 50, 83, 85]],
    // Внутренний контроль
    [[6, "a"], [4, 5, 11, 12, 19, 27, 37, 51, 63, 68, 79, 91, 98, 13]],
    // Внешний контроль
    [[6, "b"], [25, 36, 52, 57, 70, 71, 73, 77]],
    // Доминирование
    [[7, "a"], [58, 61, 66]],
    // Ведомость
    [[7, "b"], [16, 32, 38, 69, 84, 87]],
    // Эскапизм
    [[8, ""], [17, 18, 54, 64, 86]],
].map(([[a, b], questionsArray]) => {
    const questions = new Set(questionsArray);

    return function scaleReducer(scales: Object, answer: number, index: number) {
        scales[a] = scales[a] || {};
        scales[a][b] = (scales[a][b] || 0) + (questions.has(index) ? answer : 0);
        return scales;
    };
}));

const percent = (r) => Math.round(r * 100);
const sum = (x, y, z, { a, b }) => percent((x * a) / (y * a + z * b));
const pick2 = (key, obj) => obj[key[0]][key[1] || ""];

function scaleMapper(obj) {
    return {
        "1a": pick2("1a", obj),
        "1b": pick2("1b", obj),
        "2a": pick2("2a", obj),
        "2b": pick2("2b", obj),
        "3a": pick2("3a", obj),
        "3b": pick2("3b", obj),
        "4a": pick2("4a", obj),
        "4b": pick2("4b", obj),
        "5a": pick2("5a", obj),
        "5b": pick2("5b", obj),
        "6a": pick2("6a", obj),
        "6b": pick2("6b", obj),
        "7a": pick2("7a", obj),
        "7b": pick2("7b", obj),
        "8": pick2("8", obj),
        "A": sum(1.0, 1.0, 1.0, obj[1]),
        "S": sum(1.0, 1.0, 1.0, obj[3]),
        "L": sum(1.2, 1.2, 1.0, obj[4]),
        "E": sum(1.0, 1.0, 1.0, obj[5]),
        "I": sum(1.0, 1.0, 1.4, obj[6]),
        "D": sum(2.0, 2.0, 1.0, obj[7]),
    };
}

const validate = buildAnswersValidator(101, [0, 2, 3, 4, 5, 6], createBlankScales(NaN));

function calculate(answers: any[]) {
    return scaleMapper(answers.reduce(rootReducer, {}));
}

export default function spa(answers: any[]): ISpaScales {
    return validate(answers) || calculate(answers);
}
