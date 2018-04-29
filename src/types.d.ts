declare interface IScaleReducer<TScales, TAnswer> {
    (scales: TScales, value: TAnswer, index: number): TScales;
}

declare interface IScaleMapper<TScales> {
    (scales: TScales): TScales;
}

declare interface IScaleFactory<TScales> {
    (defaultValue: number): TScales;
}

declare interface IAnswersValidator<TAnswer> {
    (answers: any[]): answers is TAnswer[];
}
