import {IScaleFactory} from "../util/interfaces";

export interface IFactor5Scales {
    "I": number;
    "I.1": number;
    "I.2": number;
    "I.3": number;
    "I.4": number;
    "I.5": number;
    "II": number;
    "II.1": number;
    "II.2": number;
    "II.3": number;
    "II.4": number;
    "II.5": number;
    "III": number;
    "III.1": number;
    "III.2": number;
    "III.3": number;
    "III.4": number;
    "III.5": number;
    "IV": number;
    "IV.1": number;
    "IV.2": number;
    "IV.3": number;
    "IV.4": number;
    "IV.5": number;
    "V": number;
    "V.1": number;
    "V.2": number;
    "V.3": number;
    "V.4": number;
    "V.5": number;
}

export const createBlankScales: IScaleFactory<IFactor5Scales> = function (v) {
    return {
        "I": v,
        "I.1": v,
        "I.2": v,
        "I.3": v,
        "I.4": v,
        "I.5": v,
        "II": v,
        "II.1": v,
        "II.2": v,
        "II.3": v,
        "II.4": v,
        "II.5": v,
        "III": v,
        "III.1": v,
        "III.2": v,
        "III.3": v,
        "III.4": v,
        "III.5": v,
        "IV": v,
        "IV.1": v,
        "IV.2": v,
        "IV.3": v,
        "IV.4": v,
        "IV.5": v,
        "V": v,
        "V.1": v,
        "V.2": v,
        "V.3": v,
        "V.4": v,
        "V.5": v,
    };
};
