/* global describe, beforeEach, it, expect */
import {expect} from "chai";
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
            beforeEach(() => {
                answers[188] = 18;
            });

            it("should return NaN scales", () =>
                expect(cattel(answers)).to.eql(createBlankScales(NaN)));
        });

        describe("but only gender is specified", () => {
            beforeEach(() => {
                answers[187] = "F";
            });

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

    it("real data test #1", () => {
        answers = [
            "A", "A", "C", "C",
            "A", "A", "B", "A",
            "A", "C", "B", "B",
            "C", "A", "A", "A",
            "A", "A", "A", "B",
            "B", "C", "B", "B",
            "C", "B", "A", "A",
            "A", "B", "A", "A",
            "B", "C", "A", "C",
            "B", "A", "B", "A",
            "C", "A", "A", "C",
            "A", "B", "B", "C",
            "A", "A", "B", "B",
            "A", "B", "B", "B",
            "A", "C", "C", "B",
            "B", "C", "C", "B",
            "A", "C", "C", "C",
            "A", "A", "A", "A",
            "A", "A", "C", "C",
            "C", "B", "B", "B",
            "A", "A", "C", "B",
            "A", "A", "B", "A",
            "C", "A", "A", "B",
            "C", "C", "B", "C",
            "C", "A", "A", "C",
            "C", "A", "B", "B",
            "C", "A", "A", "A",
            "B", "C", "B", "B",
            "C", "C", "C", "B",
            "A", "B", "A", "C",
            "B", "C", "A", "A",
            "C", "B", "A", "A",
            "A", "C", "A", "C",
            "C", "A", "B", "C",
            "B", "B", "B", "C",
            "A", "A", "A", "C",
            "C", "A", "B", "B",
            "A", "B", "B", "C",
            "A", "B", "C", "C",
            "B", "A", "B", "A",
            "C", "B", "C", "A",
            "B", "A", "C", "B",
            "A", "C", "A", "B",
            "C", "A", "C", "C",
            "B", "B", "C", "A",
            "B", "C", "C", "A",
            "A", "C", "A",
            "F", 51, // K***rova
        ];

        expect(cattel(answers)).to.eql({
            "A": 3,
            "B": 4,
            "C": 1,
            "E": 4,
            "F": 1,
            "G": 6,
            "H": 3,
            "I": 4,
            "L": 10,
            "M": 3,
            "N": 9,
            "O": 10,
            "Q1": 8,
            "Q2": 10,
            "Q3": 4,
            "Q4": 10,

            "raw": {
                "A": 7,
                "B": 4,
                "C": 6,
                "E": 7,
                "F": 2,
                "G": 15,
                "H": 6,
                "I": 10,
                "L": 14,
                "M": 9,
                "N": 15,
                "O": 20,
                "Q1": 12,
                "Q2": 18,
                "Q3": 9,
                "Q4": 25,
            },
        });
    });

    it("real data test #2", () => {
        answers = [
          "A", "A", "C", "A",
          "A", "B", "B", "C",
          "A", "A", "B", "A",
          "A", "A", "A", "A",
          "B", "C", "A", "A",
          "B", "A", "C", "C",
          "A", "B", "B", "A",
          "A", "A", "C", "B",
          "B", "A", "C", "B",
          "B", "A", "A", "A",
          "B", "C", "C", "B",
          "A", "C", "C", "C",
          "C", "A", "A", "A",
          "C", "B", "C", "C",
          "A", "C", "C", "A",
          "C", "A", "A", "C",
          "A", "B", "A", "A",
          "A", "A", "A", "A",
          "A", "B", "A", "C",
          "B", "B", "C", "A",
          "B", "A", "A", "B",
          "C", "B", "A", "A",
          "A", "C", "C", "A",
          "A", "A", "C", "A",
          "A", "A", "A", "B",
          "A", "B", "C", "C",
          "A", "C", "A", "A",
          "A", "A", "A", "C",
          "A", "A", "B", "C",
          "C", "C", "A", "A",
          "C", "C", "C", "A",
          "A", "C", "B", "B",
          "C", "A", "A", "C",
          "C", "C", "A", "A",
          "C", "B", "C", "C",
          "A", "C", "A", "C",
          "C", "A", "C", "A",
          "B", "A", "C", "C",
          "A", "B", "A", "C",
          "A", "A", "A", "B",
          "C", "C", "A", "A",
          "A", "C", "A", "A",
          "C", "B", "A", "A",
          "C", "A", "C", "C",
          "B", "C", "C", "A",
          "C", "A", "A", "A",
          "A", "C", "A",
          "M", 50, // T***ko"v
        ];

        expect(cattel(answers)).to.eql({
            A: 6,
            B: 3,
            C: 4,
            E: 6,
            F: 4,
            G: 3,
            H: 8,
            I: 7,
            L: 9,
            M: 5,
            N: 1,
            O: 6,
            Q1: 4,
            Q2: 7,
            Q3: 7,
            Q4: 7,
            raw: {
                A: 10,
                B: 3,
                C: 13,
                E: 14,
                F: 9,
                G: 10,
                H: 20,
                I: 11,
                L: 14,
                M: 11,
                N: 5,
                O: 11,
                Q1: 8,
                Q2: 12,
                Q3: 14,
                Q4: 13,
            },
        });
    });
});
