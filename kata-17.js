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
    //   let i;
    //   for(i = 0; i < this.length; i++) {
    //    this[i] = Math.pow(this[i], 2);  
    //   }
    //   return this;
}

Array.prototype.cube = function() {
    let i;
    //   for(i = 0; i < this.length; i++) {
    //    this[i] = Math.pow(this[i], 3);  
    //   }
    //   return this;
}

Array.prototype.sum = function() {
    //   let add = (a, b) => a + b;
    //   return this.reduce(add)
}

Array.prototype.average = function() {
    let average = (a, b) => console.log((a + b) / this.length);
    console.log(average())
        //   return this.reduce(average)

}