export interface IScaleReducer<TScales> {
    (scales: TScales, value: any, index: number): TScales;
}

export interface IScaleMapper<TScales> {
    (scales: TScales): TScales;
}

export interface IScaleFactory<TScales> {
    (defaultValue: any): TScales;
}

export interface IAnswersValidator<TScales> {
    (answers: any[]): TScales;
}

export type IAnswerValidator = (answer: any, index: number, answers: any[]) => boolean;
