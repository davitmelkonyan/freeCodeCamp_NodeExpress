const lodash  = require('lodash');

const arr = [1,[2,[4,[3]]]]
const newItems = lodash.flattenDeep(arr)
console.log(newItems)


