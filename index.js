'use strict';

function buildAnswersValidator(countOfAnswers, validatorArg, invalidScales) {
    const isValid = Array.isArray(validatorArg)
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
function buildAnswerValidator(validAnswers) {
    const set = new Set(validAnswers);
    return function setValidatorForAnswer(answer) {
        return set.has(answer);
    };
}

const createBlankScales = function (v) {
    return {
        A: v,
    };
};

const positives = new Set([2, 3, 4, 7, 8, 10, 14, 16, 17, 18, 19, 20, 22, 23, 25, 26]);
const negatives = new Set([1, 5, 6, 9, 11, 12, 13, 15, 21, 24]);
const validate = buildAnswersValidator(26, [0, 1, 2, 3, 4], createBlankScales(NaN));
function minus(answer, index) {
    return negatives.has(index) ? 5 - answer : NaN;
}
function plus(answer, index) {
    return positives.has(index) ? answer + 1 : minus(answer, index);
}
function reducer(scale, answer, index) {
    return scale + plus(answer, index + 1);
}
function calculate(answers) {
    return answers.reduce(reducer, 0);
}
function alexithymia(answers) {
    return validate(answers) || createBlankScales(calculate(answers));
}

function combineReducers(reducers) {
    return function rootReducer(scales, value, index) {
        return reducers.reduce((acc, reducer) => {
            return reducer(acc, value, index + 1);
        }, scales);
    };
}

const createBlankScales$1 = function (v) {
    return {
        A1: v,
        A2: v,
        A3: v,
        C1: v,
        C2: v,
        C3: v,
        LO1: v,
        LO2: v,
        LO3: v,
        LI1: v,
        LI2: v,
        LI3: v,
        N1: v,
        N2: v,
        N3: v,
        S1: v,
        S2: v,
        S3: v,
    };
};

const validate$1 = buildAnswersValidator(220, ["+", "-"], createBlankScales$1(NaN));
const scaleReducers = [
    { scaleId: "A1", indices: [1, 8, 26, 30, 51, 74, 112, 126, 157, 173, 184, 195, 210] },
    { scaleId: "A2", indices: [2, 4, 6, 63, 92, 97, 104, 118, 132, 145, 168, 175, 180, 203] },
    { scaleId: "A3", indices: [25, 28, 39, 61, 66, 72, 100, 102, 150, 153, 161, 215] },
    { scaleId: "C1", indices: [11, 35, 50, 94, 127, 136, 143, 160, 171, 191, 213, 220] },
    { scaleId: "C2", indices: [32, 47, 54, 59, 91, 109, 128, 163, 178, 179, 188] },
    { scaleId: "C3", indices: [69, 75, 76, 108, 116, 131, 149, 155, 170, 177, 181, 196, 207, 219] },
    { scaleId: "LO1", indices: [23, 36, 58, 89, 90, 95, 99, 137, 138, 140, 176] },
    { scaleId: "LO2", indices: [3, 14, 37, 38, 46, 82, 88, 148, 154, 158, 209] },
    { scaleId: "LO3", indices: [7, 17, 57, 71, 84, 86, 120, 123, 164, 166, 218] },
    { scaleId: "LI1", indices: [5, 13, 21, 29, 42, 98, 107, 130, 147, 167, 192, 201] },
    { scaleId: "LI2", indices: [10, 16, 55, 80, 117, 169, 185, 187, 193, 200, 202, 208] },
    { scaleId: "LI3", indices: [12, 41, 45, 49, 52, 56, 77, 119, 122, 125, 172, 190, 211] },
    { scaleId: "N1", indices: [18, 34, 44, 73, 85, 96, 106, 115, 141, 183, 189, 198] },
    { scaleId: "N2", indices: [19, 31, 53, 68, 87, 113, 162, 174, 199, 204, 206, 214] },
    { scaleId: "N3", indices: [9, 24, 27, 64, 79, 101, 103, 111, 124, 134, 146, 156, 216] },
    { scaleId: "S1", indices: [15, 33, 40, 43, 48, 65, 78, 83, 105, 133, 139, 151, 217] },
    { scaleId: "S2", indices: [20, 22, 62, 67, 70, 93, 110, 129, 142, 159, 186, 194, 197] },
    { scaleId: "S3", indices: [60, 81, 114, 121, 135, 144, 152, 165, 182, 205, 212] },
].map((scaleMeta) => {
    let { indices, scaleId } = scaleMeta;
    let set = new Set(indices);
    return function scaleReducer(scales, value, index) {
        if (value === "+" && set.has(index)) {
            scales[scaleId] = (scales[scaleId] | 0) + 1;
        }
        return scales;
    };
});
function calculate$1(answers) {
    return answers.reduce(combineReducers(scaleReducers), createBlankScales$1(0));
}
function amon(answers) {
    return validate$1(answers) || calculate$1(answers);
}

const createBlankScales$2 = function (v) {
    return {
        A: v,
        B: v,
        C: v,
        E: v,
        F: v,
        G: v,
        H: v,
        I: v,
        L: v,
        M: v,
        N: v,
        O: v,
        Q1: v,
        Q2: v,
        Q3: v,
        Q4: v,
    };
};

const cattelRawMetadata = [
    /* 1   */ ['', 0, 0, 0],
    /* 2   */ ['', 0, 0, 0],
    /* 3   */ ['A', 2, 1, 0],
    /* 4   */ ['C', 2, 1, 0],
    /* 5   */ ['C', 0, 1, 2],
    /* 6   */ ['E', 0, 1, 2],
    /* 7   */ ['E', 2, 1, 0],
    /* 8   */ ['F', 0, 1, 2],
    /* 9   */ ['G', 0, 1, 2],
    /* 10  */ ['H', 2, 1, 0],
    /* 11  */ ['I', 0, 1, 2],
    /* 12  */ ['I', 2, 1, 0],
    /* 13  */ ['L', 0, 1, 2],
    /* 14  */ ['M', 0, 1, 2],
    /* 15  */ ['M', 0, 1, 2],
    /* 16  */ ['N', 0, 1, 2],
    /* 17  */ ['N', 2, 1, 0],
    /* 18  */ ['O', 2, 1, 0],
    /* 19  */ ['O', 0, 1, 2],
    /* 20  */ ['Q1', 2, 1, 0],
    /* 21  */ ['Q1', 0, 1, 2],
    /* 22  */ ['Q2', 0, 1, 2],
    /* 23  */ ['Q3', 0, 1, 2],
    /* 24  */ ['Q3', 0, 1, 2],
    /* 25  */ ['Q4', 0, 1, 2],
    /* 26  */ ['A', 0, 1, 2],
    /* 27  */ ['A', 0, 1, 2],
    /* 28  */ ['B', 0, 1, 0],
    /* 29  */ ['C', 0, 1, 2],
    /* 30  */ ['C', 2, 1, 0],
    /* 31  */ ['E', 0, 1, 2],
    /* 32  */ ['E', 0, 1, 2],
    /* 33  */ ['F', 2, 1, 0],
    /* 34  */ ['G', 0, 1, 2],
    /* 35  */ ['H', 0, 1, 2],
    /* 36  */ ['H', 2, 1, 0],
    /* 37  */ ['I', 2, 1, 0],
    /* 38  */ ['L', 2, 1, 0],
    /* 39  */ ['M', 2, 1, 0],
    /* 40  */ ['M', 2, 1, 0],
    /* 41  */ ['N', 0, 1, 2],
    /* 42  */ ['N', 2, 1, 0],
    /* 43  */ ['O', 2, 1, 0],
    /* 44  */ ['O', 0, 1, 2],
    /* 45  */ ['Q1', 0, 1, 2],
    /* 46  */ ['Q1', 2, 1, 0],
    /* 47  */ ['Q2', 2, 1, 0],
    /* 48  */ ['Q3', 2, 1, 0],
    /* 49  */ ['Q4', 2, 1, 0],
    /* 50  */ ['Q4', 2, 1, 0],
    /* 51  */ ['A', 0, 1, 2],
    /* 52  */ ['A', 2, 1, 0],
    /* 53  */ ['B', 0, 1, 0],
    /* 54  */ ['B', 0, 1, 0],
    /* 55  */ ['C', 2, 1, 0],
    /* 56  */ ['E', 2, 1, 0],
    /* 57  */ ['E', 0, 1, 2],
    /* 58  */ ['F', 2, 1, 0],
    /* 59  */ ['G', 0, 1, 2],
    /* 60  */ ['H', 0, 1, 2],
    /* 61  */ ['H', 0, 1, 2],
    /* 62  */ ['I', 0, 1, 2],
    /* 63  */ ['L', 0, 1, 2],
    /* 64  */ ['L', 0, 1, 2],
    /* 65  */ ['M', 2, 1, 0],
    /* 66  */ ['N', 0, 1, 2],
    /* 67  */ ['N', 0, 1, 2],
    /* 68  */ ['O', 0, 1, 2],
    /* 69  */ ['O', 2, 1, 0],
    /* 70  */ ['Q1', 2, 1, 0],
    /* 71  */ ['Q2', 2, 1, 0],
    /* 72  */ ['Q2', 2, 1, 0],
    /* 73  */ ['Q3', 2, 1, 0],
    /* 74  */ ['Q4', 2, 1, 0],
    /* 75  */ ['Q4', 0, 1, 2],
    /* 76  */ ['A', 0, 1, 2],
    /* 77  */ ['B', 0, 0, 1],
    /* 78  */ ['B', 0, 1, 0],
    /* 79  */ ['C', 0, 1, 2],
    /* 80  */ ['C', 0, 1, 2],
    /* 81  */ ['E', 0, 1, 2],
    /* 82  */ ['F', 0, 1, 2],
    /* 83  */ ['F', 2, 1, 0],
    /* 84  */ ['G', 0, 1, 2],
    /* 85  */ ['H', 0, 1, 2],
    /* 86  */ ['H', 0, 1, 2],
    /* 87  */ ['I', 0, 1, 2],
    /* 88  */ ['L', 2, 1, 0],
    /* 89  */ ['L', 0, 1, 2],
    /* 90  */ ['M', 0, 1, 2],
    /* 91  */ ['M', 2, 1, 0],
    /* 92  */ ['N', 0, 1, 2],
    /* 93  */ ['O', 0, 1, 2],
    /* 94  */ ['O', 2, 1, 0],
    /* 95  */ ['Q1', 0, 1, 2],
    /* 96  */ ['Q2', 0, 1, 2],
    /* 97  */ ['Q2', 0, 1, 2],
    /* 98  */ ['Q3', 2, 1, 0],
    /* 99  */ ['Q4', 2, 1, 0],
    /* 100 */ ['Q4', 0, 1, 2],
    /* 101 */ ['A', 2, 1, 0],
    /* 102 */ ['B', 0, 0, 1],
    /* 103 */ ['B', 0, 1, 0],
    /* 104 */ ['C', 2, 1, 0],
    /* 105 */ ['C', 2, 1, 0],
    /* 106 */ ['E', 0, 1, 2],
    /* 107 */ ['F', 0, 1, 2],
    /* 108 */ ['F', 0, 1, 2],
    /* 109 */ ['G', 2, 1, 0],
    /* 110 */ ['H', 2, 1, 0],
    /* 111 */ ['H', 2, 1, 0],
    /* 112 */ ['I', 2, 1, 0],
    /* 113 */ ['L', 2, 1, 0],
    /* 114 */ ['L', 2, 1, 0],
    /* 115 */ ['M', 2, 1, 0],
    /* 116 */ ['M', 2, 1, 0],
    /* 117 */ ['N', 2, 1, 0],
    /* 118 */ ['O', 2, 1, 0],
    /* 119 */ ['O', 2, 1, 0],
    /* 120 */ ['Q1', 0, 1, 2],
    /* 121 */ ['Q2', 0, 1, 2],
    /* 122 */ ['Q2', 0, 1, 2],
    /* 123 */ ['Q3', 0, 1, 2],
    /* 124 */ ['Q4', 2, 1, 0],
    /* 125 */ ['Q4', 0, 1, 2],
    /* 126 */ ['A', 2, 1, 0],
    /* 127 */ ['B', 0, 0, 1],
    /* 128 */ ['B', 0, 1, 0],
    /* 129 */ ['C', 0, 1, 2],
    /* 130 */ ['C', 2, 1, 0],
    /* 131 */ ['E', 2, 1, 0],
    /* 132 */ ['F', 2, 1, 0],
    /* 133 */ ['F', 2, 1, 0],
    /* 134 */ ['G', 2, 1, 0],
    /* 135 */ ['H', 2, 1, 0],
    /* 136 */ ['H', 2, 1, 0],
    /* 137 */ ['I', 0, 1, 2],
    /* 138 */ ['I', 2, 1, 0],
    /* 139 */ ['L', 0, 1, 2],
    /* 140 */ ['M', 2, 1, 0],
    /* 141 */ ['M', 0, 1, 2],
    /* 142 */ ['N', 2, 1, 0],
    /* 143 */ ['O', 2, 1, 0],
    /* 144 */ ['O', 0, 1, 2],
    /* 145 */ ['Q1', 2, 1, 0],
    /* 146 */ ['Q2', 2, 1, 0],
    /* 147 */ ['Q3', 0, 1, 2],
    /* 148 */ ['Q3', 2, 1, 0],
    /* 149 */ ['Q4', 2, 1, 0],
    /* 150 */ ['Q4', 0, 1, 2],
    /* 151 */ ['A', 0, 1, 2],
    /* 152 */ ['B', 1, 0, 0],
    /* 153 */ ['B', 0, 0, 1],
    /* 154 */ ['C', 0, 1, 2],
    /* 155 */ ['E', 2, 1, 0],
    /* 156 */ ['E', 2, 1, 0],
    /* 157 */ ['F', 0, 1, 2],
    /* 158 */ ['F', 0, 1, 2],
    /* 159 */ ['G', 0, 1, 2],
    /* 160 */ ['G', 2, 1, 0],
    /* 161 */ ['H', 0, 1, 2],
    /* 162 */ ['I', 0, 1, 2],
    /* 163 */ ['I', 2, 1, 0],
    /* 164 */ ['L', 2, 1, 0],
    /* 165 */ ['M', 0, 1, 2],
    /* 166 */ ['M', 0, 1, 2],
    /* 167 */ ['N', 2, 1, 0],
    /* 168 */ ['O', 0, 1, 2],
    /* 169 */ ['Q1', 2, 1, 0],
    /* 170 */ ['Q1', 0, 1, 2],
    /* 171 */ ['Q2', 2, 1, 0],
    /* 172 */ ['Q3', 0, 1, 2],
    /* 173 */ ['Q3', 2, 1, 0],
    /* 174 */ ['Q4', 2, 1, 0],
    /* 175 */ ['Q4', 0, 1, 2],
    /* 176 */ ['A', 2, 1, 0],
    /* 177 */ ['B', 1, 0, 0],
    /* 178 */ ['B', 1, 0, 0],
    /* 179 */ ['C', 2, 1, 0],
    /* 180 */ ['E', 2, 1, 0],
    /* 181 */ ['E', 2, 1, 0],
    /* 182 */ ['F', 2, 1, 0],
    /* 183 */ ['F', 2, 1, 0],
    /* 184 */ ['G', 2, 1, 0],
    /* 185 */ ['G', 2, 1, 0],
    /* 186 */ ['H', 2, 1, 0],
    /* 187 */ ['', 0, 0, 0],
].map(([scale, A, B, C]) => ({
    scale,
    scores: { A, B, C },
}));

const F1618 = [
    {
        scale: "A",
        scores: [
            { "score": 0, "range": [0, 6] },
            { "score": 1, "range": [7, 8] },
            { "score": 2, "range": [7, 8] },
            { "score": 3, "range": [9, 10] },
            { "score": 4, "range": [11, 11] },
            { "score": 5, "range": [12, 13] },
            { "score": 6, "range": [14, 15] },
            { "score": 7, "range": [16, 16] },
            { "score": 8, "range": [17, 18] },
            { "score": 9, "range": [19, 20] }
        ],
    }, {
        scale: "B",
        scores: [
            { "score": 0, "range": [0, 1] },
            { "score": 1, "range": [2, 2] },
            { "score": 2, "range": [3, 3] },
            { "score": 3, "range": [4, 4] },
            { "score": 4, "range": [5, 5] },
            { "score": 5, "range": [6, 6] },
            { "score": 6, "range": [7, 7] },
            { "score": 7, "range": [8, 9] },
            { "score": 8, "range": [10, 10] },
            { "score": 9, "range": [11, 12] }
        ],
    }, {
        scale: "C",
        scores: [
            { "score": 0, "range": [0, 6] },
            { "score": 1, "range": [7, 8] },
            { "score": 2, "range": [9, 10] },
            { "score": 3, "range": [11, 12] },
            { "score": 4, "range": [13, 14] },
            { "score": 5, "range": [15, 16] },
            { "score": 6, "range": [17, 18] },
            { "score": 7, "range": [19, 20] },
            { "score": 8, "range": [21, 21] },
            { "score": 9, "range": [22, 26] }
        ],
    }, {
        scale: "E",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 8] },
            { "score": 4, "range": [9, 10] },
            { "score": 5, "range": [11, 12] },
            { "score": 6, "range": [13, 15] },
            { "score": 7, "range": [16, 17] },
            { "score": 8, "range": [18, 19] },
            { "score": 9, "range": [20, 26] }
        ],
    }, {
        scale: "F",
        scores: [
            { "score": 0, "range": [0, 6] },
            { "score": 1, "range": [7, 8] },
            { "score": 2, "range": [9, 11] },
            { "score": 3, "range": [12, 14] },
            { "score": 4, "range": [15, 16] },
            { "score": 5, "range": [17, 18] },
            { "score": 6, "range": [19, 20] },
            { "score": 7, "range": [21, 22] },
            { "score": 8, "range": [23, 23] },
            { "score": 9, "range": [24, 26] }
        ],
    }, {
        scale: "G",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 7] },
            { "score": 2, "range": [8, 9] },
            { "score": 3, "range": [10, 11] },
            { "score": 4, "range": [12, 13] },
            { "score": 5, "range": [14, 14] },
            { "score": 6, "range": [15, 16] },
            { "score": 7, "range": [17, 17] },
            { "score": 8, "range": [18, 18] },
            { "score": 9, "range": [19, 20] }
        ],
    }, {
        scale: "H",
        scores: [
            { "score": 0, "range": [0, 2] },
            { "score": 1, "range": [3, 4] },
            { "score": 2, "range": [5, 7] },
            { "score": 3, "range": [8, 9] },
            { "score": 4, "range": [10, 12] },
            { "score": 5, "range": [13, 14] },
            { "score": 6, "range": [15, 17] },
            { "score": 7, "range": [18, 20] },
            { "score": 8, "range": [21, 22] },
            { "score": 9, "range": [23, 26] }
        ],
    }, {
        scale: "I",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 7] },
            { "score": 2, "range": [8, 8] },
            { "score": 3, "range": [9, 10] },
            { "score": 4, "range": [11, 11] },
            { "score": 5, "range": [12, 13] },
            { "score": 6, "range": [14, 14] },
            { "score": 7, "range": [15, 15] },
            { "score": 8, "range": [16, 17] },
            { "score": 9, "range": [18, 20] }
        ],
    }, {
        scale: "L",
        scores: [
            { "score": 0, "range": [0, 2] },
            { "score": 1, "range": [3, 3] },
            { "score": 2, "range": [4, 5] },
            { "score": 3, "range": [6, 6] },
            { "score": 4, "range": [7, 8] },
            { "score": 5, "range": [9, 9] },
            { "score": 6, "range": [10, 11] },
            { "score": 7, "range": [12, 13] },
            { "score": 8, "range": [14, 14] },
            { "score": 9, "range": [15, 16] }
        ],
    }, {
        scale: "M",
        scores: [
            { "score": 0, "range": [0, 6] },
            { "score": 1, "range": [7, 7] },
            { "score": 2, "range": [8, 9] },
            { "score": 3, "range": [10, 10] },
            { "score": 4, "range": [11, 12] },
            { "score": 5, "range": [13, 14] },
            { "score": 6, "range": [15, 16] },
            { "score": 7, "range": [17, 17] },
            { "score": 8, "range": [18, 19] },
            { "score": 9, "range": [20, 28] }
        ],
    }, {
        scale: "N",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 6] },
            { "score": 2, "range": [7, 7] },
            { "score": 3, "range": [8, 8] },
            { "score": 4, "range": [9, 10] },
            { "score": 5, "range": [11, 11] },
            { "score": 6, "range": [12, 13] },
            { "score": 7, "range": [14, 14] },
            { "score": 8, "range": [15, 15] },
            { "score": 9, "range": [16, 20] }
        ],
    }, {
        scale: "O",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 5] },
            { "score": 2, "range": [6, 7] },
            { "score": 3, "range": [8, 9] },
            { "score": 4, "range": [10, 11] },
            { "score": 5, "range": [12, 13] },
            { "score": 6, "range": [14, 15] },
            { "score": 7, "range": [16, 17] },
            { "score": 8, "range": [18, 19] },
            { "score": 9, "range": [20, 26] }
        ],
    }, {
        scale: "Q1",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 5] },
            { "score": 3, "range": [6, 6] },
            { "score": 4, "range": [7, 8] },
            { "score": 5, "range": [9, 9] },
            { "score": 6, "range": [10, 11] },
            { "score": 7, "range": [12, 12] },
            { "score": 8, "range": [13, 14] },
            { "score": 9, "range": [15, 20] }
        ],
    }, {
        scale: "Q2",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 7] },
            { "score": 4, "range": [8, 9] },
            { "score": 5, "range": [10, 11] },
            { "score": 6, "range": [12, 13] },
            { "score": 7, "range": [14, 15] },
            { "score": 8, "range": [16, 17] },
            { "score": 9, "range": [18, 20] }
        ],
    }, {
        scale: "Q3",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 6] },
            { "score": 2, "range": [7, 7] },
            { "score": 3, "range": [8, 9] },
            { "score": 4, "range": [10, 10] },
            { "score": 5, "range": [11, 12] },
            { "score": 6, "range": [13, 13] },
            { "score": 7, "range": [14, 14] },
            { "score": 8, "range": [15, 16] },
            { "score": 9, "range": [17, 20] }
        ],
    }, {
        scale: "Q4",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 5] },
            { "score": 2, "range": [6, 8] },
            { "score": 3, "range": [9, 11] },
            { "score": 4, "range": [12, 13] },
            { "score": 5, "range": [14, 16] },
            { "score": 6, "range": [17, 19] },
            { "score": 7, "range": [20, 21] },
            { "score": 8, "range": [22, 23] },
            { "score": 9, "range": [24, 26] }
        ]
    },
];
const M1618 = [
    {
        scale: "A",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 7] },
            { "score": 4, "range": [8, 9] },
            { "score": 5, "range": [10, 11] },
            { "score": 6, "range": [12, 12] },
            { "score": 7, "range": [13, 14] },
            { "score": 8, "range": [15, 16] },
            { "score": 9, "range": [17, 20] }
        ],
    }, {
        scale: "B",
        scores: [
            { "score": 0, "range": [0, 1] },
            { "score": 1, "range": [2, 2] },
            { "score": 2, "range": [3, 3] },
            { "score": 3, "range": [4, 4] },
            { "score": 4, "range": [5, 5] },
            { "score": 5, "range": [6, 6] },
            { "score": 6, "range": [7, 7] },
            { "score": 7, "range": [8, 9] },
            { "score": 8, "range": [10, 10] },
            { "score": 9, "range": [11, 12] }
        ],
    }, {
        scale: "C",
        scores: [
            { "score": 0, "range": [0, 7] },
            { "score": 1, "range": [8, 9] },
            { "score": 2, "range": [10, 11] },
            { "score": 3, "range": [12, 13] },
            { "score": 4, "range": [14, 15] },
            { "score": 5, "range": [16, 17] },
            { "score": 6, "range": [18, 19] },
            { "score": 7, "range": [20, 20] },
            { "score": 8, "range": [21, 22] },
            { "score": 9, "range": [23, 26] }
        ],
    }, {
        scale: "E",
        scores: [
            { "score": 0, "range": [0, 6] },
            { "score": 1, "range": [7, 8] },
            { "score": 2, "range": [9, 9] },
            { "score": 3, "range": [10, 11] },
            { "score": 4, "range": [12, 13] },
            { "score": 5, "range": [14, 15] },
            { "score": 6, "range": [16, 17] },
            { "score": 7, "range": [18, 19] },
            { "score": 8, "range": [20, 21] },
            { "score": 9, "range": [22, 26] }
        ],
    }, {
        scale: "F",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 8] },
            { "score": 2, "range": [9, 11] },
            { "score": 3, "range": [12, 14] },
            { "score": 4, "range": [15, 16] },
            { "score": 5, "range": [17, 18] },
            { "score": 6, "range": [19, 20] },
            { "score": 7, "range": [21, 22] },
            { "score": 8, "range": [23, 23] },
            { "score": 9, "range": [24, 26] }
        ],
    }, {
        scale: "G",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 6] },
            { "score": 2, "range": [7, 8] },
            { "score": 3, "range": [9, 10] },
            { "score": 4, "range": [11, 12] },
            { "score": 5, "range": [13, 14] },
            { "score": 6, "range": [15, 16] },
            { "score": 7, "range": [17, 17] },
            { "score": 8, "range": [18, 18] },
            { "score": 9, "range": [19, 20] }
        ],
    }, {
        scale: "H",
        scores: [
            { "score": 0, "range": [0, 2] },
            { "score": 1, "range": [3, 4] },
            { "score": 2, "range": [5, 7] },
            { "score": 3, "range": [8, 10] },
            { "score": 4, "range": [11, 13] },
            { "score": 5, "range": [14, 16] },
            { "score": 6, "range": [17, 18] },
            { "score": 7, "range": [19, 20] },
            { "score": 8, "range": [21, 22] },
            { "score": 9, "range": [23, 26] }
        ],
    }, {
        scale: "I",
        scores: [
            { "score": 0, "range": [0, 2] },
            { "score": 1, "range": [3, 3] },
            { "score": 2, "range": [4, 4] },
            { "score": 3, "range": [5, 6] },
            { "score": 4, "range": [7, 8] },
            { "score": 5, "range": [9, 9] },
            { "score": 6, "range": [10, 11] },
            { "score": 7, "range": [12, 13] },
            { "score": 8, "range": [14, 15] },
            { "score": 9, "range": [16, 20] }
        ],
    }, {
        scale: "L",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 8] },
            { "score": 4, "range": [9, 9] },
            { "score": 5, "range": [10, 11] },
            { "score": 6, "range": [12, 13] },
            { "score": 7, "range": [14, 14] },
            { "score": 8, "range": [15, 16] },
            { "score": 9, "range": [17, 20] }
        ],
    }, {
        scale: "M",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 6] },
            { "score": 2, "range": [7, 7] },
            { "score": 3, "range": [8, 9] },
            { "score": 4, "range": [10, 11] },
            { "score": 5, "range": [12, 13] },
            { "score": 6, "range": [14, 14] },
            { "score": 7, "range": [15, 16] },
            { "score": 8, "range": [17, 18] },
            { "score": 9, "range": [19, 26] }
        ],
    }, {
        scale: "N",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 7] },
            { "score": 2, "range": [8, 8] },
            { "score": 3, "range": [9, 9] },
            { "score": 4, "range": [10, 10] },
            { "score": 5, "range": [11, 12] },
            { "score": 6, "range": [13, 13] },
            { "score": 7, "range": [14, 15] },
            { "score": 8, "range": [16, 16] },
            { "score": 9, "range": [17, 20] }
        ],
    }, {
        scale: "O",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 8] },
            { "score": 4, "range": [9, 10] },
            { "score": 5, "range": [11, 11] },
            { "score": 6, "range": [12, 13] },
            { "score": 7, "range": [14, 15] },
            { "score": 8, "range": [16, 17] },
            { "score": 9, "range": [18, 26] }
        ],
    }, {
        scale: "Q1",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 5] },
            { "score": 2, "range": [6, 6] },
            { "score": 3, "range": [7, 8] },
            { "score": 4, "range": [9, 9] },
            { "score": 5, "range": [10, 11] },
            { "score": 6, "range": [12, 12] },
            { "score": 7, "range": [13, 13] },
            { "score": 8, "range": [14, 15] },
            { "score": 9, "range": [16, 20] }
        ],
    }, {
        scale: "Q2",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 8] },
            { "score": 4, "range": [9, 9] },
            { "score": 5, "range": [10, 11] },
            { "score": 6, "range": [12, 13] },
            { "score": 7, "range": [14, 15] },
            { "score": 8, "range": [16, 17] },
            { "score": 9, "range": [18, 20] }
        ],
    }, {
        scale: "Q3",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 5] },
            { "score": 2, "range": [6, 6] },
            { "score": 3, "range": [7, 8] },
            { "score": 4, "range": [9, 10] },
            { "score": 5, "range": [11, 11] },
            { "score": 6, "range": [12, 13] },
            { "score": 7, "range": [14, 14] },
            { "score": 8, "range": [15, 18] },
            { "score": 9, "range": [17, 20] }
        ],
    }, {
        scale: "Q4",
        scores: [
            { "score": 0, "range": [0, 2] },
            { "score": 1, "range": [3, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 8] },
            { "score": 4, "range": [10, 12] },
            { "score": 5, "range": [13, 15] },
            { "score": 6, "range": [16, 17] },
            { "score": 7, "range": [18, 19] },
            { "score": 8, "range": [2, 21] },
            { "score": 9, "range": [22, 26] }
        ]
    },
];
const F1928 = [
    {
        scale: "A",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 6] },
            { "score": 2, "range": [7, 7] },
            { "score": 3, "range": [8, 9] },
            { "score": 4, "range": [10, 12] },
            { "score": 5, "range": [13, 13] },
            { "score": 6, "range": [14, 15] },
            { "score": 7, "range": [16, 16] },
            { "score": 8, "range": [17, 17] },
            { "score": 9, "range": [18, 18] },
            { "score": 10, "range": [19, 20] }
        ],
    }, {
        scale: "B",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 5] },
            { "score": 2, "range": [NaN, NaN] },
            { "score": 3, "range": [6, 6] },
            { "score": 4, "range": [7, 7] },
            { "score": 5, "range": [8, 8] },
            { "score": 6, "range": [9, 9] },
            { "score": 7, "range": [10, 10] },
            { "score": 8, "range": [11, 11] },
            { "score": 9, "range": [12, 13] }
        ],
    }, {
        scale: "C",
        scores: [
            { "score": 0, "range": [0, 6] },
            { "score": 1, "range": [7, 8] },
            { "score": 2, "range": [9, 10] },
            { "score": 3, "range": [11, 12] },
            { "score": 4, "range": [13, 14] },
            { "score": 5, "range": [15, 16] },
            { "score": 6, "range": [17, 18] },
            { "score": 7, "range": [19, 20] },
            { "score": 8, "range": [21, 22] },
            { "score": 9, "range": [23, 26] }
        ],
    }, {
        scale: "E",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 8] },
            { "score": 4, "range": [9, 10] },
            { "score": 5, "range": [11, 12] },
            { "score": 6, "range": [13, 14] },
            { "score": 7, "range": [15, 16] },
            { "score": 8, "range": [17, 18] },
            { "score": 9, "range": [19, 26] }
        ],
    }, {
        scale: "F",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 7] },
            { "score": 2, "range": [8, 10] },
            { "score": 3, "range": [11, 12] },
            { "score": 4, "range": [13, 15] },
            { "score": 5, "range": [16, 17] },
            { "score": 6, "range": [18, 19] },
            { "score": 7, "range": [20, 21] },
            { "score": 8, "range": [22, 22] },
            { "score": 9, "range": [23, 26] }
        ],
    }, {
        scale: "G",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 6] },
            { "score": 2, "range": [7, 8] },
            { "score": 3, "range": [9, 10] },
            { "score": 4, "range": [11, 12] },
            { "score": 5, "range": [13, 13] },
            { "score": 6, "range": [14, 15] },
            { "score": 7, "range": [16, 17] },
            { "score": 8, "range": [18, 18] },
            { "score": 9, "range": [19, 20] }
        ],
    }, {
        scale: "H",
        scores: [
            { "score": 0, "range": [0, 2] },
            { "score": 1, "range": [3, 4] },
            { "score": 2, "range": [5, 7] },
            { "score": 3, "range": [8, 9] },
            { "score": 4, "range": [10, 12] },
            { "score": 5, "range": [13, 15] },
            { "score": 6, "range": [10, 17] },
            { "score": 7, "range": [18, 20] },
            { "score": 8, "range": [21, 22] },
            { "score": 9, "range": [23, 26] }
        ],
    }, {
        scale: "I",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 6] },
            { "score": 2, "range": [7, 8] },
            { "score": 3, "range": [9, 10] },
            { "score": 4, "range": [11, 12] },
            { "score": 5, "range": [13, 13] },
            { "score": 6, "range": [14, 14] },
            { "score": 7, "range": [15, 15] },
            { "score": 8, "range": [16, 17] },
            { "score": 9, "range": [18, 20] }
        ],
    }, {
        scale: "L",
        scores: [
            { "score": 0, "range": [0, 1] },
            { "score": 1, "range": [2, 3] },
            { "score": 2, "range": [4, 4] },
            { "score": 3, "range": [5, 5] },
            { "score": 4, "range": [6, 7] },
            { "score": 5, "range": [8, 9] },
            { "score": 6, "range": [10, 10] },
            { "score": 7, "range": [11, 12] },
            { "score": 8, "range": [13, 14] },
            { "score": 9, "range": [15, 20] }
        ],
    }, {
        scale: "M",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 7] },
            { "score": 2, "range": [8, 8] },
            { "score": 3, "range": [9, 10] },
            { "score": 4, "range": [11, 12] },
            { "score": 5, "range": [13, 14] },
            { "score": 6, "range": [15, 16] },
            { "score": 7, "range": [17, 17] },
            { "score": 8, "range": [18, 19] },
            { "score": 9, "range": [20, 26] }
        ],
    }, {
        scale: "N",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 6] },
            { "score": 2, "range": [7, 7] },
            { "score": 3, "range": [8, 8] },
            { "score": 4, "range": [9, 10] },
            { "score": 5, "range": [11, 11] },
            { "score": 6, "range": [12, 13] },
            { "score": 7, "range": [14, 14] },
            { "score": 8, "range": [15, 16] },
            { "score": 9, "range": [17, 20] }
        ],
    }, {
        scale: "O",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 7] },
            { "score": 4, "range": [8, 9] },
            { "score": 5, "range": [10, 12] },
            { "score": 6, "range": [13, 14] },
            { "score": 7, "range": [15, 16] },
            { "score": 8, "range": [17, 18] },
            { "score": 9, "range": [19, 26] }
        ],
    }, {
        scale: "Q1",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 5] },
            { "score": 3, "range": [6, 7] },
            { "score": 4, "range": [8, 8] },
            { "score": 5, "range": [9, 9] },
            { "score": 6, "range": [10, 11] },
            { "score": 7, "range": [12, 13] },
            { "score": 8, "range": [14, 14] },
            { "score": 9, "range": [15, 20] }
        ],
    }, {
        scale: "Q2",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 7] },
            { "score": 4, "range": [8, 9] },
            { "score": 5, "range": [10, 11] },
            { "score": 6, "range": [12, 13] },
            { "score": 7, "range": [14, 15] },
            { "score": 8, "range": [16, 17] },
            { "score": 9, "range": [18, 20] }
        ],
    }, {
        scale: "Q3",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 5] },
            { "score": 2, "range": [6, 7] },
            { "score": 3, "range": [8, 9] },
            { "score": 4, "range": [10, 10] },
            { "score": 5, "range": [11, 12] },
            { "score": 6, "range": [13, 13] },
            { "score": 7, "range": [14, 14] },
            { "score": 8, "range": [15, 16] },
            { "score": 9, "range": [17, 20] }
        ],
    }, {
        scale: "Q4",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 5] },
            { "score": 2, "range": [6, 7] },
            { "score": 3, "range": [8, 10] },
            { "score": 4, "range": [11, 12] },
            { "score": 5, "range": [13, 15] },
            { "score": 6, "range": [16, 18] },
            { "score": 7, "range": [19, 20] },
            { "score": 8, "range": [21, 22] },
            { "score": 9, "range": [23, 26] }
        ]
    },
];
const M1928 = [
    {
        scale: "A",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 5] },
            { "score": 3, "range": [6, 6] },
            { "score": 4, "range": [7, 7] },
            { "score": 5, "range": [8, 9] },
            { "score": 6, "range": [10, 11] },
            { "score": 7, "range": [12, 13] },
            { "score": 8, "range": [14, 14] },
            { "score": 9, "range": [15, 16] },
            { "score": 10, "range": [17, 20] }
        ],
    }, {
        scale: "B",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 5] },
            { "score": 2, "range": [NaN, NaN] },
            { "score": 3, "range": [6, 6] },
            { "score": 4, "range": [7, 7] },
            { "score": 5, "range": [8, 8] },
            { "score": 6, "range": [9, 9] },
            { "score": 7, "range": [10, 10] },
            { "score": 8, "range": [11, 11] },
            { "score": 9, "range": [12, 13] }
        ],
    }, {
        scale: "C",
        scores: [
            { "score": 0, "range": [0, 7] },
            { "score": 1, "range": [8, 9] },
            { "score": 2, "range": [10, 11] },
            { "score": 3, "range": [12, 12] },
            { "score": 4, "range": [13, 13] },
            { "score": 5, "range": [14, 15] },
            { "score": 6, "range": [16, 17] },
            { "score": 7, "range": [18, 19] },
            { "score": 8, "range": [20, 21] },
            { "score": 9, "range": [22, 22] },
            { "score": 10, "range": [23, 23] },
            { "score": 11, "range": [26, 26] }
        ],
    }, {
        scale: "E",
        scores: [
            { "score": 0, "range": [0, 6] },
            { "score": 1, "range": [7, 8] },
            { "score": 2, "range": [9, 9] },
            { "score": 3, "range": [10, 11] },
            { "score": 4, "range": [12, 13] },
            { "score": 5, "range": [14, 16] },
            { "score": 6, "range": [17, 18] },
            { "score": 7, "range": [19, 19] },
            { "score": 8, "range": [20, 21] },
            { "score": 9, "range": [22, 26] }
        ],
    }, {
        scale: "F",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 8] },
            { "score": 2, "range": [9, 10] },
            { "score": 3, "range": [11, 13] },
            { "score": 4, "range": [14, 15] },
            { "score": 5, "range": [16, 17] },
            { "score": 6, "range": [18, 19] },
            { "score": 7, "range": [20, 21] },
            { "score": 8, "range": [22, 23] },
            { "score": 9, "range": [24, 46] }
        ],
    }, {
        scale: "G",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 8] },
            { "score": 2, "range": [7, 9] },
            { "score": 3, "range": [10, 11] },
            { "score": 4, "range": [12, 12] },
            { "score": 5, "range": [13, 14] },
            { "score": 6, "range": [15, 16] },
            { "score": 7, "range": [17, 17] },
            { "score": 8, "range": [18, 19] },
            { "score": 9, "range": [20, 20] }
        ],
    }, {
        scale: "H",
        scores: [
            { "score": 0, "range": [0, 2] },
            { "score": 1, "range": [3, 4] },
            { "score": 2, "range": [5, 7] },
            { "score": 3, "range": [8, 10] },
            { "score": 4, "range": [11, 18] },
            { "score": 5, "range": [14, 16] },
            { "score": 6, "range": [17, 18] },
            { "score": 7, "range": [19, 20] },
            { "score": 8, "range": [21, 22] },
            { "score": 9, "range": [23, 26] }
        ],
    }, {
        scale: "I",
        scores: [
            { "score": 0, "range": [0, 2] },
            { "score": 1, "range": [3, 3] },
            { "score": 2, "range": [4, 5] },
            { "score": 3, "range": [6, 6] },
            { "score": 4, "range": [7, 8] },
            { "score": 5, "range": [9, 10] },
            { "score": 6, "range": [11, 12] },
            { "score": 7, "range": [13, 14] },
            { "score": 8, "range": [15, 15] },
            { "score": 9, "range": [16, 20] }
        ],
    }, {
        scale: "L",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 7] },
            { "score": 4, "range": [8, 9] },
            { "score": 5, "range": [10, 11] },
            { "score": 6, "range": [12, 12] },
            { "score": 7, "range": [13, 14] },
            { "score": 8, "range": [15, 15] },
            { "score": 9, "range": [16, 20] }
        ],
    }, {
        scale: "M",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 6] },
            { "score": 2, "range": [7, 8] },
            { "score": 3, "range": [9, 9] },
            { "score": 4, "range": [10, 11] },
            { "score": 5, "range": [12, 13] },
            { "score": 6, "range": [14, 15] },
            { "score": 7, "range": [16, 17] },
            { "score": 8, "range": [18, 18] },
            { "score": 9, "range": [19, 20] }
        ],
    }, {
        scale: "N",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 7] },
            { "score": 2, "range": [8, 8] },
            { "score": 3, "range": [9, 9] },
            { "score": 4, "range": [10, 10] },
            { "score": 5, "range": [11, 12] },
            { "score": 6, "range": [13, 13] },
            { "score": 7, "range": [14, 15] },
            { "score": 8, "range": [16, 16] },
            { "score": 9, "range": [17, 20] }
        ],
    }, {
        scale: "O",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 8] },
            { "score": 4, "range": [9, 9] },
            { "score": 5, "range": [10, 11] },
            { "score": 6, "range": [12, 13] },
            { "score": 7, "range": [14, 15] },
            { "score": 8, "range": [16, 17] },
            { "score": 9, "range": [18, 26] }
        ],
    }, {
        scale: "Q1",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 5] },
            { "score": 2, "range": [6, 6] },
            { "score": 3, "range": [7, 8] },
            { "score": 4, "range": [9, 9] },
            { "score": 5, "range": [10, 10] },
            { "score": 6, "range": [11, 12] },
            { "score": 7, "range": [13, 13] },
            { "score": 8, "range": [14, 15] },
            { "score": 9, "range": [16, 20] }
        ],
    }, {
        scale: "Q2",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 7] },
            { "score": 4, "range": [8, 9] },
            { "score": 5, "range": [10, 11] },
            { "score": 6, "range": [12, 13] },
            { "score": 7, "range": [14, 15] },
            { "score": 8, "range": [16, 17] },
            { "score": 9, "range": [18, 20] }
        ],
    }, {
        scale: "Q3",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 5] },
            { "score": 2, "range": [6, 6] },
            { "score": 3, "range": [7, 8] },
            { "score": 4, "range": [9, 10] },
            { "score": 5, "range": [11, 11] },
            { "score": 6, "range": [12, 13] },
            { "score": 7, "range": [14, 14] },
            { "score": 8, "range": [15, 16] },
            { "score": 9, "range": [17, 20] }
        ],
    }, {
        scale: "Q4",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 7] },
            { "score": 3, "range": [8, 9] },
            { "score": 4, "range": [10, 12] },
            { "score": 5, "range": [13, 14] },
            { "score": 6, "range": [15, 17] },
            { "score": 7, "range": [18, 19] },
            { "score": 8, "range": [20, 21] },
            { "score": 9, "range": [22, 26] }
        ]
    },
];
const F2970 = [
    {
        scale: "A",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 6] },
            { "score": 2, "range": [7, 8] },
            { "score": 3, "range": [9, 10] },
            { "score": 4, "range": [11, 11] },
            { "score": 5, "range": [12, 13] },
            { "score": 6, "range": [14, 15] },
            { "score": 7, "range": [16, 16] },
            { "score": 8, "range": [17, 18] },
            { "score": 9, "range": [19, 20] }
        ],
    }, {
        scale: "B",
        scores: [
            { "score": 0, "range": [0, 1] },
            { "score": 1, "range": [2, 2] },
            { "score": 2, "range": [3, 3] },
            { "score": 3, "range": [4, 4] },
            { "score": 4, "range": [5, 5] },
            { "score": 5, "range": [6, 6] },
            { "score": 6, "range": [7, 7] },
            { "score": 7, "range": [8, 9] },
            { "score": 8, "range": [10, 10] },
            { "score": 9, "range": [11, 13] }
        ],
    }, {
        scale: "C",
        scores: [
            { "score": 0, "range": [0, 7] },
            { "score": 1, "range": [8, 9] },
            { "score": 2, "range": [10, 11] },
            { "score": 3, "range": [12, 13] },
            { "score": 4, "range": [14, 15] },
            { "score": 5, "range": [18, 17] },
            { "score": 6, "range": [18, 20] },
            { "score": 7, "range": [21, 22] },
            { "score": 8, "range": [23, 24] },
            { "score": 9, "range": [25, 26] }
        ],
    }, {
        scale: "E",
        scores: [
            { "score": 0, "range": [0, 2] },
            { "score": 1, "range": [3, 3] },
            { "score": 2, "range": [4, 5] },
            { "score": 3, "range": [6, 7] },
            { "score": 4, "range": [8, 9] },
            { "score": 5, "range": [10, 11] },
            { "score": 6, "range": [12, 14] },
            { "score": 7, "range": [15, 18] },
            { "score": 8, "range": [17, 18] },
            { "score": 9, "range": [19, 26] }
        ],
    }, {
        scale: "F",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 6] },
            { "score": 2, "range": [7, 8] },
            { "score": 3, "range": [9, 10] },
            { "score": 4, "range": [11, 13] },
            { "score": 5, "range": [14, 15] },
            { "score": 6, "range": [16, 17] },
            { "score": 7, "range": [18, 19] },
            { "score": 8, "range": [20, 21] },
            { "score": 9, "range": [22, 26] }
        ],
    }, {
        scale: "G",
        scores: [
            { "score": 0, "range": [0, 6] },
            { "score": 1, "range": [7, 7] },
            { "score": 2, "range": [8, 9] },
            { "score": 3, "range": [10, 10] },
            { "score": 4, "range": [11, 11] },
            { "score": 5, "range": [12, 13] },
            { "score": 6, "range": [14, 15] },
            { "score": 7, "range": [16, 16] },
            { "score": 8, "range": [17, 17] },
            { "score": 9, "range": [18, 19] },
            { "score": 10, "range": [20, 20] }
        ],
    }, {
        scale: "H",
        scores: [
            { "score": 0, "range": [0, 2] },
            { "score": 1, "range": [3, 4] },
            { "score": 2, "range": [5, 7] },
            { "score": 3, "range": [8, 9] },
            { "score": 4, "range": [10, 12] },
            { "score": 5, "range": [13, 14] },
            { "score": 6, "range": [15, 17] },
            { "score": 7, "range": [18, 20] },
            { "score": 8, "range": [21, 22] },
            { "score": 9, "range": [23, 26] }
        ],
    }, {
        scale: "I",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 7] },
            { "score": 2, "range": [8, 8] },
            { "score": 3, "range": [9, 10] },
            { "score": 4, "range": [11, 11] },
            { "score": 5, "range": [12, 13] },
            { "score": 6, "range": [14, 14] },
            { "score": 7, "range": [15, 18] },
            { "score": 8, "range": [17, 17] },
            { "score": 9, "range": [18, 20] }
        ],
    }, {
        scale: "L",
        scores: [
            { "score": 0, "range": [0, 1] },
            { "score": 1, "range": [2, 2] },
            { "score": 2, "range": [3, 4] },
            { "score": 3, "range": [5, 5] },
            { "score": 4, "range": [6, 7] },
            { "score": 5, "range": [8, 8] },
            { "score": 6, "range": [9, 10] },
            { "score": 7, "range": [11, 11] },
            { "score": 8, "range": [12, 13] },
            { "score": 9, "range": [14, 20] }
        ],
    }, {
        scale: "M",
        scores: [
            { "score": 0, "range": [0, 6] },
            { "score": 1, "range": [7, 7] },
            { "score": 2, "range": [8, 9] },
            { "score": 3, "range": [10, 11] },
            { "score": 4, "range": [12, 12] },
            { "score": 5, "range": [13, 14] },
            { "score": 6, "range": [15, 16] },
            { "score": 7, "range": [17, 17] },
            { "score": 8, "range": [18, 19] },
            { "score": 9, "range": [20, 26] }
        ],
    }, {
        scale: "N",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 6] },
            { "score": 2, "range": [7, 7] },
            { "score": 3, "range": [8, 9] },
            { "score": 4, "range": [10, 10] },
            { "score": 5, "range": [11, 11] },
            { "score": 6, "range": [12, 13] },
            { "score": 7, "range": [14, 14] },
            { "score": 8, "range": [15, 15] },
            { "score": 9, "range": [16, 20] }
        ],
    }, {
        scale: "O",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 8] },
            { "score": 4, "range": [9, 10] },
            { "score": 5, "range": [11, 12] },
            { "score": 6, "range": [13, 14] },
            { "score": 7, "range": [15, 18] },
            { "score": 8, "range": [17, 18] },
            { "score": 9, "range": [19, 26] }
        ],
    }, {
        scale: "Q1",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 5] },
            { "score": 3, "range": [6, 7] },
            { "score": 4, "range": [8, 8] },
            { "score": 5, "range": [9, 9] },
            { "score": 6, "range": [10, 11] },
            { "score": 7, "range": [12, 13] },
            { "score": 8, "range": [14, 14] },
            { "score": 9, "range": [15, 20] }
        ],
    }, {
        scale: "Q2",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 8] },
            { "score": 4, "range": [9, 9] },
            { "score": 5, "range": [10, 11] },
            { "score": 6, "range": [12, 13] },
            { "score": 7, "range": [14, 15] },
            { "score": 8, "range": [16, 17] },
            { "score": 9, "range": [18, 20] }
        ],
    }, {
        scale: "Q3",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 7] },
            { "score": 2, "range": [8, 8] },
            { "score": 3, "range": [9, 10] },
            { "score": 4, "range": [11, 11] },
            { "score": 5, "range": [12, 13] },
            { "score": 6, "range": [14, 14] },
            { "score": 7, "range": [15, 16] },
            { "score": 8, "range": [17, 17] },
            { "score": 9, "range": [18, 20] }
        ],
    }, {
        scale: "Q4",
        scores: [
            { "score": 0, "range": [0, 2] },
            { "score": 1, "range": [3, 4] },
            { "score": 2, "range": [5, 7] },
            { "score": 3, "range": [8, 10] },
            { "score": 4, "range": [11, 12] },
            { "score": 5, "range": [13, 15] },
            { "score": 6, "range": [18, 17] },
            { "score": 7, "range": [18, 20] },
            { "score": 8, "range": [21, 22] },
            { "score": 9, "range": [23, 26] }
        ]
    },
];
const M2970 = [
    {
        scale: "A",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 7] },
            { "score": 4, "range": [8, 9] },
            { "score": 5, "range": [10, 11] },
            { "score": 6, "range": [12, 13] },
            { "score": 7, "range": [14, 14] },
            { "score": 8, "range": [15, 16] },
            { "score": 9, "range": [17, 20] }
        ],
    }, {
        scale: "B",
        scores: [
            { "score": 0, "range": [0, 1] },
            { "score": 1, "range": [2, 2] },
            { "score": 2, "range": [3, 3] },
            { "score": 3, "range": [4, 4] },
            { "score": 4, "range": [5, 5] },
            { "score": 5, "range": [6, 6] },
            { "score": 6, "range": [7, 7] },
            { "score": 7, "range": [8, 9] },
            { "score": 8, "range": [10, 10] },
            { "score": 9, "range": [11, 13] }
        ],
    }, {
        scale: "C",
        scores: [
            { "score": 0, "range": [0, 7] },
            { "score": 1, "range": [8, 10] },
            { "score": 2, "range": [11, 12] },
            { "score": 3, "range": [13, 14] },
            { "score": 4, "range": [15, 16] },
            { "score": 5, "range": [17, 17] },
            { "score": 6, "range": [18, 19] },
            { "score": 7, "range": [20, 21] },
            { "score": 8, "range": [22, 23] },
            { "score": 9, "range": [24, 26] }
        ],
    }, {
        scale: "E",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 7] },
            { "score": 2, "range": [8, 9] },
            { "score": 3, "range": [10, 11] },
            { "score": 4, "range": [12, 13] },
            { "score": 5, "range": [14, 15] },
            { "score": 6, "range": [16, 17] },
            { "score": 7, "range": [18, 19] },
            { "score": 8, "range": [20, 21] },
            { "score": 9, "range": [22, 26] }
        ],
    }, {
        scale: "F",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 5] },
            { "score": 2, "range": [6, 8] },
            { "score": 3, "range": [9, 10] },
            { "score": 4, "range": [11, 13] },
            { "score": 5, "range": [14, 15] },
            { "score": 6, "range": [16, 17] },
            { "score": 7, "range": [18, 19] },
            { "score": 8, "range": [20, 20] },
            { "score": 9, "range": [21, 26] }
        ],
    }, {
        scale: "G",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 7] },
            { "score": 2, "range": [8, 10] },
            { "score": 3, "range": [11, 12] },
            { "score": 4, "range": [13, 13] },
            { "score": 5, "range": [14, 15] },
            { "score": 6, "range": [16, 17] },
            { "score": 7, "range": [18, 18] },
            { "score": 8, "range": [19, 19] },
            { "score": 9, "range": [20, 20] }
        ],
    }, {
        scale: "H",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 5] },
            { "score": 2, "range": [6, 8] },
            { "score": 3, "range": [9, 11] },
            { "score": 4, "range": [12, 14] },
            { "score": 5, "range": [15, 16] },
            { "score": 6, "range": [17, 19] },
            { "score": 7, "range": [20, 21] },
            { "score": 8, "range": [22, 23] },
            { "score": 9, "range": [24, 26] }
        ],
    }, {
        scale: "I",
        scores: [
            { "score": 0, "range": [0, 2] },
            { "score": 1, "range": [3, 3] },
            { "score": 2, "range": [4, 4] },
            { "score": 3, "range": [5, 6] },
            { "score": 4, "range": [7, 8] },
            { "score": 5, "range": [9, 10] },
            { "score": 6, "range": [11, 12] },
            { "score": 7, "range": [13, 14] },
            { "score": 8, "range": [15, 15] },
            { "score": 9, "range": [16, 20] }
        ],
    }, {
        scale: "L",
        scores: [
            { "score": 0, "range": [0, 2] },
            { "score": 1, "range": [3, 3] },
            { "score": 2, "range": [4, 5] },
            { "score": 3, "range": [6, 7] },
            { "score": 4, "range": [8, 8] },
            { "score": 5, "range": [9, 10] },
            { "score": 6, "range": [11, 12] },
            { "score": 7, "range": [13, 13] },
            { "score": 8, "range": [14, 15] },
            { "score": 9, "range": [16, 20] }
        ],
    }, {
        scale: "M",
        scores: [
            { "score": 0, "range": [0, 5] },
            { "score": 1, "range": [6, 7] },
            { "score": 2, "range": [8, 8] },
            { "score": 3, "range": [9, 10] },
            { "score": 4, "range": [11, 11] },
            { "score": 5, "range": [12, 13] },
            { "score": 6, "range": [14, 15] },
            { "score": 7, "range": [16, 17] },
            { "score": 8, "range": [18, 19] },
            { "score": 9, "range": [20, 26] }
        ],
    }, {
        scale: "N",
        scores: [
            { "score": 0, "range": [0, 6] },
            { "score": 1, "range": [7, 7] },
            { "score": 2, "range": [8, 9] },
            { "score": 3, "range": [10, 10] },
            { "score": 4, "range": [11, 11] },
            { "score": 5, "range": [12, 13] },
            { "score": 6, "range": [14, 14] },
            { "score": 7, "range": [15, 15] },
            { "score": 8, "range": [16, 17] },
            { "score": 9, "range": [18, 20] }
        ],
    }, {
        scale: "O",
        scores: [
            { "score": 0, "range": [0, 2] },
            { "score": 1, "range": [3, 3] },
            { "score": 2, "range": [4, 5] },
            { "score": 3, "range": [6, 7] },
            { "score": 4, "range": [8, 9] },
            { "score": 5, "range": [10, 11] },
            { "score": 6, "range": [12, 12] },
            { "score": 7, "range": [13, 15] },
            { "score": 8, "range": [16, 17] },
            { "score": 9, "range": [18, 26] }
        ],
    }, {
        scale: "Q1",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 6] },
            { "score": 2, "range": [7, 7] },
            { "score": 3, "range": [8, 8] },
            { "score": 4, "range": [9, 10] },
            { "score": 5, "range": [11, 11] },
            { "score": 6, "range": [12, 13] },
            { "score": 7, "range": [14, 14] },
            { "score": 8, "range": [15, 16] },
            { "score": 9, "range": [17, 20] }
        ],
    }, {
        scale: "Q2",
        scores: [
            { "score": 0, "range": [0, 3] },
            { "score": 1, "range": [4, 4] },
            { "score": 2, "range": [5, 6] },
            { "score": 3, "range": [7, 8] },
            { "score": 4, "range": [9, 10] },
            { "score": 5, "range": [11, 11] },
            { "score": 6, "range": [12, 13] },
            { "score": 7, "range": [14, 15] },
            { "score": 8, "range": [16, 17] },
            { "score": 9, "range": [18, 20] }
        ],
    }, {
        scale: "Q3",
        scores: [
            { "score": 0, "range": [0, 4] },
            { "score": 1, "range": [5, 6] },
            { "score": 2, "range": [7, 8] },
            { "score": 3, "range": [9, 9] },
            { "score": 4, "range": [10, 11] },
            { "score": 5, "range": [12, 12] },
            { "score": 6, "range": [13, 14] },
            { "score": 7, "range": [15, 15] },
            { "score": 8, "range": [16, 17] },
            { "score": 9, "range": [18, 20] }
        ],
    }, {
        scale: "Q4",
        scores: [
            { "score": 0, "range": [0, 0] },
            { "score": 1, "range": [1, 2] },
            { "score": 2, "range": [3, 5] },
            { "score": 3, "range": [6, 7] },
            { "score": 4, "range": [8, 10] },
            { "score": 5, "range": [11, 12] },
            { "score": 6, "range": [13, 15] },
            { "score": 7, "range": [16, 17] },
            { "score": 8, "range": [18, 19] },
            { "score": 9, "range": [20, 26] }
        ]
    }
];
const stenMetadata = {
    F1618,
    M1618,
    F1928,
    M1928,
    F2970,
    M2970,
};

const GENDER_QUESTION_INDEX = 187;
const AGE_QUESTION_INDEX = 188;
const TOTAL_QUESTIONS = 189;
const invalidScales = Object.freeze(createBlankScales$2(NaN));
const isAnswerValid = (answer) => answer === 'A' || answer === 'B' || answer === 'C';
const isGenderValid = (gender) => gender === 'M' || gender === 'F';
const isAgeValid = (age) => (16 <= age) && (age <= 70);
const validate$2 = buildAnswersValidator(TOTAL_QUESTIONS, function cattellAnswerValidator(answer, index) {
    switch (index) {
        case GENDER_QUESTION_INDEX:
            return isGenderValid(answer);
        case AGE_QUESTION_INDEX:
            return isAgeValid(answer);
        default:
            return isAnswerValid(answer);
    }
}, invalidScales);
function calculateRaw(answers) {
    const scales = createBlankScales$2(0);
    for (let index = 0; index < cattelRawMetadata.length; index++) {
        const { scale, scores } = cattelRawMetadata[index];
        if (scale === '') {
            continue;
        }
        scales[scale] += scores[answers[index]];
    }
    return scales;
}
function calculateNormalized(answers, raw) {
    const gender = answers[GENDER_QUESTION_INDEX];
    const age = answers[AGE_QUESTION_INDEX];
    const stenTableId = getSTenScoreTableId(gender, age);
    const stenTable = stenMetadata[stenTableId];
    const scales = createBlankScales$2(NaN);
    stenTable.forEach(({ scale, scores }) => {
        const value = raw[scale];
        scales[scale] = scores.find(({ range: [min, max] }) => {
            return (min <= value) && (value <= max);
        }).score;
    });
    return scales;
}
function getSTenScoreTableId(gender, age) {
    const suffix = (age <= 18) ? '1618' : (age <= 28) ? '1928' : '2970';
    return gender + suffix;
}
function calculate$2(answers) {
    const raw = calculateRaw(answers);
    const normalized = calculateNormalized(answers, raw);
    return Object.assign({}, normalized, { raw });
}
function cattell(answers) {
    return validate$2(answers) || calculate$2(answers);
}

const createBlankScales$3 = function (v) {
    return {
        МП: v,
        МУ: v,
        ВП: v,
        ВУ: v,
        ВЭ: v,
        МЭИ: v,
        ВЭИ: v,
        ПЭ: v,
        УЭ: v,
        ОУ: v,
    };
};

const rootReducer = combineReducers([
    { id: "МП", plus: [1, 3, 11, 13, 20, 27, 29, 32, 34], minus: [38, 42, 46] },
    { id: "МУ", plus: [9, 15, 17, 24, 36], minus: [2, 5, 30, 40, 44] },
    { id: "ВП", plus: [7, 14, 26], minus: [8, 18, 22, 31, 35, 41, 45] },
    { id: "ВУ", plus: [4, 25, 28, 37], minus: [12, 33, 43] },
    { id: "ВЭ", plus: [19, 21, 23], minus: [6, 10, 16, 39] },
].map((scaleMeta) => {
    let { id, plus, minus } = scaleMeta;
    let setP = new Set(plus);
    let setM = new Set(minus);
    return function scaleReducer(scales, value, index) {
        if (!scales.hasOwnProperty(id)) {
            scales[id] = 0;
        }
        if (setP.has(index)) {
            scales[id] += value;
        }
        if (setM.has(index)) {
            scales[id] += 3 - value;
        }
        return scales;
    };
}));
const computeScales = (function (computedScales) {
    return function compute(scales) {
        return computedScales.reduce(function (acc, scale) {
            scales[scale.id] = scale.sum.reduce(function (sum, scaleId) {
                return sum + scales[scaleId];
            }, 0);
            return scales;
        }, scales);
    };
}([
    { id: "МЭИ", sum: ["МП", "МУ"] },
    { id: "ВЭИ", sum: ["ВП", "ВУ", "ВЭ"] },
    { id: "ПЭ", sum: ["МП", "ВП"] },
    { id: "УЭ", sum: ["МУ", "ВУ", "ВЭ"] },
    { id: "ОУ", sum: ["МП", "МУ", "ВП", "ВУ", "ВЭ"] },
]));
const validate$3 = buildAnswersValidator(46, [0, 1, 2, 3], createBlankScales$3(NaN));
function calculate$3(answers) {
    return computeScales(answers.reduce(rootReducer, createBlankScales$3(0)));
}
function emin(answers) {
    return validate$3(answers) || calculate$3(answers);
}

const createBlankScales$4 = function (v) {
    return {
        "I": v,
        "I.1": v,
        "I.2": v,
        "I.3": v,
        "I.4": v,
        "I.5": v,
        "II": v,
        "II.1": v,
        "II.2": v,
        "II.3": v,
        "II.4": v,
        "II.5": v,
        "III": v,
        "III.1": v,
        "III.2": v,
        "III.3": v,
        "III.4": v,
        "III.5": v,
        "IV": v,
        "IV.1": v,
        "IV.2": v,
        "IV.3": v,
        "IV.4": v,
        "IV.5": v,
        "V": v,
        "V.1": v,
        "V.2": v,
        "V.3": v,
        "V.4": v,
        "V.5": v,
    };
};

const SECONDARY_SCALES = ["I", "II", "III", "IV", "V"];
function rootReducer$1(scales, answer, index) {
    let III = SECONDARY_SCALES[index % 5];
    let _3 = Math.floor(index / 15) + 1;
    let III_3 = `${III}.${_3}`;
    let incrementValue = 3 - answer;
    scales[III] += incrementValue;
    scales[III_3] += incrementValue;
    return scales;
}
const validator = buildAnswersValidator(75, [-2, -1, 0, 1, 2], createBlankScales$4(NaN));
function calculate$4(answers) {
    return answers.reduce(rootReducer$1, createBlankScales$4(0));
}
function factor5(answers) {
    return validator(answers) || calculate$4(answers);
}

const createBlankScales$5 = (v) => ({
    "L": v,
    "F": v,
    "K": v,
    "1": v,
    "2": v,
    "3": v,
    "4": v,
    "6": v,
    "7": v,
    "8": v,
    "9": v,
    "TL": v,
    "TF": v,
    "TK": v,
    "T1": v,
    "T2": v,
    "T3": v,
    "T4": v,
    "T6": v,
    "T7": v,
    "T8": v,
    "T9": v,
});

const rootReducer$2 = (function () {
    let meta = [
        {
            scaleId: "тревоги",
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
        },
        {
            scaleId: "невротической депрессии",
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
        },
        {
            scaleId: "астении",
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
        },
        {
            scaleId: "истерического типа реагирования",
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
        },
        {
            scaleId: "обсессивно-фобических нарушений",
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
        },
        {
            scaleId: "вегетативных нарушений",
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
        },
    ];
    return (scales, answer, index) => {
        meta.forEach(({ scaleId, questions }) => {
            let scores = questions[index + 1];
            scales[scaleId] += scores ? scores[answer - 1] : 0;
        });
        return scales;
    };
}());
const calculate$5 = (answers) => answers.reduce(rootReducer$2, createBlankScales$5(0));
const validate$4 = buildAnswersValidator(71, [1, 2, 3, 4, 5], createBlankScales$5(NaN));
function mendel(answers) {
    return validate$4(answers) || calculate$5(answers);
}

const rootReducer$3 = combineReducers([
    { scaleId: "1", answer: "-", indices: [1, 2, 6, 37, 45] },
    { scaleId: "1", answer: "+", indices: [9, 18, 26, 32, 44, 46, 55, 62, 63] },
    { scaleId: "2", answer: "-", indices: [1, 3, 6, 11, 28, 37, 40, 42, 60, 61, 65] },
    { scaleId: "2", answer: "+", indices: [4, 9, 17, 18, 22, 25, 36, 44] },
    { scaleId: "3", answer: "-", indices: [11, 23, 28, 29, 37, 40, 41, 43, 45, 50, 56] },
    { scaleId: "3", answer: "+", indices: [1, 2, 3, 9, 18, 26, 31, 33, 35, 44, 46, 55, 57, 62] },
    { scaleId: "4", answer: "-", indices: [3, 28, 34, 35, 41, 43, 50, 65] },
    { scaleId: "4", answer: "+", indices: [7, 10, 13, 14, 15, 16, 22, 27, 52, 58, 71] },
    { scaleId: "6", answer: "-", indices: [28, 29, 31, 67] },
    { scaleId: "6", answer: "+", indices: [5, 8, 10, 15, 30, 39, 63, 64, 66, 68] },
    { scaleId: "7", answer: "-", indices: [2, 3, 42] },
    { scaleId: "7", answer: "+", indices: [5, 8, 13, 17, 22, 25, 27, 36, 44, 51, 57, 66, 68] },
    { scaleId: "8", answer: "-", indices: [3, 42] },
    { scaleId: "8", answer: "+", indices: [5, 7, 8, 10, 13, 14, 15, 16, 17, 26, 38, 39, 46, 57, 63, 64, 66] },
    { scaleId: "9", answer: "-", indices: [43] },
    { scaleId: "9", answer: "+", indices: [4, 7, 8, 21, 29, 34, 38, 39, 54, 57, 60] },
    { scaleId: "F", answer: "-", indices: [22, 24, 61] },
    { scaleId: "F", answer: "+", indices: [9, 12, 15, 19, 30, 48, 49, 58, 59] },
    { scaleId: "K", answer: "-", indices: [11, 23, 31, 33, 34, 40, 41, 43, 56, 61, 65, 67, 69, 70] },
    { scaleId: "K", answer: "+", indices: [] },
    { scaleId: "L", answer: "-", indices: [5, 11, 24, 47, 53] },
    { scaleId: "L", answer: "+", indices: [] },
].filter(({ indices }) => indices.length > 0)
    .map(({ scaleId, answer, indices }) => (scales, userAnswer, index) => {
    if (~indices.indexOf(index)) {
        scales[scaleId] += Number(answer === userAnswer);
    }
    return scales;
}));
const normalize = (function () {
    const k0_16 = (k) => Math.max(0, Math.min(k, 16));
    const getCorrectionMatrix = (k) => (k === 0) ? [0, 0, 0, 0, 0] :
        (k === 1) ? [1, 1, 0, 1, 1] :
            (k === 2) ? [1, 1, 0, 2, 2] :
                (k === 3) ? [2, 2, 1, 3, 3] :
                    (k === 4) ? [2, 2, 1, 4, 4] :
                        (k === 5) ? [2, 2, 1, 5, 5] :
                            (k === 6) ? [3, 2, 1, 6, 6] :
                                (k === 7) ? [4, 3, 2, 7, 7] :
                                    (k === 8) ? [4, 3, 2, 8, 8] :
                                        (k === 9) ? [5, 4, 2, 9, 9] :
                                            (k === 10) ? [5, 4, 2, 10, 10] :
                                                (k === 11) ? [6, 4, 2, 11, 11] :
                                                    (k === 12) ? [6, 5, 2, 12, 12] :
                                                        (k === 13) ? [7, 6, 3, 13, 13] :
                                                            (k === 14) ? [7, 6, 3, 14, 14] :
                                                                (k === 15) ? [8, 6, 3, 15, 15] :
                                                                    (k === 16) ? [8, 6, 3, 16, 16] :
                                                                        [NaN, NaN, NaN, NaN, NaN];
    const addCorrections = (scales, corrections) => {
        scales[1] += corrections[0];
        scales[4] += corrections[1];
        scales[9] += corrections[2];
        scales[7] += corrections[3];
        scales[8] += corrections[4];
        return scales;
    };
    const T = {
        1: [26, 30, 34, 35, 38, 42, 45, 48, 52, 55, 58, 62, 65, 68, 72, 75, 78, 82, 86, 88, 94, 96, 98, 104, 106],
        2: [26, 28, 34, 36, 38, 42, 45, 48, 52, 55, 58, 62, 68, 72, 78, 82, 86, 88, 94, 96, 98],
        3: [0, 0, 22, 25, 28, 34, 36, 38, 42, 45, 52, 55, 58, 62, 65, 72, 75, 78, 82, 86, 88, 94, 96, 98, 104, 106, 110],
        4: [0, 0, 0, 0, 22, 25, 30, 36, 38, 45, 48, 55, 58, 65, 72, 75, 78, 74, 76, 94, 98, 104, 108, 110],
        6: [28, 34, 38, 45, 48, 55, 62, 65, 72, 78, 86, 94, 96, 104, 108],
        7: [0, 0, 0, 0, 0, 0, 22, 25, 28, 34, 36, 38, 42, 45, 48, 55, 58, 62, 65, 72, 75, 82, 86, 94, 95, 98, 104, 108],
        8: [0, 0, 0, 0, 0, 22, 25, 28, 34, 36, 38, 42, 45, 48, 52, 55, 58, 62, 68, 72, 75, 78, 82, 86, 88, 94, 96, 98, 104, 108, 110],
        9: [0, 22, 25, 28, 36, 42, 45, 52, 58, 66, 68, 75, 82, 86, 88, 96, 98, 110],
        L: [35, 45, 55, 65, 72, 78],
        F: [34, 38, 45, 48, 55, 58, 65, 72, 75, 78, 86, 88, 96],
        K: [24, 26, 30, 34, 35, 38, 42, 45, 48, 52, 55, 58, 62, 65, 68, 72],
    };
    const calcT = (scales) => {
        scales.T1 = T[1][scales[1]] || NaN;
        scales.T2 = T[2][scales[2]] || NaN;
        scales.T3 = T[3][scales[3]] || NaN;
        scales.T4 = T[4][scales[4]] || NaN;
        scales.T6 = T[6][scales[6]] || NaN;
        scales.T7 = T[7][scales[7]] || NaN;
        scales.T8 = T[8][scales[8]] || NaN;
        scales.T9 = T[9][scales[9]] || NaN;
        scales.TL = T.L[scales.L] || NaN;
        scales.TF = T.F[scales.F] || NaN;
        scales.TK = T.K[scales.K] || NaN;
        return scales;
    };
    return (scales) => calcT(addCorrections(scales, getCorrectionMatrix(k0_16(scales.K))));
}());
const calculate$6 = (answers) => normalize(answers.reduce(rootReducer$3, createBlankScales$5(0)));
const validate$5 = buildAnswersValidator(71, ["+", "-"], createBlankScales$5(NaN));
function mmpi(answers) {
    return validate$5(answers) || calculate$6(answers);
}

const createBlankScales$6 = function (v) {
    return {
        "1a": v,
        "1b": v,
        "2a": v,
        "2b": v,
        "3a": v,
        "3b": v,
        "4a": v,
        "4b": v,
        "5a": v,
        "5b": v,
        "6a": v,
        "6b": v,
        "7a": v,
        "7b": v,
        "8": v,
        "A": v,
        "S": v,
        "L": v,
        "E": v,
        "I": v,
        "D": v,
    };
};

const rootReducer$4 = combineReducers([
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
    return function scaleReducer(scales, answer, index) {
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
const validate$6 = buildAnswersValidator(101, [0, 2, 3, 4, 5, 6], createBlankScales$6(NaN));
function calculate$7(answers) {
    return scaleMapper(answers.reduce(rootReducer$4, {}));
}
function spa(answers) {
    return validate$6(answers) || calculate$7(answers);
}

const createBlankScales$7 = function (v) {
    return {
        "Ио": v,
        "Ид": v,
        "Ин": v,
        "Ис": v,
        "Ип": v,
        "Им": v,
        "Из": v,
    };
};

const rootReducer$5 = combineReducers([
    { scaleId: "Ио", sign: 1, indices: [2, 4, 11, 12, 13, 15, 16, 17, 19, 20, 22, 25, 27, 29, 31, 32, 34, 36, 37, 39, 42, 44] },
    { scaleId: "Ио", sign: -1, indices: [1, 3, 5, 6, 7, 8, 9, 10, 14, 18, 21, 23, 24, 26, 28, 30, 33, 35, 38, 40, 41, 43] },
    { scaleId: "Ид", sign: 1, indices: [12, 15, 27, 32, 36, 37] },
    { scaleId: "Ид", sign: -1, indices: [1, 5, 6, 14, 26, 43] },
    { scaleId: "Ин", sign: 1, indices: [2, 4, 20, 31, 42, 44] },
    { scaleId: "Ин", sign: -1, indices: [7, 24, 33, 38, 40, 41] },
    { scaleId: "Ис", sign: 1, indices: [2, 16, 20, 32, 37] },
    { scaleId: "Ис", sign: -1, indices: [7, 14, 26, 28, 41] },
    { scaleId: "Ип", sign: 1, indices: [19, 22, 25, 42, 36, 37] },
    { scaleId: "Ип", sign: -1, indices: [1, 9, 10, 30, 26, 43] },
    { scaleId: "Им", sign: 1, indices: [4, 27] },
    { scaleId: "Им", sign: -1, indices: [6, 38] },
    { scaleId: "Из", sign: 1, indices: [13, 34] },
    { scaleId: "Из", sign: -1, indices: [3, 23] },
].map(({ scaleId, sign, indices }) => (scales, answer, index) => {
    if (~indices.indexOf(index)) {
        scales[scaleId] += sign * answer;
    }
    return scales;
}));
const normalize$1 = (function () {
    const findIndexOfGreater = (arr) => (val) => {
        return arr.reduce((i, v) => i + (val >= v), 0);
    };
    const meta = [
        { scaleId: "Ио", normalize: findIndexOfGreater([-132, -13, -2, 10, 22, 33, 45, 57, 69, 80, 133]) },
        { scaleId: "Ид", normalize: findIndexOfGreater([-36, -10, -6, -2, 2, 6, 10, 15, 19, 23, 37]) },
        { scaleId: "Ин", normalize: findIndexOfGreater([-36, -7, -3, 1, 5, 8, 12, 16, 20, 24, 37]) },
        { scaleId: "Ис", normalize: findIndexOfGreater([-30, -11, -7, -4, 0, 4, 7, 11, 14, 18, 31]) },
        { scaleId: "Ип", normalize: findIndexOfGreater([-30, -4, 0, 4, 8, 12, 16, 20, 24, 28, 31]) },
        { scaleId: "Им", normalize: findIndexOfGreater([-12, -6, -4, -2, 0, 2, 5, 7, 9, 11, 13]) },
        { scaleId: "Из", normalize: findIndexOfGreater([-12, -3, -1, 1, 3, 4, 5, 7, 9, 11, 13]) },
    ];
    return function (scales) {
        return meta.reduce((normalizedScales, { scaleId, normalize }) => {
            normalizedScales[scaleId] = normalize(scales[scaleId]);
            return normalizedScales;
        }, createBlankScales$7(0));
    };
}());
const calculate$8 = (answers) => answers.reduce(rootReducer$5, createBlankScales$7(0));
const validate$7 = buildAnswersValidator(44, [-3, -2, -1, 1, 2, 3], createBlankScales$7(NaN));
function usk(answers) {
    return validate$7(answers) || normalize$1(calculate$8(answers));
}

var index = {
    alexithymia,
    amon,
    cattell,
    emin,
    factor5,
    mendel,
    mmpi,
    spa,
    usk,
};

module.exports = index;
