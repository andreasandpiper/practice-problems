function evenodd(array){
    var result = {
        "odds": [],
        "evens": []
    }
    for(var arrayIndex = 0 ; arrayIndex < array.length ; arrayIndex++){
        var checkIfNumber = Number(array[arrayIndex]);
        if (!checkIfNumber){
            continue;
        }
        if(checkIfNumber%2 === 0){
            if(result.evens.indexOf(checkIfNumber) === -1){
                result.evens.push(checkIfNumber);
            }
        } else {
            if(result.evens.indexOf(checkIfNumber) === -1){
                result.odds.push(checkIfNumber);
            }
        }
    }
    return result;
}
var result = evenodd([2,5,1,6,8,2,20,'cat',13,3]);
console.log(result);