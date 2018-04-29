import {EminScales} from "./types";

export const createBlankScales: IScaleFactory<EminScales> = function (v) {
    return {
        ВП: v,
        ВУ: v,
        ВЭ: v,
        ВЭИ: v,
        МП: v,
        МУ: v,
        МЭИ: v,
        ОУ: v,
        ПЭ: v,
        УЭ: v,
    };
};
