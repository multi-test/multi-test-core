
/* global describe, beforeEach, it, expect */
import { expect } from "chai";
import maddi from "../src/maddi/maddi";
import {createBlankScales} from "../src/maddi/scales";
import {shouldEqual, whenFilledWith as wfw} from "./util/helpers";

const lengths = {
    "commitment": { [1]: 7, [-1]: 11 },
    "control":    { [1]: 6, [-1]: 11 },
    "challenge":  { [1]: 2, [-1]: 8 },
};

const when_filled_with = wfw(maddi, 45);

const run_tests_for = (value: 0 | 1 | 2 | 3) => {
    const f = (p, m) => v => p * v + m * (3 - v);
    const commitment = f(7, 11)(value);
    const control = f(6, 11)(value);
    const challenge = f(2, 8)(value);
    const hardiness = commitment + control + challenge;

    when_filled_with(value, {
        commitment,
        control,
        challenge,
        hardiness
    });
};

describe(maddi.name, () => {
    when_filled_with(undefined, createBlankScales(NaN));

    run_tests_for(0);
    run_tests_for(1);
    run_tests_for(2);
    run_tests_for(3);

    it('should pass test suite #1', () =>
        expect(maddi([
            0, 0, 0, 3, 1, // 5
            2, 3, 1, 2, 0, // 10
            1, 1, 1, 2, 2, // 15
            3, 1, 1, 0, 0, // 20
            1, 0, 3, 3, 3, // 25
            0, 2, 3, 3, 0, // 30
            1, 0, 0, 1, 0, // 35
            0, 1, 0, 0, 0, // 40
            2, 3, 0, 3, 2, // 45
        ])).to.eql({
            commitment: 38,
            control: 35,
            challenge: 22,
            hardiness: 95,
        }));
});
