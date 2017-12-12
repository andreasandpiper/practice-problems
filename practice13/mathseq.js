function mathSequence(num1, num2){
    var newArray = [];
    var operands = {
        "+": num1 + num2,
        "-": num1 - num2,
        "*": num1 * num2,
        "/": num1 / num2
    };
    for(var operator in operands){
        var answer = operands[operator];
        newArray.push(num1 + operator + num2 + "=" + answer);
    }
    return newArray;
}

var result = mathSequence(2,5);
console.log(result);