// A pangram is a sentence that contains every single letter of the alphabet at least once.For example, the sentence "The quick brown fox jumps over the lazy dog"
// is a pangram, because it uses the letters A - Z at least once(
//     case is irrelevant).

// Given a string, detect whether or not it is a pangram.Return True
// if it is, False
// if not.Ignore numbers and punctuation.

function isPangram(string) {
    let alphabetString = "qwertyuioplkjhgfdsazxcvbnm",
        alphabetArray,
        i;

    alphabetArray = alphabetString.split('');

    for (i = 0; i < alphabetArray.length; i++) {
        let variable = alphabetArray[i],
            expression = `.*${variable}.*`,
            re = new RegExp(expression, 'gi');

        if (!(re.test(string))) {
            return false;
        }
    }

    return true;
}