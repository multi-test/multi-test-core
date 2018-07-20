import {ICattellScales} from "./scales";

type StenScaleMetadata = {
    scale: keyof ICattellScales;
    scores: {
        score: number;
        range: [number, number];
    }[];
};

const F1618: StenScaleMetadata[] = [
    {
        scale: "A",
        scores: [
            {"score": 0, "range": [0, 6]},
            {"score": 1, "range": [7, 8]},
            {"score": 2, "range": [7, 8]},
            {"score": 3, "range": [9, 10]},
            {"score": 4, "range": [11, 11]},
            {"score": 5, "range": [12, 13]},
            {"score": 6, "range": [14, 15]},
            {"score": 7, "range": [16, 16]},
            {"score": 8, "range": [17, 18]},
            {"score": 9, "range": [19, 20]}
        ],
    }, {
        scale: "B",
        scores: [
            {"score": 0, "range": [0, 1]},
            {"score": 1, "range": [2, 2]},
            {"score": 2, "range": [3, 3]},
            {"score": 3, "range": [4, 4]},
            {"score": 4, "range": [5, 5]},
            {"score": 5, "range": [6, 6]},
            {"score": 6, "range": [7, 7]},
            {"score": 7, "range": [8, 9]},
            {"score": 8, "range": [10, 10]},
            {"score": 9, "range": [11, 12]}
        ],
    }, {
        scale: "C",
        scores: [
            {"score": 0, "range": [0, 6]},
            {"score": 1, "range": [7, 8]},
            {"score": 2, "range": [9, 10]},
            {"score": 3, "range": [11, 12]},
            {"score": 4, "range": [13, 14]},
            {"score": 5, "range": [15, 16]},
            {"score": 6, "range": [17, 18]},
            {"score": 7, "range": [19, 20]},
            {"score": 8, "range": [21, 21]},
            {"score": 9, "range": [22, 26]}
        ],
    }, {
        scale: "E",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 8]},
            {"score": 4, "range": [9, 10]},
            {"score": 5, "range": [11, 12]},
            {"score": 6, "range": [13, 15]},
            {"score": 7, "range": [16, 17]},
            {"score": 8, "range": [18, 19]},
            {"score": 9, "range": [20, 26]}
        ],
    }, {
        scale: "F",
        scores: [
            {"score": 0, "range": [0, 6]},
            {"score": 1, "range": [7, 8]},
            {"score": 2, "range": [9, 11]},
            {"score": 3, "range": [12, 14]},
            {"score": 4, "range": [15, 16]},
            {"score": 5, "range": [17, 18]},
            {"score": 6, "range": [19, 20]},
            {"score": 7, "range": [21, 22]},
            {"score": 8, "range": [23, 23]},
            {"score": 9, "range": [24, 26]}
        ],
    }, {
        scale: "G",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 7]},
            {"score": 2, "range": [8, 9]},
            {"score": 3, "range": [10, 11]},
            {"score": 4, "range": [12, 13]},
            {"score": 5, "range": [14, 14]},
            {"score": 6, "range": [15, 16]},
            {"score": 7, "range": [17, 17]},
            {"score": 8, "range": [18, 18]},
            {"score": 9, "range": [19, 20]}
        ],
    }, {
        scale: "H",
        scores: [
            {"score": 0, "range": [0, 2]},
            {"score": 1, "range": [3, 4]},
            {"score": 2, "range": [5, 7]},
            {"score": 3, "range": [8, 9]},
            {"score": 4, "range": [10, 12]},
            {"score": 5, "range": [13, 14]},
            {"score": 6, "range": [15, 17]},
            {"score": 7, "range": [18, 20]},
            {"score": 8, "range": [21, 22]},
            {"score": 9, "range": [23, 26]}
        ],
    }, {
        scale: "I",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 7]},
            {"score": 2, "range": [8, 8]},
            {"score": 3, "range": [9, 10]},
            {"score": 4, "range": [11, 11]},
            {"score": 5, "range": [12, 13]},
            {"score": 6, "range": [14, 14]},
            {"score": 7, "range": [15, 15]},
            {"score": 8, "range": [16, 17]},
            {"score": 9, "range": [18, 20]}
        ],
    }, {
        scale: "L",
        scores: [
            {"score": 0, "range": [0, 2]},
            {"score": 1, "range": [3, 3]},
            {"score": 2, "range": [4, 5]},
            {"score": 3, "range": [6, 6]},
            {"score": 4, "range": [7, 8]},
            {"score": 5, "range": [9, 9]},
            {"score": 6, "range": [10, 11]},
            {"score": 7, "range": [12, 13]},
            {"score": 8, "range": [14, 14]},
            {"score": 9, "range": [15, 16]}
        ],
    }, {
        scale: "M",
        scores: [
            {"score": 0, "range": [0, 6]},
            {"score": 1, "range": [7, 7]},
            {"score": 2, "range": [8, 9]},
            {"score": 3, "range": [10, 10]},
            {"score": 4, "range": [11, 12]},
            {"score": 5, "range": [13, 14]},
            {"score": 6, "range": [15, 16]},
            {"score": 7, "range": [17, 17]},
            {"score": 8, "range": [18, 19]},
            {"score": 9, "range": [20, 28]}
        ],
    }, {
        scale: "N",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 6]},
            {"score": 2, "range": [7, 7]},
            {"score": 3, "range": [8, 8]},
            {"score": 4, "range": [9, 10]},
            {"score": 5, "range": [11, 11]},
            {"score": 6, "range": [12, 13]},
            {"score": 7, "range": [14, 14]},
            {"score": 8, "range": [15, 15]},
            {"score": 9, "range": [16, 20]}
        ],
    }, {
        scale: "O",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 5]},
            {"score": 2, "range": [6, 7]},
            {"score": 3, "range": [8, 9]},
            {"score": 4, "range": [10, 11]},
            {"score": 5, "range": [12, 13]},
            {"score": 6, "range": [14, 15]},
            {"score": 7, "range": [16, 17]},
            {"score": 8, "range": [18, 19]},
            {"score": 9, "range": [20, 26]}
        ],
    }, {
        scale: "Q1",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 5]},
            {"score": 3, "range": [6, 6]},
            {"score": 4, "range": [7, 8]},
            {"score": 5, "range": [9, 9]},
            {"score": 6, "range": [10, 11]},
            {"score": 7, "range": [12, 12]},
            {"score": 8, "range": [13, 14]},
            {"score": 9, "range": [15, 20]}
        ],
    }, {
        scale: "Q2",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 7]},
            {"score": 4, "range": [8, 9]},
            {"score": 5, "range": [10, 11]},
            {"score": 6, "range": [12, 13]},
            {"score": 7, "range": [14, 15]},
            {"score": 8, "range": [16, 17]},
            {"score": 9, "range": [18, 20]}
        ],
    }, {
        scale: "Q3",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 6]},
            {"score": 2, "range": [7, 7]},
            {"score": 3, "range": [8, 9]},
            {"score": 4, "range": [10, 10]},
            {"score": 5, "range": [11, 12]},
            {"score": 6, "range": [13, 13]},
            {"score": 7, "range": [14, 14]},
            {"score": 8, "range": [15, 16]},
            {"score": 9, "range": [17, 20]}
        ],
    }, {
        scale: "Q4",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 5]},
            {"score": 2, "range": [6, 8]},
            {"score": 3, "range": [9, 11]},
            {"score": 4, "range": [12, 13]},
            {"score": 5, "range": [14, 16]},
            {"score": 6, "range": [17, 19]},
            {"score": 7, "range": [20, 21]},
            {"score": 8, "range": [22, 23]},
            {"score": 9, "range": [24, 26]}
        ]
    },
];

const M1618: StenScaleMetadata[] = [
    {
        scale: "A",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 7]},
            {"score": 4, "range": [8, 9]},
            {"score": 5, "range": [10, 11]},
            {"score": 6, "range": [12, 12]},
            {"score": 7, "range": [13, 14]},
            {"score": 8, "range": [15, 16]},
            {"score": 9, "range": [17, 20]}
        ],
    }, {
        scale: "B",
        scores: [
            {"score": 0, "range": [0, 1]},
            {"score": 1, "range": [2, 2]},
            {"score": 2, "range": [3, 3]},
            {"score": 3, "range": [4, 4]},
            {"score": 4, "range": [5, 5]},
            {"score": 5, "range": [6, 6]},
            {"score": 6, "range": [7, 7]},
            {"score": 7, "range": [8, 9]},
            {"score": 8, "range": [10, 10]},
            {"score": 9, "range": [11, 12]}
        ],
    }, {
        scale: "C",
        scores: [
            {"score": 0, "range": [0, 7]},
            {"score": 1, "range": [8, 9]},
            {"score": 2, "range": [10, 11]},
            {"score": 3, "range": [12, 13]},
            {"score": 4, "range": [14, 15]},
            {"score": 5, "range": [16, 17]},
            {"score": 6, "range": [18, 19]},
            {"score": 7, "range": [20, 20]},
            {"score": 8, "range": [21, 22]},
            {"score": 9, "range": [23, 26]}
        ],
    }, {
        scale: "E",
        scores: [
            {"score": 0, "range": [0, 6]},
            {"score": 1, "range": [7, 8]},
            {"score": 2, "range": [9, 9]},
            {"score": 3, "range": [10, 11]},
            {"score": 4, "range": [12, 13]},
            {"score": 5, "range": [14, 15]},
            {"score": 6, "range": [16, 17]},
            {"score": 7, "range": [18, 19]},
            {"score": 8, "range": [20, 21]},
            {"score": 9, "range": [22, 26]}
        ],
    }, {
        scale: "F",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 8]},
            {"score": 2, "range": [9, 11]},
            {"score": 3, "range": [12, 14]},
            {"score": 4, "range": [15, 16]},
            {"score": 5, "range": [17, 18]},
            {"score": 6, "range": [19, 20]},
            {"score": 7, "range": [21, 22]},
            {"score": 8, "range": [23, 23]},
            {"score": 9, "range": [24, 26]}
        ],
    }, {
        scale: "G",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 6]},
            {"score": 2, "range": [7, 8]},
            {"score": 3, "range": [9, 10]},
            {"score": 4, "range": [11, 12]},
            {"score": 5, "range": [13, 14]},
            {"score": 6, "range": [15, 16]},
            {"score": 7, "range": [17, 17]},
            {"score": 8, "range": [18, 18]},
            {"score": 9, "range": [19, 20]}
        ],
    }, {
        scale: "H",
        scores: [
            {"score": 0, "range": [0, 2]},
            {"score": 1, "range": [3, 4]},
            {"score": 2, "range": [5, 7]},
            {"score": 3, "range": [8, 10]},
            {"score": 4, "range": [11, 13]},
            {"score": 5, "range": [14, 16]},
            {"score": 6, "range": [17, 18]},
            {"score": 7, "range": [19, 20]},
            {"score": 8, "range": [21, 22]},
            {"score": 9, "range": [23, 26]}
        ],
    }, {
        scale: "I",
        scores: [
            {"score": 0, "range": [0, 2]},
            {"score": 1, "range": [3, 3]},
            {"score": 2, "range": [4, 4]},
            {"score": 3, "range": [5, 6]},
            {"score": 4, "range": [7, 8]},
            {"score": 5, "range": [9, 9]},
            {"score": 6, "range": [10, 11]},
            {"score": 7, "range": [12, 13]},
            {"score": 8, "range": [14, 15]},
            {"score": 9, "range": [16, 20]}
        ],
    }, {
        scale: "L",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 8]},
            {"score": 4, "range": [9, 9]},
            {"score": 5, "range": [10, 11]},
            {"score": 6, "range": [12, 13]},
            {"score": 7, "range": [14, 14]},
            {"score": 8, "range": [15, 16]},
            {"score": 9, "range": [17, 20]}
        ],
    }, {
        scale: "M",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 6]},
            {"score": 2, "range": [7, 7]},
            {"score": 3, "range": [8, 9]},
            {"score": 4, "range": [10, 11]},
            {"score": 5, "range": [12, 13]},
            {"score": 6, "range": [14, 14]},
            {"score": 7, "range": [15, 16]},
            {"score": 8, "range": [17, 18]},
            {"score": 9, "range": [19, 26]}
        ],
    }, {
        scale: "N",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 7]},
            {"score": 2, "range": [8, 8]},
            {"score": 3, "range": [9, 9]},
            {"score": 4, "range": [10, 10]},
            {"score": 5, "range": [11, 12]},
            {"score": 6, "range": [13, 13]},
            {"score": 7, "range": [14, 15]},
            {"score": 8, "range": [16, 16]},
            {"score": 9, "range": [17, 20]}
        ],
    }, {
        scale: "O",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 8]},
            {"score": 4, "range": [9, 10]},
            {"score": 5, "range": [11, 11]},
            {"score": 6, "range": [12, 13]},
            {"score": 7, "range": [14, 15]},
            {"score": 8, "range": [16, 17]},
            {"score": 9, "range": [18, 26]}
        ],
    }, {
        scale: "Q1",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 5]},
            {"score": 2, "range": [6, 6]},
            {"score": 3, "range": [7, 8]},
            {"score": 4, "range": [9, 9]},
            {"score": 5, "range": [10, 11]},
            {"score": 6, "range": [12, 12]},
            {"score": 7, "range": [13, 13]},
            {"score": 8, "range": [14, 15]},
            {"score": 9, "range": [16, 20]}
        ],
    }, {
        scale: "Q2",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 8]},
            {"score": 4, "range": [9, 9]},
            {"score": 5, "range": [10, 11]},
            {"score": 6, "range": [12, 13]},
            {"score": 7, "range": [14, 15]},
            {"score": 8, "range": [16, 17]},
            {"score": 9, "range": [18, 20]}
        ],
    }, {
        scale: "Q3",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 5]},
            {"score": 2, "range": [6, 6]},
            {"score": 3, "range": [7, 8]},
            {"score": 4, "range": [9, 10]},
            {"score": 5, "range": [11, 11]},
            {"score": 6, "range": [12, 13]},
            {"score": 7, "range": [14, 14]},
            {"score": 8, "range": [15, 18]},
            {"score": 9, "range": [17, 20]}
        ],
    }, {
        scale: "Q4",
        scores: [
            {"score": 0, "range": [0, 2]},
            {"score": 1, "range": [3, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 8]},
            {"score": 4, "range": [10, 12]},
            {"score": 5, "range": [13, 15]},
            {"score": 6, "range": [16, 17]},
            {"score": 7, "range": [18, 19]},
            {"score": 8, "range": [2, 21]},
            {"score": 9, "range": [22, 26]}
        ]
    },
];

const F1928: StenScaleMetadata[] = [
    {
        scale: "A",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 6]},
            {"score": 2, "range": [7, 7]},
            {"score": 3, "range": [8, 9]},
            {"score": 4, "range": [10, 12]},
            {"score": 5, "range": [13, 13]},
            {"score": 6, "range": [14, 15]},
            {"score": 7, "range": [16, 16]},
            {"score": 8, "range": [17, 17]},
            {"score": 9, "range": [18, 18]},
            {"score": 10, "range": [19, 20]}
        ],
    }, {
        scale: "B",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 5]},
            {"score": 2, "range": [NaN, NaN]},
            {"score": 3, "range": [6, 6]},
            {"score": 4, "range": [7, 7]},
            {"score": 5, "range": [8, 8]},
            {"score": 6, "range": [9, 9]},
            {"score": 7, "range": [10, 10]},
            {"score": 8, "range": [11, 11]},
            {"score": 9, "range": [12, 13]}
        ],
    }, {
        scale: "C",
        scores: [
            {"score": 0, "range": [0, 6]},
            {"score": 1, "range": [7, 8]},
            {"score": 2, "range": [9, 10]},
            {"score": 3, "range": [11, 12]},
            {"score": 4, "range": [13, 14]},
            {"score": 5, "range": [15, 16]},
            {"score": 6, "range": [17, 18]},
            {"score": 7, "range": [19, 20]},
            {"score": 8, "range": [21, 22]},
            {"score": 9, "range": [23, 26]}
        ],
    }, {
        scale: "E",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 8]},
            {"score": 4, "range": [9, 10]},
            {"score": 5, "range": [11, 12]},
            {"score": 6, "range": [13, 14]},
            {"score": 7, "range": [15, 16]},
            {"score": 8, "range": [17, 18]},
            {"score": 9, "range": [19, 26]}
        ],
    }, {
        scale: "F",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 7]},
            {"score": 2, "range": [8, 10]},
            {"score": 3, "range": [11, 12]},
            {"score": 4, "range": [13, 15]},
            {"score": 5, "range": [16, 17]},
            {"score": 6, "range": [18, 19]},
            {"score": 7, "range": [20, 21]},
            {"score": 8, "range": [22, 22]},
            {"score": 9, "range": [23, 26]}
        ],
    }, {
        scale: "G",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 6]},
            {"score": 2, "range": [7, 8]},
            {"score": 3, "range": [9, 10]},
            {"score": 4, "range": [11, 12]},
            {"score": 5, "range": [13, 13]},
            {"score": 6, "range": [14, 15]},
            {"score": 7, "range": [16, 17]},
            {"score": 8, "range": [18, 18]},
            {"score": 9, "range": [19, 20]}
        ],
    }, {
        scale: "H",
        scores: [
            {"score": 0, "range": [0, 2]},
            {"score": 1, "range": [3, 4]},
            {"score": 2, "range": [5, 7]},
            {"score": 3, "range": [8, 9]},
            {"score": 4, "range": [10, 12]},
            {"score": 5, "range": [13, 15]},
            {"score": 6, "range": [10, 17]},
            {"score": 7, "range": [18, 20]},
            {"score": 8, "range": [21, 22]},
            {"score": 9, "range": [23, 26]}
        ],
    }, {
        scale: "I",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 6]},
            {"score": 2, "range": [7, 8]},
            {"score": 3, "range": [9, 10]},
            {"score": 4, "range": [11, 12]},
            {"score": 5, "range": [13, 13]},
            {"score": 6, "range": [14, 14]},
            {"score": 7, "range": [15, 15]},
            {"score": 8, "range": [16, 17]},
            {"score": 9, "range": [18, 20]}
        ],
    }, {
        scale: "L",
        scores: [
            {"score": 0, "range": [0, 1]},
            {"score": 1, "range": [2, 3]},
            {"score": 2, "range": [4, 4]},
            {"score": 3, "range": [5, 5]},
            {"score": 4, "range": [6, 7]},
            {"score": 5, "range": [8, 9]},
            {"score": 6, "range": [10, 10]},
            {"score": 7, "range": [11, 12]},
            {"score": 8, "range": [13, 14]},
            {"score": 9, "range": [15, 20]}
        ],
    }, {
        scale: "M",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 7]},
            {"score": 2, "range": [8, 8]},
            {"score": 3, "range": [9, 10]},
            {"score": 4, "range": [11, 12]},
            {"score": 5, "range": [13, 14]},
            {"score": 6, "range": [15, 16]},
            {"score": 7, "range": [17, 17]},
            {"score": 8, "range": [18, 19]},
            {"score": 9, "range": [20, 26]}
        ],
    }, {
        scale: "N",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 6]},
            {"score": 2, "range": [7, 7]},
            {"score": 3, "range": [8, 8]},
            {"score": 4, "range": [9, 10]},
            {"score": 5, "range": [11, 11]},
            {"score": 6, "range": [12, 13]},
            {"score": 7, "range": [14, 14]},
            {"score": 8, "range": [15, 16]},
            {"score": 9, "range": [17, 20]}
        ],
    }, {
        scale: "O",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 7]},
            {"score": 4, "range": [8, 9]},
            {"score": 5, "range": [10, 12]},
            {"score": 6, "range": [13, 14]},
            {"score": 7, "range": [15, 16]},
            {"score": 8, "range": [17, 18]},
            {"score": 9, "range": [19, 26]}
        ],
    }, {
        scale: "Q1",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 5]},
            {"score": 3, "range": [6, 7]},
            {"score": 4, "range": [8, 8]},
            {"score": 5, "range": [9, 9]},
            {"score": 6, "range": [10, 11]},
            {"score": 7, "range": [12, 13]},
            {"score": 8, "range": [14, 14]},
            {"score": 9, "range": [15, 20]}
        ],
    }, {
        scale: "Q2",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 7]},
            {"score": 4, "range": [8, 9]},
            {"score": 5, "range": [10, 11]},
            {"score": 6, "range": [12, 13]},
            {"score": 7, "range": [14, 15]},
            {"score": 8, "range": [16, 17]},
            {"score": 9, "range": [18, 20]}
        ],
    }, {
        scale: "Q3",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 5]},
            {"score": 2, "range": [6, 7]},
            {"score": 3, "range": [8, 9]},
            {"score": 4, "range": [10, 10]},
            {"score": 5, "range": [11, 12]},
            {"score": 6, "range": [13, 13]},
            {"score": 7, "range": [14, 14]},
            {"score": 8, "range": [15, 16]},
            {"score": 9, "range": [17, 20]}
        ],
    }, {
        scale: "Q4",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 5]},
            {"score": 2, "range": [6, 7]},
            {"score": 3, "range": [8, 10]},
            {"score": 4, "range": [11, 12]},
            {"score": 5, "range": [13, 15]},
            {"score": 6, "range": [16, 18]},
            {"score": 7, "range": [19, 20]},
            {"score": 8, "range": [21, 22]},
            {"score": 9, "range": [23, 26]}
        ]
    },
];

const M1928: StenScaleMetadata[] = [
    {
        scale: "A",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 5]},
            {"score": 3, "range": [6, 6]},
            {"score": 4, "range": [7, 7]},
            {"score": 5, "range": [8, 9]},
            {"score": 6, "range": [10, 11]},
            {"score": 7, "range": [12, 13]},
            {"score": 8, "range": [14, 14]},
            {"score": 9, "range": [15, 16]},
            {"score": 10, "range": [17, 20]}
        ],
    }, {
        scale: "B",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 5]},
            {"score": 2, "range": [NaN, NaN]},
            {"score": 3, "range": [6, 6]},
            {"score": 4, "range": [7, 7]},
            {"score": 5, "range": [8, 8]},
            {"score": 6, "range": [9, 9]},
            {"score": 7, "range": [10, 10]},
            {"score": 8, "range": [11, 11]},
            {"score": 9, "range": [12, 13]}
        ],
    }, {
        scale: "C",
        scores: [
            {"score": 0, "range": [0, 7]},
            {"score": 1, "range": [8, 9]},
            {"score": 2, "range": [10, 11]},
            {"score": 3, "range": [12, 12]},
            {"score": 4, "range": [13, 13]},
            {"score": 5, "range": [14, 15]},
            {"score": 6, "range": [16, 17]},
            {"score": 7, "range": [18, 19]},
            {"score": 8, "range": [20, 21]},
            {"score": 9, "range": [22, 22]},
            {"score": 10, "range": [23, 23]},
            {"score": 11, "range": [26, 26]}
        ],
    }, {
        scale: "E",
        scores: [
            {"score": 0, "range": [0, 6]},
            {"score": 1, "range": [7, 8]},
            {"score": 2, "range": [9, 9]},
            {"score": 3, "range": [10, 11]},
            {"score": 4, "range": [12, 13]},
            {"score": 5, "range": [14, 16]},
            {"score": 6, "range": [17, 18]},
            {"score": 7, "range": [19, 19]},
            {"score": 8, "range": [20, 21]},
            {"score": 9, "range": [22, 26]}
        ],
    }, {
        scale: "F",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 8]},
            {"score": 2, "range": [9, 10]},
            {"score": 3, "range": [11, 13]},
            {"score": 4, "range": [14, 15]},
            {"score": 5, "range": [16, 17]},
            {"score": 6, "range": [18, 19]},
            {"score": 7, "range": [20, 21]},
            {"score": 8, "range": [22, 23]},
            {"score": 9, "range": [24, 46]}
        ],
    }, {
        scale: "G",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 8]},
            {"score": 2, "range": [7, 9]},
            {"score": 3, "range": [10, 11]},
            {"score": 4, "range": [12, 12]},
            {"score": 5, "range": [13, 14]},
            {"score": 6, "range": [15, 16]},
            {"score": 7, "range": [17, 17]},
            {"score": 8, "range": [18, 19]},
            {"score": 9, "range": [20, 20]}
        ],
    }, {
        scale: "H",
        scores: [
            {"score": 0, "range": [0, 2]},
            {"score": 1, "range": [3, 4]},
            {"score": 2, "range": [5, 7]},
            {"score": 3, "range": [8, 10]},
            {"score": 4, "range": [11, 18]},
            {"score": 5, "range": [14, 16]},
            {"score": 6, "range": [17, 18]},
            {"score": 7, "range": [19, 20]},
            {"score": 8, "range": [21, 22]},
            {"score": 9, "range": [23, 26]}
        ],
    }, {
        scale: "I",
        scores: [
            {"score": 0, "range": [0, 2]},
            {"score": 1, "range": [3, 3]},
            {"score": 2, "range": [4, 5]},
            {"score": 3, "range": [6, 6]},
            {"score": 4, "range": [7, 8]},
            {"score": 5, "range": [9, 10]},
            {"score": 6, "range": [11, 12]},
            {"score": 7, "range": [13, 14]},
            {"score": 8, "range": [15, 15]},
            {"score": 9, "range": [16, 20]}
        ],
    }, {
        scale: "L",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 7]},
            {"score": 4, "range": [8, 9]},
            {"score": 5, "range": [10, 11]},
            {"score": 6, "range": [12, 12]},
            {"score": 7, "range": [13, 14]},
            {"score": 8, "range": [15, 15]},
            {"score": 9, "range": [16, 20]}
        ],
    }, {
        scale: "M",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 6]},
            {"score": 2, "range": [7, 8]},
            {"score": 3, "range": [9, 9]},
            {"score": 4, "range": [10, 11]},
            {"score": 5, "range": [12, 13]},
            {"score": 6, "range": [14, 15]},
            {"score": 7, "range": [16, 17]},
            {"score": 8, "range": [18, 18]},
            {"score": 9, "range": [19, 20]}
        ],
    }, {
        scale: "N",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 7]},
            {"score": 2, "range": [8, 8]},
            {"score": 3, "range": [9, 9]},
            {"score": 4, "range": [10, 10]},
            {"score": 5, "range": [11, 12]},
            {"score": 6, "range": [13, 13]},
            {"score": 7, "range": [14, 15]},
            {"score": 8, "range": [16, 16]},
            {"score": 9, "range": [17, 20]}
        ],
    }, {
        scale: "O",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 8]},
            {"score": 4, "range": [9, 9]},
            {"score": 5, "range": [10, 11]},
            {"score": 6, "range": [12, 13]},
            {"score": 7, "range": [14, 15]},
            {"score": 8, "range": [16, 17]},
            {"score": 9, "range": [18, 26]}
        ],
    }, {
        scale: "Q1",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 5]},
            {"score": 2, "range": [6, 6]},
            {"score": 3, "range": [7, 8]},
            {"score": 4, "range": [9, 9]},
            {"score": 5, "range": [10, 10]},
            {"score": 6, "range": [11, 12]},
            {"score": 7, "range": [13, 13]},
            {"score": 8, "range": [14, 15]},
            {"score": 9, "range": [16, 20]}
        ],
    }, {
        scale: "Q2",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 7]},
            {"score": 4, "range": [8, 9]},
            {"score": 5, "range": [10, 11]},
            {"score": 6, "range": [12, 13]},
            {"score": 7, "range": [14, 15]},
            {"score": 8, "range": [16, 17]},
            {"score": 9, "range": [18, 20]}
        ],
    }, {
        scale: "Q3",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 5]},
            {"score": 2, "range": [6, 6]},
            {"score": 3, "range": [7, 8]},
            {"score": 4, "range": [9, 10]},
            {"score": 5, "range": [11, 11]},
            {"score": 6, "range": [12, 13]},
            {"score": 7, "range": [14, 14]},
            {"score": 8, "range": [15, 16]},
            {"score": 9, "range": [17, 20]}
        ],
    }, {
        scale: "Q4",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 7]},
            {"score": 3, "range": [8, 9]},
            {"score": 4, "range": [10, 12]},
            {"score": 5, "range": [13, 14]},
            {"score": 6, "range": [15, 17]},
            {"score": 7, "range": [18, 19]},
            {"score": 8, "range": [20, 21]},
            {"score": 9, "range": [22, 26]}
        ]
    },
];

const F2970: StenScaleMetadata[] = [
    {
        scale: "A",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 6]},
            {"score": 2, "range": [7, 8]},
            {"score": 3, "range": [9, 10]},
            {"score": 4, "range": [11, 11]},
            {"score": 5, "range": [12, 13]},
            {"score": 6, "range": [14, 15]},
            {"score": 7, "range": [16, 16]},
            {"score": 8, "range": [17, 18]},
            {"score": 9, "range": [19, 20]}
        ],
    }, {
        scale: "B",
        scores: [
            {"score": 0, "range": [0, 1]},
            {"score": 1, "range": [2, 2]},
            {"score": 2, "range": [3, 3]},
            {"score": 3, "range": [4, 4]},
            {"score": 4, "range": [5, 5]},
            {"score": 5, "range": [6, 6]},
            {"score": 6, "range": [7, 7]},
            {"score": 7, "range": [8, 9]},
            {"score": 8, "range": [10, 10]},
            {"score": 9, "range": [11, 13]}
        ],
    }, {
        scale: "C",
        scores: [
            {"score": 0, "range": [0, 7]},
            {"score": 1, "range": [8, 9]},
            {"score": 2, "range": [10, 11]},
            {"score": 3, "range": [12, 13]},
            {"score": 4, "range": [14, 15]},
            {"score": 5, "range": [18, 17]},
            {"score": 6, "range": [18, 20]},
            {"score": 7, "range": [21, 22]},
            {"score": 8, "range": [23, 24]},
            {"score": 9, "range": [25, 26]}
        ],
    }, {
        scale: "E",
        scores: [
            {"score": 0, "range": [0, 2]},
            {"score": 1, "range": [3, 3]},
            {"score": 2, "range": [4, 5]},
            {"score": 3, "range": [6, 7]},
            {"score": 4, "range": [8, 9]},
            {"score": 5, "range": [10, 11]},
            {"score": 6, "range": [12, 14]},
            {"score": 7, "range": [15, 18]},
            {"score": 8, "range": [17, 18]},
            {"score": 9, "range": [19, 26]}
        ],
    }, {
        scale: "F",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 6]},
            {"score": 2, "range": [7, 8]},
            {"score": 3, "range": [9, 10]},
            {"score": 4, "range": [11, 13]},
            {"score": 5, "range": [14, 15]},
            {"score": 6, "range": [16, 17]},
            {"score": 7, "range": [18, 19]},
            {"score": 8, "range": [20, 21]},
            {"score": 9, "range": [22, 26]}
        ],
    }, {
        scale: "G",
        scores: [
            {"score": 0, "range": [0, 6]},
            {"score": 1, "range": [7, 7]},
            {"score": 2, "range": [8, 9]},
            {"score": 3, "range": [10, 10]},
            {"score": 4, "range": [11, 11]},
            {"score": 5, "range": [12, 13]},
            {"score": 6, "range": [14, 15]},
            {"score": 7, "range": [16, 16]},
            {"score": 8, "range": [17, 17]},
            {"score": 9, "range": [18, 19]},
            {"score": 10, "range": [20, 20]}
        ],
    }, {
        scale: "H",
        scores: [
            {"score": 0, "range": [0, 2]},
            {"score": 1, "range": [3, 4]},
            {"score": 2, "range": [5, 7]},
            {"score": 3, "range": [8, 9]},
            {"score": 4, "range": [10, 12]},
            {"score": 5, "range": [13, 14]},
            {"score": 6, "range": [15, 17]},
            {"score": 7, "range": [18, 20]},
            {"score": 8, "range": [21, 22]},
            {"score": 9, "range": [23, 26]}
        ],
    }, {
        scale: "I",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 7]},
            {"score": 2, "range": [8, 8]},
            {"score": 3, "range": [9, 10]},
            {"score": 4, "range": [11, 11]},
            {"score": 5, "range": [12, 13]},
            {"score": 6, "range": [14, 14]},
            {"score": 7, "range": [15, 18]},
            {"score": 8, "range": [17, 17]},
            {"score": 9, "range": [18, 20]}
        ],
    }, {
        scale: "L",
        scores: [
            {"score": 0, "range": [0, 1]},
            {"score": 1, "range": [2, 2]},
            {"score": 2, "range": [3, 4]},
            {"score": 3, "range": [5, 5]},
            {"score": 4, "range": [6, 7]},
            {"score": 5, "range": [8, 8]},
            {"score": 6, "range": [9, 10]},
            {"score": 7, "range": [11, 11]},
            {"score": 8, "range": [12, 13]},
            {"score": 9, "range": [14, 20]}
        ],
    }, {
        scale: "M",
        scores: [
            {"score": 0, "range": [0, 6]},
            {"score": 1, "range": [7, 7]},
            {"score": 2, "range": [8, 9]},
            {"score": 3, "range": [10, 11]},
            {"score": 4, "range": [12, 12]},
            {"score": 5, "range": [13, 14]},
            {"score": 6, "range": [15, 16]},
            {"score": 7, "range": [17, 17]},
            {"score": 8, "range": [18, 19]},
            {"score": 9, "range": [20, 26]}
        ],
    }, {
        scale: "N",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 6]},
            {"score": 2, "range": [7, 7]},
            {"score": 3, "range": [8, 9]},
            {"score": 4, "range": [10, 10]},
            {"score": 5, "range": [11, 11]},
            {"score": 6, "range": [12, 13]},
            {"score": 7, "range": [14, 14]},
            {"score": 8, "range": [15, 15]},
            {"score": 9, "range": [16, 20]}
        ],
    }, {
        scale: "O",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 8]},
            {"score": 4, "range": [9, 10]},
            {"score": 5, "range": [11, 12]},
            {"score": 6, "range": [13, 14]},
            {"score": 7, "range": [15, 18]},
            {"score": 8, "range": [17, 18]},
            {"score": 9, "range": [19, 26]}
        ],
    }, {
        scale: "Q1",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 5]},
            {"score": 3, "range": [6, 7]},
            {"score": 4, "range": [8, 8]},
            {"score": 5, "range": [9, 9]},
            {"score": 6, "range": [10, 11]},
            {"score": 7, "range": [12, 13]},
            {"score": 8, "range": [14, 14]},
            {"score": 9, "range": [15, 20]}
        ],
    }, {
        scale: "Q2",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 8]},
            {"score": 4, "range": [9, 9]},
            {"score": 5, "range": [10, 11]},
            {"score": 6, "range": [12, 13]},
            {"score": 7, "range": [14, 15]},
            {"score": 8, "range": [16, 17]},
            {"score": 9, "range": [18, 20]}
        ],
    }, {
        scale: "Q3",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 7]},
            {"score": 2, "range": [8, 8]},
            {"score": 3, "range": [9, 10]},
            {"score": 4, "range": [11, 11]},
            {"score": 5, "range": [12, 13]},
            {"score": 6, "range": [14, 14]},
            {"score": 7, "range": [15, 16]},
            {"score": 8, "range": [17, 17]},
            {"score": 9, "range": [18, 20]}
        ],
    }, {
        scale: "Q4",
        scores: [
            {"score": 0, "range": [0, 2]},
            {"score": 1, "range": [3, 4]},
            {"score": 2, "range": [5, 7]},
            {"score": 3, "range": [8, 10]},
            {"score": 4, "range": [11, 12]},
            {"score": 5, "range": [13, 15]},
            {"score": 6, "range": [18, 17]},
            {"score": 7, "range": [18, 20]},
            {"score": 8, "range": [21, 22]},
            {"score": 9, "range": [23, 26]}
        ]
    },
];

const M2970: StenScaleMetadata[] = [
    {
        scale: "A",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 7]},
            {"score": 4, "range": [8, 9]},
            {"score": 5, "range": [10, 11]},
            {"score": 6, "range": [12, 13]},
            {"score": 7, "range": [14, 14]},
            {"score": 8, "range": [15, 16]},
            {"score": 9, "range": [17, 20]}
        ],
    }, {
        scale: "B",
        scores: [
            {"score": 0, "range": [0, 1]},
            {"score": 1, "range": [2, 2]},
            {"score": 2, "range": [3, 3]},
            {"score": 3, "range": [4, 4]},
            {"score": 4, "range": [5, 5]},
            {"score": 5, "range": [6, 6]},
            {"score": 6, "range": [7, 7]},
            {"score": 7, "range": [8, 9]},
            {"score": 8, "range": [10, 10]},
            {"score": 9, "range": [11, 13]}
        ],
    }, {
        scale: "C",
        scores: [
            {"score": 0, "range": [0, 7]},
            {"score": 1, "range": [8, 10]},
            {"score": 2, "range": [11, 12]},
            {"score": 3, "range": [13, 14]},
            {"score": 4, "range": [15, 16]},
            {"score": 5, "range": [17, 17]},
            {"score": 6, "range": [18, 19]},
            {"score": 7, "range": [20, 21]},
            {"score": 8, "range": [22, 23]},
            {"score": 9, "range": [24, 26]}
        ],
    }, {
        scale: "E",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 7]},
            {"score": 2, "range": [8, 9]},
            {"score": 3, "range": [10, 11]},
            {"score": 4, "range": [12, 13]},
            {"score": 5, "range": [14, 15]},
            {"score": 6, "range": [16, 17]},
            {"score": 7, "range": [18, 19]},
            {"score": 8, "range": [20, 21]},
            {"score": 9, "range": [22, 26]}
        ],
    }, {
        scale: "F",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 5]},
            {"score": 2, "range": [6, 8]},
            {"score": 3, "range": [9, 10]},
            {"score": 4, "range": [11, 13]},
            {"score": 5, "range": [14, 15]},
            {"score": 6, "range": [16, 17]},
            {"score": 7, "range": [18, 19]},
            {"score": 8, "range": [20, 20]},
            {"score": 9, "range": [21, 26]}
        ],
    }, {
        scale: "G",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 7]},
            {"score": 2, "range": [8, 10]},
            {"score": 3, "range": [11, 12]},
            {"score": 4, "range": [13, 13]},
            {"score": 5, "range": [14, 15]},
            {"score": 6, "range": [16, 17]},
            {"score": 7, "range": [18, 18]},
            {"score": 8, "range": [19, 19]},
            {"score": 9, "range": [20, 20]}
        ],
    }, {
        scale: "H",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 5]},
            {"score": 2, "range": [6, 8]},
            {"score": 3, "range": [9, 11]},
            {"score": 4, "range": [12, 14]},
            {"score": 5, "range": [15, 16]},
            {"score": 6, "range": [17, 19]},
            {"score": 7, "range": [20, 21]},
            {"score": 8, "range": [22, 23]},
            {"score": 9, "range": [24, 26]}
        ],
    }, {
        scale: "I",
        scores: [
            {"score": 0, "range": [0, 2]},
            {"score": 1, "range": [3, 3]},
            {"score": 2, "range": [4, 4]},
            {"score": 3, "range": [5, 6]},
            {"score": 4, "range": [7, 8]},
            {"score": 5, "range": [9, 10]},
            {"score": 6, "range": [11, 12]},
            {"score": 7, "range": [13, 14]},
            {"score": 8, "range": [15, 15]},
            {"score": 9, "range": [16, 20]}
        ],
    }, {
        scale: "L",
        scores: [
            {"score": 0, "range": [0, 2]},
            {"score": 1, "range": [3, 3]},
            {"score": 2, "range": [4, 5]},
            {"score": 3, "range": [6, 7]},
            {"score": 4, "range": [8, 8]},
            {"score": 5, "range": [9, 10]},
            {"score": 6, "range": [11, 12]},
            {"score": 7, "range": [13, 13]},
            {"score": 8, "range": [14, 15]},
            {"score": 9, "range": [16, 20]}
        ],
    }, {
        scale: "M",
        scores: [
            {"score": 0, "range": [0, 5]},
            {"score": 1, "range": [6, 7]},
            {"score": 2, "range": [8, 8]},
            {"score": 3, "range": [9, 10]},
            {"score": 4, "range": [11, 11]},
            {"score": 5, "range": [12, 13]},
            {"score": 6, "range": [14, 15]},
            {"score": 7, "range": [16, 17]},
            {"score": 8, "range": [18, 19]},
            {"score": 9, "range": [20, 26]}
        ],
    }, {
        scale: "N",
        scores: [
            {"score": 0, "range": [0, 6]},
            {"score": 1, "range": [7, 7]},
            {"score": 2, "range": [8, 9]},
            {"score": 3, "range": [10, 10]},
            {"score": 4, "range": [11, 11]},
            {"score": 5, "range": [12, 13]},
            {"score": 6, "range": [14, 14]},
            {"score": 7, "range": [15, 15]},
            {"score": 8, "range": [16, 17]},
            {"score": 9, "range": [18, 20]}
        ],
    }, {
        scale: "O",
        scores: [
            {"score": 0, "range": [0, 2]},
            {"score": 1, "range": [3, 3]},
            {"score": 2, "range": [4, 5]},
            {"score": 3, "range": [6, 7]},
            {"score": 4, "range": [8, 9]},
            {"score": 5, "range": [10, 11]},
            {"score": 6, "range": [12, 12]},
            {"score": 7, "range": [13, 15]},
            {"score": 8, "range": [16, 17]},
            {"score": 9, "range": [18, 26]}
        ],
    }, {
        scale: "Q1",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 6]},
            {"score": 2, "range": [7, 7]},
            {"score": 3, "range": [8, 8]},
            {"score": 4, "range": [9, 10]},
            {"score": 5, "range": [11, 11]},
            {"score": 6, "range": [12, 13]},
            {"score": 7, "range": [14, 14]},
            {"score": 8, "range": [15, 16]},
            {"score": 9, "range": [17, 20]}
        ],
    }, {
        scale: "Q2",
        scores: [
            {"score": 0, "range": [0, 3]},
            {"score": 1, "range": [4, 4]},
            {"score": 2, "range": [5, 6]},
            {"score": 3, "range": [7, 8]},
            {"score": 4, "range": [9, 10]},
            {"score": 5, "range": [11, 11]},
            {"score": 6, "range": [12, 13]},
            {"score": 7, "range": [14, 15]},
            {"score": 8, "range": [16, 17]},
            {"score": 9, "range": [18, 20]}
        ],
    }, {
        scale: "Q3",
        scores: [
            {"score": 0, "range": [0, 4]},
            {"score": 1, "range": [5, 6]},
            {"score": 2, "range": [7, 8]},
            {"score": 3, "range": [9, 9]},
            {"score": 4, "range": [10, 11]},
            {"score": 5, "range": [12, 12]},
            {"score": 6, "range": [13, 14]},
            {"score": 7, "range": [15, 15]},
            {"score": 8, "range": [16, 17]},
            {"score": 9, "range": [18, 20]}
        ],
    }, {
        scale: "Q4",
        scores: [
            {"score": 0, "range": [0, 0]},
            {"score": 1, "range": [1, 2]},
            {"score": 2, "range": [3, 5]},
            {"score": 3, "range": [6, 7]},
            {"score": 4, "range": [8, 10]},
            {"score": 5, "range": [11, 12]},
            {"score": 6, "range": [13, 15]},
            {"score": 7, "range": [16, 17]},
            {"score": 8, "range": [18, 19]},
            {"score": 9, "range": [20, 26]}
        ]
    }
];

const stenMetadata: Record<string, StenScaleMetadata[]> = {
  F1618,
  M1618,
  F1928,
  M1928,
  F2970,
  M2970,
};

export default stenMetadata;
