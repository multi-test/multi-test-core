import { values } from 'lodash';

export function should_equal(expectedScales) {
    const arr = values(expectedScales).join(', ');
    return `has scales = [${arr}]`;
}
