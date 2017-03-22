import {IScaleFactory} from "../util/interfaces";

export interface ISpaScales {
    "1a": number;
    "1b": number;
    "2a": number;
    "2b": number;
    "3a": number;
    "3b": number;
    "4a": number;
    "4b": number;
    "5a": number;
    "5b": number;
    "6a": number;
    "6b": number;
    "7a": number;
    "7b": number;
    "8": number;
    "A": number;
    "S": number;
    "L": number;
    "E": number;
    "I": number;
    "D": number;
}

export const createBlankScales: IScaleFactory<ISpaScales> = function (v) {
    return {
        "1a": v,
        "1b": v,
        "2a": v,
        "2b": v,
        "3a": v,
        "3b": v,
        "4a": v,
        "4b": v,
        "5a": v,
        "5b": v,
        "6a": v,
        "6b": v,
        "7a": v,
        "7b": v,
        "8": v,
        "A": v,
        "S": v,
        "L": v,
        "E": v,
        "I": v,
        "D": v,
    };
};
