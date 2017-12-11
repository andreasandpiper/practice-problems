//declare function
//make empty array with zero values the length of array parameter
//declare variable currentHungriest
//loop through arg[0] amount of times
    //person in array is hugrier
    //currentHungriest is the person, and subtract 1
    //at the index in the array, add one

// function distributeFood(num, array){
//     var foodGivenOut = new Array(array.length).fill(0);
//
//     while(num > 0){
//         var currentHungriestIndex = array[0];
//         for(var person = 1 ; person < array.length ; person ++){
//             if(array[person] > array[currentHungriestIndex]){
//                 currentHungriestIndex = person;
//             }
//         }
//         array[currentHungriestIndex] -=1;
//         foodGivenOut[currentHungriestIndex] += 1;
//         num -= 1;
//     }
//     return foodGivenOut;
// }

// var result = distributeFood(5, [2,5,3,1,4,2]);
// console.log(result);

function distributeFood(num, array){
    var foodGivenOut = new Array(array.length).fill(0);

    while(num){
        var max = array.reduce(function(a, b) {
            return Math.max(a, b);
        });
        var currentHungriestIndex = array.indexOf(max);
        array[currentHungriestIndex] -=1;
        foodGivenOut[currentHungriestIndex] += 1;
        num -= 1;
    }
    return foodGivenOut;
}

var result = distributeFood(5, [2,5,3,1,4,2]);
console.log(result);