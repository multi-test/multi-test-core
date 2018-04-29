import { expect } from "chai";
import { curry, noop, values } from "lodash";

export function shouldEqual(expectedScales: object): string {
    if (values(expectedScales).every(isFinite)) {
        return `has scales = [${values(expectedScales)}]`;
    }

    return "should return NaN scales";
}

export const whenFilledWith = curry(function whenFilledWith<TScales extends object, TAnswer>(
    testFn: (answers: any[]) => TScales,
    answersCount: number,
    value: TAnswer | any,
    expected: TScales,
    {
        _describe = describe,
        _beforeEach = beforeEach,
        _it = it,
    } = {},
) {
    _describe(`when filled with ${value}`, () => {
        let answers: TAnswer[];

        _beforeEach(() => {
            answers = new Array(answersCount);

            if (value !== undefined) {
                answers.fill(value);
            }
        });

        _it(shouldEqual(expected), () => {
            expect(testFn(answers)).to.eql(expected);
        });
    });
}, 3);
