import emin from "../src/emin/emin";
import { should_equal } from './util/helpers';
import { expect } from 'chai';
import {IEminScales} from "../src/emin/scales";

describe(emin.name, () => {
    let answers;

    beforeEach(() => answers = new Array(46));

    function createEminScales([s0, s1, s2, s3, s4]): IEminScales {
        return {
            МП: s0,
            МУ: s1,
            ВП: s2,
            ВУ: s3,
            ВЭ: s4,
            МЭИ: s0 + s1,
            ВЭИ: s2 + s3 + s4,
            ПЭ: s0 + s2,
            УЭ: s1 + s3 + s4,
            ОУ: s0 + s1 + s2 + s3 + s4,
        };
    }

    describe('when blank', () => {
        const expected = createEminScales([NaN, NaN, NaN, NaN, NaN]);
        
        it(should_equal(expected), () => {
            expect(emin(answers)).to.eql(expected);
        });
    });

    describe('when filled with 0', () => {
        beforeEach(() => answers.fill(0));

        const expected = createEminScales([9, 15, 21, 9, 12]);
        it(should_equal(expected), () => {
            expect(emin(answers)).to.eql(expected);
        });
    });

    describe('when filled with 1', () => {
        beforeEach(() => answers.fill(1));

        const expected = createEminScales([15, 15, 17, 10, 11]);
        it(should_equal(expected), () => {
            expect(emin(answers)).to.eql(expected);
        });
    });

    describe('when filled with 2', () => {
        beforeEach(() => answers.fill(2));

        const expected = createEminScales([21, 15, 13, 11, 10]);
        it(should_equal(expected), () => {
            expect(emin(answers)).to.eql(expected);
        });
    });

    describe('when filled with 3', () => {
        beforeEach(() => answers.fill(3));

        const expected = createEminScales([27, 15, 9, 12, 9]);
        it(should_equal(expected), () => {
            expect(emin(answers)).to.eql(expected);
        });
    });
});
