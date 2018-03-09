function add_arrays(array1, array2){
    var newArray = [];
    for(var i = 0 ; i <array1.length ; i++){
      var addArray = [];
      for(var j=0 ; j < array2.length ; j++){
        var sum = array1[i][j] + array2[i][j];
        addArray.push(sum);
      }
      newArray.push(addArray);
    }
    return newArray;
}

var a1 =
[
	[1,2,3],
	[3,4,5],
	[6,7,8]
]
var a2 =
[
	[1,2,3],
	[1,2,3],
	[1,2,3]
]

var result = add_arrays(a1, a2);
console.log(result);
