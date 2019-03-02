// Import the built-in Path module
const os = require('os');

let tm = os.totalmem();
let fm = os.freemem();

console.log(tm,fm);