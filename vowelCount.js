// Importing
const userInput = require('./userInputs');

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
exports.doVowelCalc = function() {
    const phrase = userInput.getInput('Enter a string to count the number of vowels in')
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

// VARS
const charsToCount = ['A','E','I','O','U'];
