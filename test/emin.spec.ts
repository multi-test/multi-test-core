import { expect } from "chai";
import emin from "../src/emin/emin";
import {IEminScales} from "../src/emin/scales";
import {should_equal, when_filled_with as wfw} from "./util/helpers";

const when_filled_with = wfw(emin, 46);

describe(emin.name, () => {
    function calcEminScales([s0, s1, s2, s3, s4]): IEminScales {
        return {
            МП: s0,
            МУ: s1,
            ВП: s2,
            ВУ: s3,
            ВЭ: s4,
            МЭИ: s0 + s1,
            ВЭИ: s2 + s3 + s4,
            ПЭ: s0 + s2,
            УЭ: s1 + s3 + s4,
            ОУ: s0 + s1 + s2 + s3 + s4,
        };
    }

    when_filled_with(undefined, calcEminScales([NaN, NaN, NaN, NaN, NaN]));
    when_filled_with(0, calcEminScales([9, 15, 21, 9, 12]));
    when_filled_with(1, calcEminScales([15, 15, 17, 10, 11]));
    when_filled_with(2, calcEminScales([21, 15, 13, 11, 10]));
    when_filled_with(3, calcEminScales([27, 15, 9, 12, 9]));
});
