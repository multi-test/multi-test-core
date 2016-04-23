/* global describe, beforeEach, it, expect */
import { should_equal } from './util/helpers';
import { expect } from 'chai';
import alexithymia from "../src/alexithymia/alexithymia";

describe(alexithymia.name, () => {
    let answers;

    beforeEach(() => answers = new Array(26));

    function calculate(value) {
        return 16 * (1 + value) + 10 * (5 - value);
    }

    describe('when is not filled', () => {
        const expected = { A: NaN };

        it(should_equal(expected), () => {
            expect(alexithymia(answers)).to.eql(expected);
        });
    });

    describe('when is filled with 0', () => {
        const expected = { A: calculate(0) };
        
        beforeEach(() => answers.fill(0));
        
        it(should_equal(expected), () => {
            expect(alexithymia(answers)).to.eql(expected);
        });
    });

    describe('when is filled with 1', () => {
        const expected = { A: calculate(1) };

        beforeEach(() => answers.fill(1));

        it(should_equal(expected), () => {
            expect(alexithymia(answers)).to.eql(expected);
        });
    });

    describe('when is filled with 2', () => {
        const expected = { A: calculate(2) };

        beforeEach(() => answers.fill(2));

        it(should_equal(expected), () => {
            expect(alexithymia(answers)).to.eql(expected);
        });
    });

    describe('when is filled with 3', () => {
        const expected = { A: calculate(3) };

        beforeEach(() => answers.fill(3));

        it(should_equal(expected), () => {
            expect(alexithymia(answers)).to.eql(expected);
        });
    });

    describe('when is filled with 4', () => {
        const expected = { A: calculate(4) };

        beforeEach(() => answers.fill(4));

        it(should_equal(expected), () => {
            expect(alexithymia(answers)).to.eql(expected);
        });
    });
});
