//input: 1 integer kippy_numbers(2);
//output: [2,3,5,6,8,9,11,12];

//declare empty array
//decalre a counter
//declare a number to increment
//while the new array length is less than 9
//for each interation in loop
//if counter  is 3, continue
//else push number to arrray
//return arrray

function skippy_numbers(num){
  var number = 2;
  var counter = num
  var result = [];
  while(result.length < 8){
    if(counter){
      result.push(number);
      counter--;
    } else {
      counter = num ;
    }
    number++;
  }
  return result;
}

var result = skippy_numbers(2);
console.log(result);
