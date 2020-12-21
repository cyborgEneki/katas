// Encrypt this!

//     You want to create secret messages which can be deciphered by the Decipher this!kata.Here are the conditions:

//     Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
//     The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin ' it simple: There are no special characters in input.


var encryptThis = function(text) {
    let textArray, encryptedText = [];

    textArray = text.split(' ');

    for (i = 0; i < textArray.length; i++) {
        let firstLetter = '',
            secondLetter = '',
            lastLetter = '',
            middleSubString = '';

        firstLetter = textArray[i].charCodeAt(0);
        secondLetter = textArray[i][1];

        if (typeof secondLetter == "undefined") {
            secondLetter = '';
        }

        if (textArray[i].length > 2) {
            lastLetter = textArray[i][textArray[i].length - 1];
        }

        if (textArray[i].length == 4) {
            middleSubString = textArray[i][2];
        }
        if (textArray[i].length > 4) {
            middleSubString = textArray[i].substring(2, textArray[i].length - 1);
        }

        encryptedText[i] = firstLetter + lastLetter + middleSubString + secondLetter;
    }

    return encryptedText.join(' ');
}