const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./example/first.txt', 'utf-8')
const second = readFileSync('./example/second.txt', 'utf-8')

writeFileSync('./example/third-result.txt', `Hello world`, {flag: 'a'})
console.log('done with this task')
console.log('starting the next one')