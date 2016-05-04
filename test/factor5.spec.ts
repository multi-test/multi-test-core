import factor5 from "../src/factor5/factor5";
import { createBlankScales } from "../src/factor5/scales";
import {when_filled_with as wfw, should_equal} from "./util/helpers";
import { expect } from 'chai';
import { IFactor5Scales } from "../src/factor5/scales";
import { mapValues } from 'lodash';

const when_filled_with = wfw(factor5, 75);

describe(factor5.name, () => {
    function createFactor5Scales(value) {
        return mapValues(
            createBlankScales(value),
            (val, key) => ~key.indexOf('.') ? val / 5 : val
        );
    }

    when_filled_with(undefined, createBlankScales(NaN));
    when_filled_with(-2, createFactor5Scales(75));
    when_filled_with(-1, createFactor5Scales(60));
    when_filled_with(0, createFactor5Scales(45));
    when_filled_with(1, createFactor5Scales(30));
    when_filled_with(2, createFactor5Scales(15));
});
