// Complete the method / function so that it converts dash / underscore delimited words into camel casing.The first word within the output should be capitalized only
// if the original word was capitalized(known as Upper Camel Case, also often referred to as Pascal
//     case).

function toCamelCase(str) {
    const regexWithHyphen = new RegExp('-', 'g');
    const regexWithUnderscore = new RegExp('_', 'g');
    let newArray = [];

    if (regexWithHyphen.test(str)) {
        array = str.split('-');
        createArrayWithCamelCase(array)
    }

    if (regexWithUnderscore.test(str)) {
        array = str.split('_');
        createArrayWithCamelCase(array)
    }

    function createArrayWithCamelCase(array) {
        for (i = 0; i < array.length; i++) {
            if (i == 0) {
                newArray.push(array[i]);
            } else {
                titleCaseWord = array[i][0].toUpperCase() + array[i].slice(1, array[i].length)
                newArray.push(titleCaseWord);
            }
        }
    }

    if (!str) {
        camelCaseString = '';
    }

    camelCaseString = newArray.join('');

    return camelCaseString
}