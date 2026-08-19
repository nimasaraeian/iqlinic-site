const fs = require('node:fs');
const assert = require('node:assert');

const css = fs.readFileSync('architecture-visuals.css', 'utf8');
assert.doesNotMatch(css, /min-width:\s*860px/);
assert.match(css, /@media\(min-width:1200px\)/);
assert.match(css, /@media\(max-width:760px\)/);
assert.match(css, /TAP TO VIEW FULL SIZE/);
assert.match(css, /max-width:1320px/);
assert.match(css, /touch-action:manipulation/);
assert.match(css, /overflow-x:hidden/);

console.log('Responsive architecture checks passed.');
