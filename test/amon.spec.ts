/* global describe, beforeEach, it, expect */
import amon from "../src/amon/amon";
import {when_filled_with as wfw, should_equal} from "./util/helpers";
import { expect } from 'chai';
import {createBlankScales} from "../src/amon/scales";

const when_filled_with = wfw(amon, 220);

describe(amon.name, () => {
    when_filled_with(undefined, createBlankScales(NaN));

    when_filled_with('-', createBlankScales(0));

    when_filled_with('+', {
        A1: 13,
        A2: 14,
        A3: 12,
        C1: 12,
        C2: 11,
        C3: 14,
        LO1: 11,
        LO2: 11,
        LO3: 11,
        LI1: 12,
        LI2: 12,
        LI3: 13,
        N1: 12,
        N2: 12,
        N3: 13,
        S1: 13,
        S2: 13,
        S3: 11,
    });
});
