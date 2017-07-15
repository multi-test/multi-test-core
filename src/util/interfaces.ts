export interface IScaleReducer<TScales> {
    <TAnswer>(scales: TScales, value: TAnswer, index: number): TScales;
}

export interface IScaleFactory<TScales> {
    (defaultValue: any): TScales;
}

export interface IAnswersValidator<TScales> {
    (answers: any[]): TScales;
}