let data = {}

let LZString = require('./lz-string.js')
let result = LZString.compressToBase64(JSON.stringify(data))
console.log(result)
