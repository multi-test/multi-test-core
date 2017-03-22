/* global describe, beforeEach, it, expect */
import { expect } from "chai";
import alexithymia from "../src/alexithymia/alexithymia";
import {should_equal, when_filled_with as wfw} from "./util/helpers";

const when_filled_with = wfw(alexithymia, 26);

describe(alexithymia.name, () => {
    const calculate = (value) => 16 * (1 + value) + 10 * (5 - value);

    when_filled_with(undefined, { A: calculate(NaN) });
    when_filled_with(0, { A: calculate(0) });
    when_filled_with(1, { A: calculate(1) });
    when_filled_with(2, { A: calculate(2) });
    when_filled_with(3, { A: calculate(3) });
    when_filled_with(4, { A: calculate(4) });
});
