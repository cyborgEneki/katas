// Replace all instances of "probably"
// to "prolly"
// Replace all instances of "i am"
// to "i'm"
// Replace all instances of "instagram"
// to "insta"
// Replace all instances of "do not"
// to "don't"
// Replace all instances of "going to"
// to "gonna"
// Replace all instances of "combination"
// to "combo"
// Your replacement regexes should be
// case -sensitive, only replacing the words above with slang
// if the detected pattern is in lowercase.However, please note that apart from 100 % lowercase matches, you will also have to replace matches that are correctly capitalized(e.g.
//     "Probably" => "Prolly"
//     or "Instagram" => "Insta").

// Finally, your code will be tested to make sure that you have used RegExp replace in your code.

function gymSlang(phrase) {
    let newPhrase = '';
    newPhrase = phrase.replace(/probably/g, 'prolly')
    newPhrase = newPhrase.replace(/Probably/g, 'Prolly')
    newPhrase = newPhrase.replace(/I am/g, "I'm")
    newPhrase = newPhrase.replace(/i am/g, "i'm")
    newPhrase = newPhrase.replace(/instagram/g, "insta")
    newPhrase = newPhrase.replace(/Instagram/g, "Insta")
    newPhrase = newPhrase.replace(/do not/g, "don't")
    newPhrase = newPhrase.replace(/Do not/g, "Don't")
    newPhrase = newPhrase.replace(/going to/g, "gonna")
    newPhrase = newPhrase.replace(/Going to/g, "Gonna")
    newPhrase = newPhrase.replace(/combination/g, "combo")
    newPhrase = newPhrase.replace(/Combination/g, "Combo")
    return newPhrase
}