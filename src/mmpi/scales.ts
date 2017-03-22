import {IScaleFactory} from "../util/interfaces";

export interface IMMPIScales {
    "L": number;
    "F": number;
    "K": number;
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "6": number;
    "7": number;
    "8": number;
    "9": number;

    "TL": number;
    "TF": number;
    "TK": number;
    "T1": number;
    "T2": number;
    "T3": number;
    "T4": number;
    "T6": number;
    "T7": number;
    "T8": number;
    "T9": number;
}

export const createBlankScales: IScaleFactory<IMMPIScales> = (v) => ({
    "L": v,
    "F": v,
    "K": v,
    "1": v,
    "2": v,
    "3": v,
    "4": v,
    "6": v,
    "7": v,
    "8": v,
    "9": v,
    "TL": v,
    "TF": v,
    "TK": v,
    "T1": v,
    "T2": v,
    "T3": v,
    "T4": v,
    "T6": v,
    "T7": v,
    "T8": v,
    "T9": v,
});
