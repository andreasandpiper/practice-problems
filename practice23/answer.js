//input: numbers
//output: all facotrs


//decalre empty array
//for each number between 1 and input
//check if number modulo current number is zero
//if true,
  //push to array
// return array

function find_factors(num){
  var results = [];
  for(var i=1 ; i<=num ; i++){
    if(num % i === 0){
      results.push(i);
    }
  }

  return results;
}

var factor_number = 10;

output = find_factors(factor_number);
console.log(output); //outputs [1,2,5,10];
