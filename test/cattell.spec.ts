/* global describe, beforeEach, it, expect */
import { expect } from "chai";
import cattel from "../src/cattell/cattell";
import {createBlankScales} from "../src/cattell/scales";

describe("cattell", () => {
    let answers;

    beforeEach(() => {
        answers = new Array(187 + 2);
    });

    describe("when filled with undefined", () => {
        beforeEach(() => answers.fill(undefined));

        it("should return NaN scales", () =>
            expect(cattel(answers)).to.eql(createBlankScales(NaN)));
    });

    describe("when filled with answers", () => {
        beforeEach(() => answers.fill("A"));

        describe("but only age is specified", () => {
            beforeEach(() => { answers[188] = 18; });

            it("should return NaN scales", () =>
                expect(cattel(answers)).to.eql(createBlankScales(NaN)));
        });

        describe("but only gender is specified", () => {
            beforeEach(() => { answers[187] = "F"; });

            it("should return NaN scales", () =>
                expect(cattel(answers)).to.eql(createBlankScales(NaN)));
        });

        describe("and both gender and age are specified", () => {
            beforeEach(() => {
                answers[187] = "F";
                answers[188] = 18;
            });

            it("should return some scales", () =>
                expect(cattel(answers)).to.eql({
                    A: 4,
                    B: 3,
                    C: 5,
                    E: 7,
                    F: 4,
                    G: 4,
                    H: 6,
                    I: 4,
                    L: 7,
                    M: 6,
                    N: 5,
                    O: 7,
                    Q1: 7,
                    Q2: 6,
                    Q3: 5,
                    Q4: 6,

                    raw: {
                        A: 10,
                        B: 3,
                        C: 14,
                        E: 14,
                        F: 14,
                        G: 10,
                        H: 14,
                        I: 10,
                        L: 10,
                        M: 14,
                        N: 10,
                        O: 14,
                        Q1: 10,
                        Q2: 10,
                        Q3: 10,
                        Q4: 14,
                    },
                }));
        });
    });
});
