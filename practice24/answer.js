function add_arrays(array1, array2){
    var newArray = [];
    for(var i = 0 ; i <array1.length ; i++){
        var sum = array1[i] + array2[i];
        newArray.push(sum);
    }
    return newArray;
}

var result = add_arrays([3,-5,15,4], [3,18,-5,-4]);
console.log(result);