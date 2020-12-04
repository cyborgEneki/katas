// Coding in function alienLanguage,
//     function accept 1 parameter: str.str is a sentence.

// We translate the sentence into an alien language according to the following rules:

//     Each word in the sentence is separated by spaces.The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized.Looks very strange ? Because this is the form of alien language; - )

// for example:

//     alienLanguage("My name is John") should
// return "My NAMe Is JOHn"
// alienLanguage("this is an example") should
// return "THIs Is An EXAMPLe"
// alienLanguage("Hello World") should
// return "HELLo WORLd"

function alienLanguage(str) {
    let newStringArray = [];
    array = str.split(' ');

    for (i = 0; i < array.length; i++) {
        precedingLetters = array[i].slice(0, array[i].length - 1).toUpperCase();
        lastLetter = array[i][array[i].length - 1].toLowerCase();
        newStringArray.push(precedingLetters + lastLetter);
    }

    return newStringArray.join(' ');
}