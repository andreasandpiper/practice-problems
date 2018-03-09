//input: array with 5 values [begin range, end range, begin range, end range, number of overlap]
//ouput: true or false


function rangeOverlap(array){
  var beginOverlap;
  var endOverlap;
  var overlapAmount;
  if(array[0] > array[2]){
    beginOverlap = array[0];
  }
  if(array[1] > array[2]){
    endOverlap = array[1];
    if(array[3] < endOverlap){
      endOverlap = array[3];
    }
  }
  if(beginOverlap === false && endOverlap === false){
    return false;
  }
  if(!beginOverlap){
    beginOverlap = array[2];
  }
  if(!endOverlap){
    endOverlap = array[3];
  }
  overlapAmount = endOverlap - beginOverlap + 1;
  if(overlapAmount >= array[4]){
    return true;
  }
  return false; 
}

// function rangeOverlap(array){
//   var beginOverlap;
//   var endOverlap;
//   var overlapAmount;
//   if(array[0] < array[2] && array[1] < array[2] ){
//     return false;
//   }
//   if(array[0] > array[3] && array[1] > array[2]){
//     return false;
//   }
//   if(array[0] < array[2] && array[1] < array[3]){
//     return rangeOverlap(array[2],array[1], array[4]);
//   }
//   if(array[0] > array[2] && array[1] > array[3]){
//     return checkOverlap(array[0], array[3],  array[4]);
//   }
//   if(array[0]<array[2] && array[0] < array[3] && array[1] > array[2] && array[1] > array[3]){
//     return checkOverlap(array[2], array[3],  array[4]);
//   }
//   if(array[0]>array[2] && array[0] < array[3] && array[1] > array[2] && array[1] < array[3]){
//     return checkOverlap(array[0],array[1],  array[4]);
//   }
// }
// function checkOverlap(begin, end, givenAmount){
//   overlapAmount = Math.abs(end - begin + 1);
//   if(overlapAmount >= givenAmount){
//     return true
//   }
//   return false;
// }




var result1 = rangeOverlap([5, 11, 1, 5, 1]); //true
console.log(result1)
var result2 = rangeOverlap([1,8,2,4,4]); //false
console.log(result2)
var result3 = rangeOverlap([3, 4, 1, 5, 1]); //true
console.log(result3)
var result4 = rangeOverlap([3, 4, 1, 5, 3]); //false
console.log(result4)
var result5 = rangeOverlap([1,5,3,4,1]); //true
console.log(result5)
var result6 = rangeOverlap([1,5,3,4,4]); //false
console.log(result6)
var result7 = rangeOverlap([1,3,2,5,2]); //true
console.log(result7)
