//input 2 arrays, the second array the words to find, first the array to find the words in
//output: an array of the matched words

//sort the haystack array
//for each word in needle array
//
//find the halfway point in the array
//check if halfway point is the word
//if not, search left of right


function search_array(haystack, needle){
  haystack = haystack.sort();
  output = [];
  needle.forEach(function(word){
    
  })
}

var haystack = ['cat','dog','bird','turtle','lizard'];
var needle = ['dog','lizard','flower','monkey','unicorn']
var output = null;

output = search_array(haystack,needle);
console.log(output); //outputs ['dog','lizard'];
