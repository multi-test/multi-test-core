import spa from "../src/spa/spa";
import { when_filled_with as wfw, should_equal } from './util/helpers';
import { expect } from 'chai';
import {createBlankScales} from "../src/spa/scales";

const when_filled_with = wfw(spa, 101);

describe('SPA Test', () => {
    const createSPAScales = ({
        1: [e1a, e1b],
        2: [e2a, e2b],
        3: [e3a, e3b],
        4: [e4a, e4b],
        5: [e5a, e5b],
        6: [e6a, e6b],
        7: [e7a, e7b],
        8: e8,
    }) => ({
        '1a': e1a,
        '1b': e1b,
        '2a': e2a,
        '2b': e2b,
        '3a': e3a,
        '3b': e3b,
        '4a': e4a,
        '4b': e4b,
        '5a': e5a,
        '5b': e5b,
        '6a': e6a,
        '6b': e6b,
        '7a': e7a,
        '7b': e7b,
        '8': e8,
        A: Math.round(100 * e1a / (e1a + e1b)),
        S: Math.round(100 * e3a / (e3a + e3b)),
        L: Math.round(100 * 1.2 * e4a / (1.2 * e4a + e4b)),
        E: Math.round(100 * e5a / (e5a + e5b)),
        I: Math.round(100 * e6a / (e6a + 1.4 * e6b)),
        D: Math.round(100 * 2 * e7a / (2 * e7a + e7b)),
    });

    when_filled_with(undefined, createBlankScales(NaN));

    when_filled_with(0, createSPAScales({
        1: [0, 0],
        2: [0, 0],
        3: [0, 0],
        4: [0, 0],
        5: [0, 0],
        6: [0, 0],
        7: [0, 0],
        8: 0
    }));

    when_filled_with(1, createBlankScales(NaN));

    when_filled_with(2, createSPAScales({
        1: [34 * 2, 34 * 2],
        2: [5 * 2, 4 * 2],
        3: [11 * 2, 7 * 2],
        4: [6 * 2, 7 * 2],
        5: [7 * 2, 7 * 2],
        6: [14 * 2, 8 * 2],
        7: [3 * 2, 6 * 2],
        8: 5 * 2,
    }));

    when_filled_with(3, createSPAScales({
        1: [34 * 3, 34 * 3],
        2: [5 * 3, 4 * 3],
        3: [11 * 3, 7 * 3],
        4: [6 * 3, 7 * 3],
        5: [7 * 3, 7 * 3],
        6: [14 * 3, 8 * 3],
        7: [3 * 3, 6 * 3],
        8: 5 * 3,
    }));

    when_filled_with(4, createSPAScales({
        1: [34 * 4, 34 * 4],
        2: [5 * 4, 4 * 4],
        3: [11 * 4, 7 * 4],
        4: [6 * 4, 7 * 4],
        5: [7 * 4, 7 * 4],
        6: [14 * 4, 8 * 4],
        7: [3 * 4, 6 * 4],
        8: 5 * 4,
    }));

    when_filled_with(5, createSPAScales({
        1: [34 * 5, 34 * 5],
        2: [5 * 5, 4 * 5],
        3: [11 * 5, 7 * 5],
        4: [6 * 5, 7 * 5],
        5: [7 * 5, 7 * 5],
        6: [14 * 5, 8 * 5],
        7: [3 * 5, 6 * 5],
        8: 5 * 5,
    }));

    when_filled_with(6, createSPAScales({
        1: [34 * 6, 34 * 6],
        2: [5 * 6, 4 * 6],
        3: [11 * 6, 7 * 6],
        4: [6 * 6, 7 * 6],
        5: [7 * 6, 7 * 6],
        6: [14 * 6, 8 * 6],
        7: [3 * 6, 6 * 6],
        8: 5 * 6,
    }));
});
