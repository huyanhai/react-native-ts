const {resolve} = require('path');
const {readFileSync, writeFileSync} = require('fs');

const fileDir = resolve(__dirname, '../src/assets/fonts/');

const fileContext = readFileSync(resolve(fileDir, 'iconfont.json'), 'utf-8');

const ctxToJson = JSON.parse(fileContext).glyphs;

const toFormat = {};

ctxToJson.forEach(item => {
  const {font_class, unicode_decimal} = item;
  toFormat[`icon-${font_class}`] = unicode_decimal;
});

writeFileSync(resolve(fileDir, 'format.json'), JSON.stringify(toFormat, 2, ''));
