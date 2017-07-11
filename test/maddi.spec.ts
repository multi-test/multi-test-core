
/* global describe, beforeEach, it, expect */
import { expect } from "chai";
import maddi from "../src/maddi/maddi";
import {createBlankScales} from "../src/maddi/scales";
import {should_equal, when_filled_with as wfw} from "./util/helpers";

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
});
