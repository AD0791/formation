// Import the built-in Path module
const os = require('os');

let tm = os.totalmem();
let fm = os.freemem();
 
//Template string 
console.log('total memory: ',tm);
console.log('free memory:', fm);
