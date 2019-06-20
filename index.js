// Importing
const readline = require('readline-sync');

// FUNCTIONS //

// Check if a variable is a number
function IsNo(input) {
    
    const test = +input;

    if (isNaN(input)) {
        return false;
    } else {
        return true;
    }
}

// Get a user inputed number prompted by message
function getNumber(message) {
    
    console.log(message);
    const input = readline.prompt();

    if (IsNo(input)) {
        const number = +input;
        return number;
    } else {
        console.log('Please enter a valid number!');
        return getNumber(message);
    }

}

// Prints the welcome message
function printWelcome() {
    console.log('Calculator\n============================');
}

// Gets the operator
function getOperator() {
    console.log('Enter an operator please')
    const op = readline.prompt();
    const supportedOps = ['+','-','*','/'] ;
    
    if (supportedOps.includes(op)) {
        return op;
    } else {
        console.log('Unsupported operator! Please try again');
        return getOperator();
    }

}

// Gets the operator as a binary function
function getOperatorFunction(op) {
    
    switch (op){
    
        case '+': {
            var opFunction = function(x,y) {return x+y;} ;
            break;
        }
    
        case '-': {
            var opFunction = function(x,y) {return x-y;} ;
            break;
        }
    
        case '*': {
            var opFunction = function(x,y) {return x*y;} ;
            break;
        }
    
        case '/': {
            var opFunction = function(x,y) {return x/y;} ;
            break;
        }
    }

    return opFunction;
}

// Gets the list of numbers to perform the operator to
function getNos(op) {
    const toEnter = getNumber('How many numbers do you want to '+op);
    var nos = Array(toEnter);

    for (var i = 1; i<=toEnter; i++) {
        nos[i-1]= getNumber('Number ' + i);
    }

    return nos
}

// Gets the answer to the calculation
function getAns(op,nos) {
    const opFunction = getOperatorFunction(op);

    let ans = nos[0]
    
    for (let i = 1; i<nos.length; i++) {
        ans = opFunction(ans,nos[i])
    }

    return ans;
}

//MAIN CODE//
printWelcome();

//Start main loop
while (true) {
    
    const op = getOperator();
    const nos = getNos(op);
    const ans = getAns(op,nos)

    console.log('The answer is: ' + ans)
    console.log('')

}