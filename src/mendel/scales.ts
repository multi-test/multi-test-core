import {IScaleFactory} from "../util/interfaces";

export interface IMendelScales {
    "тревоги": number;
    "невротической депрессии": number;
    "астении": number;
    "истерического типа реагирования": number;
    "обсессивно-фобических нарушений": number;
    "вегетативных нарушений": number;
}

export const createBlankScales: IScaleFactory<IMendelScales> = (v) => ({
    "тревоги": v,
    "невротической депрессии": v,
    "астении": v,
    "истерического типа реагирования": v,
    "обсессивно-фобических нарушений": v,
    "вегетативных нарушений": v,
});
