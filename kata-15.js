// This time no story, no theory.The examples below show you how to write

// function accum:

// Examples:

//     accum("abcd") - > "A-Bb-Ccc-Dddd"
// accum("RqaEzty") - > "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") - > "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let i, eachUpperCase, numberOfDuplicates, eachString = '';
    s = s.toLowerCase();
    for (i = 0; i < s.length; i++) {
        eachUpperCase = s[i].toUpperCase();
        numberOfDuplicates = i + 1;
        if (numberOfDuplicates == 1) {
            eachString = eachUpperCase + '-';
        } else {
            eachString += eachUpperCase;
            for (j = 1; j < numberOfDuplicates; j++) {
                eachString += s[i];
            }
            if (i < s.length - 1) {
                eachString += '-';
            }
        }
    }
    return eachString;
}