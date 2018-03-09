//input: number
//output: that number in roman numberals

//create an object to store values of roman numerals, the number is the key
//declare variables for modulo, 1's and 5s
// find length for the number
//for every length of the word, add a zero to modulo
//first loop % 10, second % 100..
//get the first number in answer and add appropatite zeros to it, 10=none, 100 = 1, 1000, 2
//check if greater than 1 and less than 5
//every iteration, add a zero to each variable


function romanNumerals(num){
  var roman_nums = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  }
  var result = "";
  var mod = 10;
  var ones = 1;
  var fives = 5;
  var length = num.toString().length;
  for(var i= 0 ; i < length ; i++){
    var number = num % mod;
    if(!number){
      num = num - number;
      ones *= 10;
      fives *= 10;
      mod *= 10;
      continue;
    }
    if(number === ones){
      result += roman_nums[ones];
    } else if (number === fives){
      result += roman_nums[fives];
    } else if (number === fives - ones) {
      result += roman_nums[fives];
      result += roman_nums[ones]
    }else if (number.toString().indexOf("9") !== -1) {
      var tempOnes = ones * 10;
      result +=  roman_nums[tempOnes];
      result +=  roman_nums[ones];
    }
    else if(number < fives){
      var temp = number;
      while(temp){
        result +=  roman_nums[ones];
        temp--;
      }
    } else {
      var temp = number;
      while(temp !== fives){
        result +=  roman_nums[ones];
        temp -= ones;
      }
      result +=  roman_nums[fives];
    }
    num = num - number;
    ones *= 10;
    fives *= 10;
    mod *= 10;
  }
  return result.split("").reverse().join("");
}

var result1 = romanNumerals(62);
var result2 = romanNumerals(105);
var result3 = romanNumerals(84);
var result4 = romanNumerals(1050);
var result5 = romanNumerals(79);
var result6 = romanNumerals(150);
var result7 = romanNumerals(1001);
var result8 = romanNumerals(1999);
console.log('1999', result8); //M
console.log('1001', result7); //MI
console.log('150', result6); //CL
console.log('79', result5); //LXXIX
console.log('1050', result4); //ML
console.log('84', result3); //LXXXIV
console.log('105', result2); //CV
console.log('62',  result1); // LXII
