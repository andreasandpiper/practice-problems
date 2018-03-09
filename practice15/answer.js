//input: number
//ouput: an array of values
//every set alternate positive and negative. input number is how many of each set. include 4 sets
//example numeric_toggles(2) --> 4, 6, -9, -12, 16, 20, -25, -30

//declare result array
//declare array [1, -1]
//declare conter variable
//loop 4 times
//inner loop input times
//add from counter
//push to array
//return result


function numeric_toggles(num){
  var result = [];
  var value = [1, -1];
  var counter = num;
  var number = num;
  for(var i=0 ; i < 4 ; i++){
    for(var j=0 ; j < num ; j++){
      var whichType = value[i%2];
      var valToPush = (number + counter) * whichType;
      result.push(valToPush);
      number = Math.abs(result[result.length-1]);
    }
    counter++;
  }
  return result;
}

var result = numeric_toggles(2);
console.log(result);
