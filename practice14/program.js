function arrayFactors(array) {
    var object = {};

    for(var i = 0; i<array.length; i++){
        var factors = [];
        var currentNumber = array[i];
        array.reduce(function(number, checkIfFactor){
            if(number%checkIfFactor === 0 && number/checkIfFactor !== 1){
                factors.push(checkIfFactor);
            }
        }, currentNumber);
        object.array[i] = factors;

    }

}



var result = arrayFactors([4,2,8,6,3,9]);
console.log(result);