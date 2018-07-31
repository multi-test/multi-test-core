import {IScaleFactory} from "../util/interfaces";

export type IMaddiAnswer = 0 | 1 | 2 | 3;

export interface IMaddiScales {
    "hardiness": number;
    "commitment": number;
    "control": number;
    "challenge": number;
}

export const createBlankScales: IScaleFactory<IMaddiScales> = (v) => ({
    hardiness: v,
    commitment: v,
    control: v,
    challenge: v,
});
