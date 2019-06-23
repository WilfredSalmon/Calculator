//Importing 
const userInput = require('./userInputs');

// Gets the operator
function getOperator() {
    const supportedOpsString = supportedOps.join(', ');
    const op = userInput.getInput(`Enter an operator please. Supported operators are ${supportedOpsString}.`);
    
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
    const toEnter = userInput.getNumber(`How many numbers do you want to ${op}?`);
    var nos = Array(toEnter);

    for (var i = 1; i<=toEnter; i++) {
        nos[i-1]= userInput.getNumber(`Number ${i}:`);
    }

    if (op == '/') {
        nos = nos.filter( function(currentValue) {return currentValue != 0;});
    }
    
    return nos;
}

// Gets the answer to the calculation
function getNoAns(op,nos) {
    const opFunction = getOperatorFunction(op);

    ans = nos.reduce(function (accumulator,currentValue) {return opFunction(accumulator,currentValue)});

    return ans;
}

//Does a calculation
exports.doNoCalc = function() {
    const op = getOperator();
    const nos = getNos(op);
    const ans = getNoAns(op,nos)

    console.log(`the answer is: ${ans}\n`);
}

// VARS 
const supportedOps = ['+','-','*','/'] ;