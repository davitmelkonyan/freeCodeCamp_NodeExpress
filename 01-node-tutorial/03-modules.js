// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

/*
const secret = 'SUPER SECRET'
const john = 'john'
const peter = 'peter'
const sayHi = (name) =>{
    console.log(`Hello ${name}`);
}*/
const name = require('./04-names')
console.log(name)
const func = require('./05-utils')
func('susan')
func(name.john)
func(name.peter)

const data = require('./06-alternative-flavor')
console.log(data)