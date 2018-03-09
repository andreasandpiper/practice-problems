// var input_array =
// [
// 	{name: 'John', age:42, gender:'M'},
// 	{name: 'Jack', age:34, gender:'M'},
// 	{name: 'Michael',age:40, gender: 'M'},
// 	{name: 'Kendra',age:48, gender:'F'}
// ]
//
// output = find_factors(input_array);
// [
// 	{name: 'Jack', age:34, gender:'M'},
// 	{name: 'John', age:42, gender:'M'},
// 	{name: 'Kendra',age:48, gender:'F'},
// 	{name: 'Michael',age:40, gender: 'M'}
// ]


//declare swapped set to true
//for each value in array
//if first name letter comes after the second,
//swap names and set to true


function sortNames(array){
  var swapped = true;
  while(swapped){
    swapped = false;
    for(var i = 0 ; i < array.length -1; i++){
      var first = array[i].name.charCodeAt(0);
      var second = array[i + 1].name.charCodeAt(0);
      if(first > second ){
        var firstCopy = array[i];
        array[i] = array[i+1];
        array[i+1] = firstCopy;
        swapped = true;
      }
    }
  }
  return array;
}


var input_array =
[
	{name: 'John', age:42, gender:'M'},
	{name: 'Jack', age:34, gender:'M'},
	{name: 'Michael',age:40, gender: 'M'},
	{name: 'Kendra',age:48, gender:'F'}
]
var result = sortNames(input_array);
console.log(result);
