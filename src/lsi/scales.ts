import {IScaleFactory} from "../util/interfaces";

export interface ILSIScales {
    A: number;
    B: number;
    C: number;
    D: number;
    E: number;
    F: number;
    G: number;
    H: number;
    TA: number;
    TB: number;
    TC: number;
    TD: number;
    TE: number;
    TF: number;
    TG: number;
    TH: number;
}

export const createBlankScales: IScaleFactory<ILSIScales> = (v) => ({
    A: v,
    B: v,
    C: v,
    D: v,
    E: v,
    F: v,
    G: v,
    H: v,
    TA: v,
    TB: v,
    TC: v,
    TD: v,
    TE: v,
    TF: v,
    TG: v,
    TH: v,
});
