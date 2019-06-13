const readline = require('readline-sync');

console.log('Calculator\n============================');
console.log('Enter an operator please')
const op = readline.prompt(); 

console.log('How many numbers do you want to '+op)
const toEnter = +readline.prompt();

nos = Array(toEnter);

for (var i = 1; i<=toEnter; i++) {
    console.log('Number ' + i +' ');
    nos[i-1]= +readline.prompt();
}

console.log(nos);
var ans = nos[0];

switch (op){
    
    case '+': {
        for (var i = 1; i < nos.length; i++) {
            ans += nos[i];
        }
        break;
    }

    case '-': {
        for (var i = 1; i < nos.length; i++) {
            ans -= nos[i];
        }
        break;
    }

    case '*': {
        for (var i = 1; i < nos.length; i++) {
            ans *= nos[i];
        }
        break;
    }

    case '/': {
        for (var i = 1; i < nos.length; i++) {
            ans /= nos[i];
        }
        break;
    }

    default:
        console.log('Unsupported Operator')
        break;
}

console.log('The answer is: ' + ans)