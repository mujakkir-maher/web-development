const os = require('os');
// operating system name
console.log(os.platform());
// kototuk memory free ache seta dekhabe
console.log(os.freemem());
// cpu core
//console.log(os.cpus());

console.log('CPU:', os.cpus().length);
console.log('Total RAM:', os.totalmem() / (1024 ** 3), 'GB');
console.log('Free RAM:', os.freemem() / (1024 ** 3), 'GB');