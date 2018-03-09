//pancake sort

var arr = [3,6,3,2,5,7,4,7];


//variable buildingStackIndex set to zero
//varaible to keep track if flipped pancake
//keep track of largestNum
//end while loop when flipped pancake is false
//find the largest number in the array. flip from largestNum to stack index.
//stack index increments by 1
//find largest number between buildingstackindex and end, flip, increment

function pancakeSort(array){
  var buildingStackIndex = 0;

  while(buildingStackIndex < array.length){
  	var largestNumIndex = buildingStackIndex;
  	for( var i = buildingStackIndex ; i < array.length; i++){
        if(array[i] >= array[largestNumIndex]){
          largestNumIndex = i;
        }
    }
    //reverse the section
    var sectionToSplit = array.splice(largestNumIndex);
    var reverseSection = sectionToSplit.reverse();
    console.log(sectionToSplit);

    array = reverseSection.concat(array);
    // console.log(reverseSection)
    console.log(array);
    buildingStackIndex+=1;
  }
  return array;
}

var result = pancakeSort(arr);
// console.log(result)

//TYPE 2 -------------------------------------------------------------
//
// function pancakeSort2(array){
// 	var flipped = true;
// 	var buildingStackIndex = 0;
// 	while(flipped){
// 		var largestNumIndex = findLargestIndex(buildingStackIndex, array);
// 	    var sectionToSplit = array.slice(buildingStackIndex, largestNumIndex + 1);
// 	    var reverseSection = sectionToSplit.reverse();
// 	    for(var i = 0 ; i<reverseSection.length ; i++){
// 	    	array[buildingStackIndex + i] = reverseSection[i];
// 	    }
// 	    buildingStackIndex+=1;
// 	    if(reverseSection.length === 1){
// 	    	flipped = false;
// 	    }
// 	}
//   return array;
// }
//
// function findLargestIndex(index, array){
// 	var largestNumIndex = index;
// 	for( var i = index ; i < array.length; i++){
//       if(array[i] > array[largestNumIndex]){
//         largestNumIndex = i;
//       }
//     }
//     return largestNumIndex;
// }
//
// var result = pancakeSort2(arr);
// console.log(result)
