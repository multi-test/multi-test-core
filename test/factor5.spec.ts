import factor5 from "../src/factor5/factor5";
import { createBlankScales } from "../src/factor5/scales";
import {when_filled_with as wfw, should_equal} from "./util/helpers";
import { expect } from 'chai';
import { IFactor5Scales } from "../src/factor5/scales";

const when_filled_with = wfw(factor5, 75);

xdescribe(factor5.name, () => {
    when_filled_with(undefined, createBlankScales(NaN));
    when_filled_with(-2, createBlankScales(0));
    when_filled_with(-1, createBlankScales(0));
    when_filled_with(0, createBlankScales(0));
    when_filled_with(1, createBlankScales(0));
    when_filled_with(2, createBlankScales(0));
});
