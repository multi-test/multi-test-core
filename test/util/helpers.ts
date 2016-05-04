import { curry, noop, values } from 'lodash';
import { expect } from 'chai';

export function should_equal(expectedScales) {
    if (values(expectedScales).every(isFinite)) {
        return `has scales = [${values(expectedScales)}]`;
    }

    return 'should return NaN scales';
}

export const when_filled_with = curry(function when_filled_with(
    testFn,
    answersCount,
    value,
    expected,
    {
        _describe = describe,
        _beforeEach = beforeEach,
        _it = it
    } = {}
) {
    _describe(`when filled with ${value}`, () => {
        let answers;

        _beforeEach(() => {
            answers = new Array(answersCount);

            if (value !== undefined) {
                answers.fill(value);
            }
        });

        _it(should_equal(expected), () => {
            expect(testFn(answers)).to.eql(expected);
        });
    });
}, 3);
