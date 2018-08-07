#!/bin/bash

tsc -m es6
rm -rf lib
mkdir lib

(rollup dist/src/index.js --file lib/index.js -c scripts/rollup.config.js) & \
(rollup dist/src/alexithymia/alexithymia.js --file lib/alexithymia.js -c scripts/rollup.config.js) & \
(rollup dist/src/amon/amon.js --file lib/amon.js -c scripts/rollup.config.js) & \
(rollup dist/src/cattell/cattell.js --file lib/cattell.js -c scripts/rollup.config.js) & \
(rollup dist/src/emin/emin.js --file lib/emin.js -c scripts/rollup.config.js) & \
(rollup dist/src/factor5/factor5.js --file lib/factor5.js -c scripts/rollup.config.js) & \
(rollup dist/src/lsi/lsi.js --file lib/lsi.js -c scripts/rollup.config.js) & \
(rollup dist/src/maddi/maddi.js --file lib/maddi.js -c scripts/rollup.config.js) & \
(rollup dist/src/mendel/mendel.js --file lib/mendel.js -c scripts/rollup.config.js) & \
(rollup dist/src/mmpi/mmpi.js --file lib/mmpi.js -c scripts/rollup.config.js) & \
(rollup dist/src/spa/spa.js --file lib/spa.js -c scripts/rollup.config.js) & \
(rollup dist/src/usk/usk.js --file lib/usk.js -c scripts/rollup.config.js) & \
wait
