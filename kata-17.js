//  This kata is designed to test your ability to extend the functionality of built - in classes.In this
//  case, we want you to extend the built - in Array class with the following methods:
//      square(), cube(), average(), sum(), even() and odd().

//      Explanation:

//          square() must
//      return a copy of the array, containing all values squared
//      cube() must
//      return a copy of the array, containing all values cubed
//      average() must
//      return the average of all array values;
//      on an empty array must
//      return NaN(note: the empty array is not tested in Ruby!)
//      sum() must
//      return the sum of all array values
//      even() must
//      return an array of all even numbers
//      odd() must
//      return an array of all odd numbers
//      Note: the original array must not be changed in any
//  case !

Array.prototype.square = function() {
    let i, squareArray = [];
    for (i = 0; i < this.length; i++) {
        squareArray[i] = Math.pow(this[i], 2);
    }
    return squareArray;
}

Array.prototype.cube = function() {
    let i, cubeArray = [];
    for (i = 0; i < this.length; i++) {
        cubeArray[i] = Math.pow(this[i], 3);
    }
    return cubeArray;
}

Array.prototype.sum = function() {
    if (this == []) {
        return this
    }
    let add = (a, b) => a + b;
    return this.reduce(add, 0)
}

Array.prototype.average = function() {
    let average = (a, b) => a + b;
    return this.reduce(average, 0) / this.length
}

Array.prototype.even = function() {
    let evenArray = [];
    for (i = 0; i < this.length; i++) {
        if (this[i] % 2 == 0)
            evenArray.push(this[i]);
    }
    return evenArray;
}

Array.prototype.odd = function() {
    let oddArray = [];
    for (i = 0; i < this.length; i++) {
        if (this[i] % 2 == 1)
            oddArray.push(this[i]);
    }
    return oddArray;
}