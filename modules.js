// const xyz = require('./people');
const { people, ages } = require('./people');

// console.log(xyz);
// console.log(xyz.ages);
console.log(people, ages);

// import core modules built into it
const os = require('os');

console.log(os.platform(), os.homedir());