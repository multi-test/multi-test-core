import {IScaleFactory} from "../util/interfaces";

export interface IAlexithymiaScale {
    A: number;
}

export const createBlankScales: IScaleFactory<IAlexithymiaScale> = function (v) {
    return {
        A: v,
    };
};
