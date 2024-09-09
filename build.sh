#!/usr/env/bin bash

THIS_SCRIPT="$(readlink -f "${BASH_SOURCE[0]}")"
cd "$(dirname "$THIS_SCRIPT")"

rm -rf ./lib/khmer-normalizer ./lib/i18next ./lib/array-shuffle
mkdir -p ./lib/khmer-normalizer
mkdir -p ./lib/i18next
mkdir -p ./lib/array-shuffle
cp ./node_modules/khmer-normalizer/build/src/khnormal.js ./lib/khmer-normalizer/
cp ./node_modules/i18next/dist/esm/i18next.js ./lib/i18next/
cp ./node_modules/array-shuffle/index.js ./lib/array-shuffle/
