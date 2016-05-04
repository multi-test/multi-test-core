/* global describe, beforeEach, it, expect */
import amon from "../src/amon/amon";
import { should_equal } from './util/helpers';
import { expect } from 'chai';
import {createBlankScales} from "../src/amon/scales";

describe(amon.name, () => {
    
    let answers;

    const invalidResult = createBlankScales(NaN);

    beforeEach(() => answers = new Array(220));

    describe('when not filled', () => {
        it(should_equal(invalidResult), () => {
            expect(amon(answers)).to.eql(invalidResult);
        });
    });

    describe('when filled with +', () => {
        beforeEach(() => answers.fill('+'));

        const expected = {
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
        };

        it(should_equal(expected), () => {
            expect(amon(answers)).to.eql(expected);
        });

        describe('when answers length is invalid', () => {
            beforeEach(() => { delete answers[answers.length - 1]; });

            it(should_equal(invalidResult), () => {
                expect(amon(answers)).to.eql(invalidResult);
            });
        });
    });

    describe('when filled with -', () => {
        beforeEach(() => answers.fill('-'));

        const expected = {
            A1: 0,
            A2: 0,
            A3: 0,
            C1: 0,
            C2: 0,
            C3: 0,
            LO1: 0,
            LO2: 0,
            LO3: 0,
            LI1: 0,
            LI2: 0,
            LI3: 0,
            N1: 0,
            N2: 0,
            N3: 0,
            S1: 0,
            S2: 0,
            S3: 0,
        };

        it(should_equal(expected), () => {
            expect(amon(answers)).to.eql(expected);
        });
    });
});
