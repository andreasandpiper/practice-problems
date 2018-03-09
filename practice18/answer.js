//input: mulit-dim array , number
//out: mulit-dim array of averages based on number

// <pre>
// var input_array =
// [
// 	[1, 1, 4, 7, 8, 3, 6, 9, 5, 8],
// 	[0, 4, 3, 3, 2, 3, 1, 5, 8, 1],
// 	[5, 8, 5, 1, 1, 8, 0, 7, 4, 1],
// 	[6, 3, 9, 1, 3, 8, 1, 6, 1, 6]
// ]
// var average_size = 2</pre>
// ```
// Output:
// ```
// <pre>
// output = [
// 	[1.5, 1.5, 4.2, 4.2, 4.0, 4.0, 5.2, 5.2, 5.5, 5.5],
// 	[1.5, 1.5, 4.2, 4.2, 4.0, 4.0, 5.2, 5.2, 5.5, 5.5],
// 	[5.5, 5.5, 4.0, 4.0, 5.0, 5.0, 3.5, 3.5, 3.0, 3.0],
// 	[5.5, 5.5, 4.0, 4.0, 5.0, 5.0, 3.5, 3.5, 3.0, 3.0]
// ]</pre>

// [0,0], [0,1], [1,0], [1,1]

//define result array
//loop through each n array
//define empty average array
//define variable to keep track of average


//copy array n times

//return array

function average_array(array, number){
  var result = [];
  var total = number * number;
  for(var outer = 0 ; outer < array.length ; outer= outer+ number){
    var newAverageArray = [];
    var average = 0;
    for(var inner = 0 ; inner < array[0].length ; inner++){
      var index = outer;
      for(var verticalIndex = 0 ; verticalIndex < number ; verticalIndex++){
        average += array[index][inner];
        index+=1;
      }
      if(inner%number !== 0 && inner !== outer){
        var totalAverage = average / total;
        for(var pushIndex=0; pushIndex< number; pushIndex++){
          newAverageArray.push(parseFloat(totalAverage.toFixed(1)));
        };
        average = 0;
      }
    }
    for(var i=0 ; i < number; i++){
      result.push(newAverageArray);
    }
  }
  return result;
}

var input_array =
[
	[1, 1, 4, 7, 8, 3, 6, 9, 5, 8],
	[0, 4, 3, 3, 2, 3, 1, 5, 8, 1],
	[5, 8, 5, 1, 1, 8, 0, 7, 4, 1],
	[6, 3, 9, 1, 3, 8, 1, 6, 1, 6]
]

var result = average_array(input_array, 2);
console.log(result);
