

function fibSequence(num){
    var array = [0, 1];
    while(array.length < num){
        var sum = array[array.length-1] + array[array.length-2];
        array.push(sum);
    }
    return array;
}

var result = fibSequence(12);
console.log(result);
