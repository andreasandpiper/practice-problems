//input: array  [1,[2],[3,[[4]]], [5,6]]
//output: [1,2,3,4,5,6]

//create empty variable
//for each item in array
//  check if is array
//    if false
//      push number ot new array
//    else
//      push(call function)

function flatten(array){
  var newArray = [];
  for(var index = 0 ; index < array.length; index++){
    if(!Array.isArray(array[index])){
      newArray.push(array[index]);
    } else {
      var nestedArray = flatten(array[index]);
      for(var num in nestedArray){
        newArray.push(nestedArray[num]);
      }
    }
  }
  return newArray;
}

var result = flatten([1,[2],[3,[[4]]], [[5,6]], 7, [8, 9, [10, 11]]]);
console.log(result);
