import spa from "../src/spa/spa";
import { should_equal } from './util/helpers';
import { expect } from 'chai';

xdescribe('SPA Test', () => {
//     let subject;
// 
//     beforeEach(() => subject = new SPA());
// 
//     function SPAScales(scales) {
//         const {
//             1: [e1a, e1b],
//             2: [e2a, e2b],
//             3: [e3a, e3b],
//             4: [e4a, e4b],
//             5: [e5a, e5b],
//             6: [e6a, e6b],
//             7: [e7a, e7b],
//             8: e8,
//         } = scales;
// 
//         this['1a'] = { value: e1a };
//         this['1b'] = { value: e1b };
//         this['2a'] = { value: e2a };
//         this['2b'] = { value: e2b };
//         this['3a'] = { value: e3a };
//         this['3b'] = { value: e3b };
//         this['4a'] = { value: e4a };
//         this['4b'] = { value: e4b };
//         this['5a'] = { value: e5a };
//         this['5b'] = { value: e5b };
//         this['6a'] = { value: e6a };
//         this['6b'] = { value: e6b };
//         this['7a'] = { value: e7a };
//         this['7b'] = { value: e7b };
//         this['8'] = { value: e8 };
//         this.A = { value: Math.round(100 * e1a / (e1a + e1b)) };
//         this.S = { value: Math.round(100 * e3a / (e3a + e3b)) };
//         this.L = { value: Math.round(100 * 1.2 * e4a / (1.2 * e4a + e4b)) };
//         this.E = { value: Math.round(100 * e5a / (e5a + e5b)) };
//         this.I = { value: Math.round(100 * e6a / (e6a + 1.4 * e6b)) };
//         this.D = { value: Math.round(100 * 2 * e7a / (2 * e7a + e7b)) };
//     }
// 
//     describe('even when empty', () => {
//         it('should calculate without errors', () => {
//             expect(() => subject.calculate()).not.to.throw();
//         });
//     });
// 
//     [undefined, 0, 2, 3, 4, 5, 6].forEach(value => {
//         describe(`when filled with ${value}`, () => {
//             beforeEach(() => subject.answers.fill(value));
// 
//             const expected = new SPAScales({
//                 1: [34 * value, 34 * value],
//                 2: [5 * value, 4 * value],
//                 3: [11 * value, 7 * value],
//                 4: [6 * value, 7 * value],
//                 5: [7 * value, 7 * value],
//                 6: [14 * value, 8 * value],
//                 7: [3 * value, 6 * value],
//                 8: 5 * value,
//             });
// 
//             it(should_equal(expected), () => {
//                 expect(subject.calculate()).to.eql(expected);
//             });
//         });
//     });
});
