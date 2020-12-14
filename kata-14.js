// Bob is preparing to pass IQ test.The most frequent task in this test is to find out which one of the given numbers differs from the others.Bob observed that one number usually differs from the others in evenness.Help Bob— to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and
// return a position of this number.

// !Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1(not 0)

// ## Examples:

//     iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers) {
    let i, evenCount = 0,
        oddCount = 0,
        evenArray = [],
        oddArray = [],
        numbersArray = [],
        eachInteger;

    numbersArray = numbers.split(' ');

    for (i = 0; i < numbersArray.length; i++) {
        eachInteger = parseInt(numbersArray[i])
        if (eachInteger % 2 == 0) {
            evenCount++;
            evenArray.push(i);
        }
        if (eachInteger % 2 == 1) {
            oddCount++;
            oddArray.push(i);
        }
    }

    if (evenCount == 1) {
        return parseInt(evenArray) + 1;
    }
    if (oddCount == 1) {
        return parseInt(oddArray) + 1;
    }
}