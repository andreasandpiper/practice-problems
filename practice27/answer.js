//input: Number
//output:fibonacci sequence based on that number

//store sequence in am empty array
//get the last two numbers and add together
//push the sum to the array
//base case if equal to length of array
//if not
//call function with array

const fibSequence = array => {
  var nextNum = array[array.length - 1] + array[array.length - 2];
  array.push(nextNum);
  if( array.length === 13){
    return array;
  } else {
    return fibSequence(array);
  }
}

var result = fibSequence([0,1]);
console.log(result);
