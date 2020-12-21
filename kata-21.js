// Jamie is a programmer, and James ' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn'
// t know how to make this happen, he needs your help.

// Task
// You need to
// return a string that looks like a diamond shape when printed on the screen, using asterisk( * ) characters.Trailing spaces should be removed, and every line must be terminated with a newline character(\n).

// Return null / nil / None / ...
// if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//      *
//     ***
//      *
//     ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//       *
//      ***
//     *****
//      ***
//       *
//     ...that is:

//     "  *\n ***\n*****\n ***\n  *\n"


function diamond(n) {
    let diam, i = 1,
        patternLeft, patternRight, middle;

    if (n % 2 == 0 || Math.sign(n) == (-1 || 0)) {
        return null
    }
    n = 5

    while (i <= n) {
        if (i == 1) {
            patternLeft = "*\n";
            patternRight = "";
            middle = "";
        }
        if (i == 2) {
            patternLeft = " " + patternLeft
            patternRight = patternLeft
        }
        if (i % 2 == 1 && i != 1) {
            middle = middle + "*".repeat(n) + "\n"
        }
        if (i % 2 == 0 && i != 2) {
            console.log(middle)
            patternLeft = " " + patternLeft
            middle = middle + middle
            patternRight = patternLeft
        }
        //     patternRight = ""
        i++;
    }
    console.log(patternLeft + middle + patternRight)
        //   return diam;
}