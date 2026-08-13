const { log } = require('console');
const path = require('path');

const myPath = 'C:\Users\DUBAI LAPTOP BAZAR\Desktop\Sigma Web\Node.JS\module\people.js';
// path diye dicche
console.log(path.basename(myPath));

// kun directory te ache seta bole dicche 
console.log(path.dirname(myPath));

// extension name
console.log(path.extname(myPath));

// whole info
console.log(path.parse(myPath));
