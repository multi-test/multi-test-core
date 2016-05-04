import mmpi from "../src/mmpi/mmpi";
import { expect } from 'chai';
import {when_filled_with as wfw, should_equal} from "./util/helpers";
import {createBlankScales} from "../src/mmpi/scales";

const when_filled_with = wfw(mmpi, 71);

describe("MMPI", () => {
    const invalidResult = createBlankScales(NaN);

    when_filled_with(undefined, invalidResult);

    when_filled_with(1, invalidResult);

    when_filled_with('+', {
        "1": 9,
        "2": 8,
        "3": 14,
        "4": 11,
        "6": 10,
        "7": 13,
        "8": 17,
        "9": 11,
        "F": 9,
        "K": 0,
        "L": 0,
        "T1": 55,
        "T2": 52,
        "T3": 65,
        "T4": 55,
        "T6": 86,
        "T7": 45,
        "T8": 62,
        "T9": 75,
        "TF": 78,
        "TK": 24,
        "TL": 35,
    });

    when_filled_with('-', {
        "1": 12,
        "2": 11,
        "3": 11,
        "4": 14,
        "6": 4,
        "7": 17,
        "8": 16,
        "9": 4,
        "L": 5,
        "F": 3,
        "K": 14,
        "T1": 65,
        "T2": 62,
        "T3": 55,
        "T4": 72,
        "T6": 48,
        "T7": 62,
        "T8": 58,
        "T9": 36,
        "TL": 78,
        "TF": 48,
        "TK": 68,
    });

    describe("given a sample suite #1", () => {
        let answers;

        beforeEach(() => answers = [
            '+', '+', '+',
            '+', '-', '+',
            '-', '-', '-',
            '-', '+', '-',
            '-', '-', '-',
            '-', '-', '-',
            '-', '+', '-',
            '-', '+', '+',
            '-', '-', '-',
            '+', '-', '-',
            '-', '-', '-',
            '+', '+', '-',
            '+', '+', '-',
            '-', '-', '+',
            '+', '-', '+',
            '-', '+', '-',
            '-', '-', '-',
            '+', '+', '+',
            '-', '-', '+',
            '-', '-', '+',
            '+', '-', '-',
            '+', '+', '+',
            '+', '+', '+',
            '-', '-'
        ]);

        const expected = {
            "1": 3,
            "2": 2,
            "3": 10,
            "4": 5,
            "6": 5,
            "7": 9,
            "8": 10,
            "9": 7,
            "L": 1,
            "F": 1,
            "K": 6,
            "T1": 35,
            "T2": 34,
            "T3": 52,
            "T4": 25,
            "T6": 55,
            "T7": 34,
            "T8": 38,
            "T9": 52,
            "TL": 45,
            "TF": 38,
            "TK": 42
        };

        it(should_equal(expected), () => {
            expect(mmpi(answers)).to.eql(expected);
        });
    });
});
