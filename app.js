//npm --version

//npm i <packageName> local dependency
//npm install -g <packageName> global dependency

//package.json stores project and package info
//can create manually or use:
//npm init
//npm init -y (default settings)

const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)