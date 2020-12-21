// Complete the method / function so that it converts dash / underscore delimited words into camel casing.The first word within the output should be capitalized only
// if the original word was capitalized(known as Upper Camel Case, also often referred to as Pascal
//     case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
    if (str == '') {
        return '';
    }

    let hyphenPattern = /-/,
        underscorePattern = /_/,
        arrayStr = [],
        transformedArrayStr = [];
    if (hyphenPattern.test(str)) {
        arrayStr = str.split('-');
    }
    if (underscorePattern.test(str)) {
        arrayStr = str.split('_');
    }

    for (i = 0; i < arrayStr.length; i++) {
        if (i == 0) {
            transformedArrayStr[i] = arrayStr[i]
        } else {
            transformedArrayStr[i] = arrayStr[i][0].toUpperCase() + arrayStr[i].substring(1, arrayStr[i].length)
        }
    }

    return transformedArrayStr.join('');
}