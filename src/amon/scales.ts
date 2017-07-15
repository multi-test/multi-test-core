import {IScaleFactory} from "../util/interfaces";

export interface IAmonScales {
    A1: number;
    A2: number;
    A3: number;
    C1: number;
    C2: number;
    C3: number;
    LO1: number;
    LO2: number;
    LO3: number;
    LI1: number;
    LI2: number;
    LI3: number;
    N1: number;
    N2: number;
    N3: number;
    S1: number;
    S2: number;
    S3: number;
}

export const createBlankScales: IScaleFactory<IAmonScales> = function (v) {
    return {
        A1: v,
        A2: v,
        A3: v,
        C1: v,
        C2: v,
        C3: v,
        LO1: v,
        LO2: v,
        LO3: v,
        LI1: v,
        LI2: v,
        LI3: v,
        N1: v,
        N2: v,
        N3: v,
        S1: v,
        S2: v,
        S3: v,
    };
};
