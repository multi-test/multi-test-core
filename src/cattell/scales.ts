import {IScaleFactory} from "../util/interfaces";

export interface ICattellScales {
    A: number;
    B: number;
    C: number;
    E: number;
    F: number;
    G: number;
    H: number;
    I: number;
    L: number;
    M: number;
    N: number;
    O: number;
    Q1: number;
    Q2: number;
    Q3: number;
    Q4: number;

    raw?: ICattellScales;
}

export const createBlankScales: IScaleFactory<ICattellScales> = function (v) {
    return {
        A: v,
        B: v,
        C: v,
        E: v,
        F: v,
        G: v,
        H: v,
        I: v,
        L: v,
        M: v,
        N: v,
        O: v,
        Q1: v,
        Q2: v,
        Q3: v,
        Q4: v,
    };
};
