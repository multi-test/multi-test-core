import {createBlankScales} from "../mmpi/scales";
import {buildAnswersValidator} from "../util/validateAnswers";
import {IMendelScales} from "./scales";

type MendelMetaEntry = {
    questions: { [key: number]: number[]; },
    scaleId: keyof IMendelScales,
};

const rootReducer: IScaleReducer<IMendelScales, number> = (function () {
    const meta: MendelMetaEntry[] = [
        {
            questions: {
                6: [-1.33, -0.44, 1.18, 1.31, 0.87],
                12: [-1.08, -1.3, -0.6, 0.37, 1.44],
                26: [-1.6, -1.34, -0.4, -0.6, 0.88],
                28: [-1.11, 0, 0.54, 1.22, 0.47],
                32: [-0.9, -1.32, -0.41, 0.41, 1.3],
                33: [-1.19, -0.2, 1, 1.04, 0.4],
                37: [-0.78, -1.48, -1.38, 0.11, 0.48],
                41: [-1.26, -0.93, -0.4, 0.34, 1.24],
                50: [-1.23, -0.74, 0, 0.37, 0.63],
                61: [-0.92, -0.36, 0.28, 0.56, 0.1],
            },
            scaleId: "тревоги",
        },
        {
            questions: {
                2: [-1.58, -1.45, -0.41, 0.7, 1.46],
                7: [-1.51, -1.53, -0.34, 0.58, 1.4],
                15: [-1.45, -1.26, -1, 0, 0.83],
                17: [-1.38, -1.62, -0.22, 0.32, 0.75],
                18: [-1.3, -1.5, -0.15, 0.8, 1.22],
                35: [-1.34, -1.34, -0.5, 0.3, 0.73],
                48: [-1.2, -1.23, 0.36, 0.56, 0.2],
                49: [-1.08, -1.08, -1.18, 0, 0.46],
                58: [-1.2, -1.26, -0.37, 0.21, 0.42],
                68: [-1.08, -0.54, -0.1, 0.25, 0.32],
            },
            scaleId: "невротической депрессии",
        },
        {
            questions: {
                3: [-1.51, -1.14, -0.4, 0.7, 1.4],
                8: [-1.5, -0.33, 0.9, 1.32, 0.7],
                9: [-1.3, -1.58, -0.6, 0.42, 1],
                10: [-1.62, -1.18, 0, 0.79, 1.18],
                14: [-1.56, -0.7, -0.12, 0.73, 1.35],
                16: [-1.62, -0.6, 0.26, 0.81, 1.24],
                24: [-0.93, -0.8, -0.1, 0.6, 1.17],
                27: [-1.19, -0.44, 0.18, 1.2, 1.08],
                45: [-1.58, -0.23, 0.34, 0.57, 0.78],
                62: [-0.5, -0.56, 0.38, 0.56, 0],
            },
            scaleId: "астении",
        },
        {
            questions: {
                5: [-1.41, -1.25, -0.5, 0.4, 1.53],
                21: [-1.2, -1.48, -1.26, -0.18, 0.67],
                31: [-1.15, -1.15, -0.87, -0.1, 0.74],
                34: [-1.48, -1.04, -0.18, 1.11, 0.5],
                35: [-1.34, -1.34, -0.52, 0.3, 0.73],
                36: [-1.3, -1.38, -0.64, -0.12, 0.66],
                45: [-1.58, -0.23, 0.34, 0.57, 0.78],
                47: [-1.38, -1.08, -0.64, -0.1, 0.52],
                49: [-1.08, -1.08, -1.18, -0.1, 0.46],
                57: [-1.2, -1.34, -0.3, 0, 0.42],
                64: [-0.6, -1.26, -1.08, -0.38, 0.23],
            },
            scaleId: "истерического типа реагирования",
        },
        {
            questions: {
                11: [-1.38, -1.32, -0.3, 0.3, 1.2],
                13: [-1.53, -1.38, -0.74, 0.23, 0.9],
                19: [-1.32, -0.63, 0, 0.99, 1.2],
                38: [-0.9, -1.17, -0.43, 0.37, 0.69],
                40: [-1.38, -0.67, -0.81, 0.18, 0.64],
                46: [-1.34, -1.2, 0.1, 0.54, 0.43],
                53: [-0.78, -1.5, -0.35, 0.27, 0.36],
                56: [-0.3, -1.2, -1.3, -0.67, 0.33],
                61: [-0.92, -0.36, 0.28, 0.56, 0.1],
                66: [-1, -0.78, -1.15, -0.52, 0.18],
            },
            scaleId: "обсессивно-фобических нарушений",
        },
        {
            questions: {
                1: [-1.51, -1.6, -0.54, 0.5, 1.45],
                4: [-1.56, -1.51, -0.34, 0.68, 1.23],
                6: [-1.33, -0.44, 1.18, 1.31, 0.87],
                20: [-1.3, -1.58, -0.1, 0.81, 0.77],
                22: [-1.08, -1.5, -0.71, 0.19, 0.92],
                23: [-1.8, -1.4, -0.1, 0.5, 1.22],
                25: [-1.15, -1.48, -1, 0.43, 0.63],
                29: [-1.6, -0.5, -0.3, 0.62, 9],
                30: [-1.34, -0.7, -0.17, 0.42, 0.85],
                32: [-0.9, -1.32, -0.41, 0.42, 1.19],
                39: [-1.56, -0.43, -0.1, 0.48, 0.76],
                42: [-1.3, -0.97, -0.4, -0.1, 0.7],
                43: [-1.11, -0.044, 0, 0.78, 0.45],
                44: [-1.51, -0.57, -0.26, 0.32, 0.63],
                51: [-1.34, -0.78, 0.2, 0.31, 1.4],
                52: [-0.97, -0.66, -0.14, 0.43, 0.77],
                54: [-0.93, -0.3, 0.13, 0.93, 0.6],
                57: [-1.2, -1.34, -0.3, 0, 0.42],
                59: [-1.08, -0.83, -0.26, 0.24, 0.55],
                63: [-0.9, -1.15, -1, -0.1, 0.25],
                65: [-1, -1.26, -0.22, -0.43, 0.27],
                67: [-0.7, -0.42, -0.55, 0.18, 0.4],
            },
            scaleId: "вегетативных нарушений",
        },
    ];

    return (scales: IMendelScales, answer: number, index: number) => {
        for (const entry of meta) {
            const {scaleId, questions} = entry;
            let scores = questions[index + 1];
            scales[scaleId] += scores ? scores[answer - 1] : 0;
        }

        return scales;
    };
}());

const calculate = (answers: number[]) => answers.reduce(rootReducer, createBlankScales(0));
const validate = buildAnswersValidator(71, [1, 2, 3, 4, 5]);

export default function mendel(answers: any[]): IMendelScales {
    return validate(answers) ? calculate(answers) : createBlankScales(NaN);
}