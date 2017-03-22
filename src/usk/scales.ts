import {IScaleFactory} from "../util/interfaces";

export interface IUSKScales {
    "Ио": number;
    "Ид": number;
    "Ин": number;
    "Ис": number;
    "Ип": number;
    "Им": number;
    "Из": number;
}

export const createBlankScales: IScaleFactory<IUSKScales> = function (v): IUSKScales {
    return {
        "Ио": v,
        "Ид": v,
        "Ин": v,
        "Ис": v,
        "Ип": v,
        "Им": v,
        "Из": v,
    };
};
