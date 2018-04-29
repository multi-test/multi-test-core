import {AmonScales} from "./types";

export const createBlankScales: IScaleFactory<AmonScales> = function (v: number) {
    return {
        A1: v,
        A2: v,
        A3: v,
        C1: v,
        C2: v,
        C3: v,
        LI1: v,
        LI2: v,
        LI3: v,
        LO1: v,
        LO2: v,
        LO3: v,
        N1: v,
        N2: v,
        N3: v,
        S1: v,
        S2: v,
        S3: v,
    };
};
