//Importing 
const userInput = require('./userInputs');
const arithmetic = require('./arithmetic');
const vowelCount = require('./vowelCount');

// VARS
const welcomeMessage = 'Calculator\n============================';

const numberMode = 1;
const vowelMode = 2;
const menu = `Which calculator mode do you want?
${numberMode}) Arithmetic
${vowelMode}) Vowel counting`;





//MAIN CODE//
console.log(welcomeMessage);

//Start main loop
while (true) {
    const mode = userInput.getInput(menu);

    if (mode === '1') {
        arithmetic.doNoCalc();
    } else if (mode == '2') {
        vowelCount.doVowelCalc();       
    } else {
        console.log('Mode not recognised, please try again\n')
    }
}