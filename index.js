const readline = require('readline-sync');

console.log('Calculator init \nPlease enter an operator and 2 numbers');
console.log('Operator')
const op = readline.prompt(); 

console.log('Number 1: ');
var x = readline.prompt();
x = parseFloat(x);

console.log('Number 2: ');
var y = readline.prompt();
y= parseFloat(y);

switch (op) {
    case '+':
        console.log(x+y);
        break;
    case '/':
        console.log(x/y);
        break;
    case '*':
        console.log(x*y);
        break;
    case '-':
        console.log(x-y);
        break;
    default:
        console.log('Sorry, \"'+ op +'\" is not a supported operator, please enter one of +,-,* or /');
        break;
}