// Importing
const readline = require('readline-sync');

// FUNCTIONS //

// Get an input
function getInput(message) {
    console.log(message);
    return readline.prompt();
}

// Check if a variable is a number
function IsNo(input) {
    
    const test = +input;

    if (isNaN(test)) {
        return false;
    } else {
        return true;
    }
}

// Get a user inputed number prompted by message
function getNumber(message) {
    
    const input = getInput(message);

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
    const supportedOpsString = supportedOps.join(', ');
    const op = getInput(`Enter an operator please. Supported operators are ${supportedOpsString}.`);
    
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
    const toEnter = getNumber(`How many numbers do you want to ${op}?`);
    var nos = Array(toEnter);

    for (var i = 1; i<=toEnter; i++) {
        nos[i-1]= getNumber(`Number ${i}:`);
    }

    return nos;
}

// Gets the answer to the calculation
function getNoAns(op,nos) {
    const opFunction = getOperatorFunction(op);

    let ans = nos[0];
    
    for (let i = 1; i<nos.length; i++) {
        ans = opFunction(ans,nos[i]);
    }

    return ans;
}

//Does a calculation
function doNoCalc() {
    const op = getOperator();
    const nos = getNos(op);
    const ans = getNoAns(op,nos)

    console.log(`the answer is: ${ans}\n`);
}

//Prints the properties of an object
function printObject(obj) {
    var result = `The character counts are:\n\n`;
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += `${i}: ${obj[i]}\n`;
        }
    }
    console.log(result)
}

//Does a vowel calculation
function doVowelCalc() {
    const phrase = getInput('Enter a string to count the number of vowels in')
    const phraseUpperCased = phrase.toUpperCase();
    var ans = new Object();
    
    for (i=0;i<charsToCount.length;i++) {
        const char = charsToCount[i];
        var count = 0;
        var string = phraseUpperCased;
        
        while (string.lastIndexOf(char) >= 0) {
            string = string.slice(0,string.lastIndexOf(char));
            count++
        }

        ans[char] = count;

    }

    printObject(ans);

}

/////////////////////////////////////////////////////////////
// VARS
const supportedOps = ['+','-','*','/'] ;
const numberMode = 1;
const wordMode = 2;
const menu = `Which calculator mode do you want?
1) Arithmetic
2) Vowel counting`
var charsToCount = ['A','E','I','O','U'];



//MAIN CODE//
printWelcome();

//Start main loop
while (true) {
    const mode = getInput(menu);

    if (mode === '1') {
        doNoCalc();
    } else if (mode == '2') {
        doVowelCalc();       
    } else {
        console.log('Mode not recognised, please try again\n')
    }
}