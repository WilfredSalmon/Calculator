const readline = require('readline-sync');

console.log('Calculator init \nPlease enter two numbers to multiply');
console.log('Number 1: ');
var x = readline.prompt();
x = parseFloat(x);

console.log('Number 2: ');
var y = readline.prompt();
y= parseFloat(y);

console.log(x*y)