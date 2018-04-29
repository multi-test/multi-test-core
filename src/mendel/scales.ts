export interface IMendelScales {
    "астении": number;
    "вегетативных нарушений": number;
    "истерического типа реагирования": number;
    "невротической депрессии": number;
    "обсессивно-фобических нарушений": number;
    "тревоги": number;
}

export const createBlankScales: IScaleFactory<IMendelScales> = (v: number) => ({
    "астении": v,
    "вегетативных нарушений": v,
    "истерического типа реагирования": v,
    "невротической депрессии": v,
    "обсессивно-фобических нарушений": v,
    "тревоги": v,
});
