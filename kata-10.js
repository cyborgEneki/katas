// For building the encrypted string:
//     Take every 2 n d char from the string, then the other chars, that are not every 2 n d char, and concat them as new String.
// Do this n times!

//     Examples:

//     "This is a test!", 1 - > "hsi  etTi sats!"
// "This is a test!", 2 - > "hsi  etTi sats!" - > "s eT ashi tist!"
// Write two methods:

//     function encrypt(text, n)

// function decrypt(encryptedText, n)
// For both methods:
//     If the input - string is null or empty
// return exactly this value!
//     If n is <= 0 then
// return the input text.

function encrypt(text, n) {
    let count = 1,
        i,
        newStringPartOne = newStringPartTwo = '';

    if (n <= 0 || !text) {
        finalString = text
        return finalString
    }

    while (count <= n) {
        for (i = 1; i < text.length; i = i + 2) {
            newStringPartOne += text[i]
        }
        for (i = 0; i < text.length; i = i + 2) {
            newStringPartTwo += text[i]
        }

        finalString = newStringPartOne + newStringPartTwo
        text = finalString

        newStringPartOne = newStringPartTwo = ''

        count++
    }

    return finalString
}

function decrypt(encryptedText, n) {
    let decryptedString = finalString = '',
        i,
        firstHalf,
        secondHalf,
        lengthOfHalfEncryptedString,
        countSecondHalf = countFirstHalf = 0,
        count = 1;

    if (n <= 0 || !encryptedText) {
        finalString = encryptedText;
        return finalString;
    }

    lengthOfHalfEncryptedString = Math.trunc(encryptedText.length / 2);
    firstHalf = encryptedText.substring(0, lengthOfHalfEncryptedString);
    secondHalf = encryptedText.substring(lengthOfHalfEncryptedString, encryptedText.length);

    while (count <= n) {
        for (i = 0; i < encryptedText.length; i++) {
            if (i == 0 || i % 2 == 0) {
                decryptedString += secondHalf[countSecondHalf];
                countSecondHalf++;
            } else {
                decryptedString += firstHalf[countFirstHalf];
                countFirstHalf++;
            }
        }

        firstHalf = decryptedString.substring(0, lengthOfHalfEncryptedString);
        secondHalf = decryptedString.substring(lengthOfHalfEncryptedString, encryptedText.length);
        finalString = decryptedString;
        decryptedString = '';
        countSecondHalf = countFirstHalf = 0;

        count++;
    }

    return finalString;
}