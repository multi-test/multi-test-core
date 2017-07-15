import {IScaleFactory} from "../util/interfaces";

export interface IEminScales {
    МП: number;
    МУ: number;
    ВП: number;
    ВУ: number;
    ВЭ: number;
    МЭИ: number;
    ВЭИ: number;
    ПЭ: number;
    УЭ: number;
    ОУ: number;
}

export const createBlankScales: IScaleFactory<IEminScales> = function (v) {
    return {
        МП: v,
        МУ: v,
        ВП: v,
        ВУ: v,
        ВЭ: v,
        МЭИ: v,
        ВЭИ: v,
        ПЭ: v,
        УЭ: v,
        ОУ: v,
    };
};
