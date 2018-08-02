#!/bin/bash

tsc -m es6
rm -rf lib
mkdir lib

(rollup dist/src/index.js --file lib/index.js --format cjs) & \
(rollup dist/src/alexithymia/alexithymia.js --file lib/alexithymia.js --format cjs) & \
(rollup dist/src/amon/amon.js --file lib/amon.js --format cjs) & \
(rollup dist/src/cattell/cattell.js --file lib/cattell.js --format cjs) & \
(rollup dist/src/emin/emin.js --file lib/emin.js --format cjs) & \
(rollup dist/src/factor5/factor5.js --file lib/factor5.js --format cjs) & \
(rollup dist/src/lsi/lsi.js --file lib/lsi.js --format cjs) & \
(rollup dist/src/maddi/maddi.js --file lib/maddi.js --format cjs) & \
(rollup dist/src/mendel/mendel.js --file lib/mendel.js --format cjs) & \
(rollup dist/src/mmpi/mmpi.js --file lib/mmpi.js --format cjs) & \
(rollup dist/src/spa/spa.js --file lib/spa.js --format cjs) & \
(rollup dist/src/usk/usk.js --file lib/usk.js --format cjs) & \
wait
