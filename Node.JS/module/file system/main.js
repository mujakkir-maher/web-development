// file read kora, write kora, add kora, baad dewa etc kaaj kori
const fs = require('fs');
//file write kora
fs.writeFileSync('myfile.txt', 'Hello programmers.');
fs.appendFileSync('myfile.txt', 'How are you?');

//file read
const data = fs.readFileSync('myfile.txt');
console.log(data); // eivabe likhle file er buffer format chole asbe
console.log(data.toString());

console.log();

console.log('this an example of async');

fs.readFile('myfile.txt', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
});

console.log('hello brogrammer');


