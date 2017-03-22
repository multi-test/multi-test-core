import {IScaleReducer} from "../util/interfaces";

export default function combineReducers<T>(reducers: Array<IScaleReducer<T>>): IScaleReducer<T> {
    return function rootReducer(scales: T, value: any, index: number) {
        return reducers.reduce((acc: T, reducer: IScaleReducer<T>) => {
            return reducer(acc, value, index + 1);
        }, scales);
    };
}
