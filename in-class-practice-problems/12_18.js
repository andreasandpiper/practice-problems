

//

function isSubset(array1, array2){
  var copyArray1 = array1.slice();
  for(var i = 0 ; i < array2.length ;i++){
    var index = copyArray1.indexOf(array2[i])
    if(index !== -1){
      copyArray1.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
}


var set1 = ['twelve', 'nine', 'five', 'six', 'eight'];
var set2 = ['six', 'eight', 'five', 'five'];
var set3 = ['five', 'six', 'eleven', 'eight'];
var set4 = ['six', 'eight', 'five'];
var set5 = ['six', 'eight', 'five', 'five', 'eleven', 'twelve'];


console.log(
  isSubset(set1, set4),  // prints true
  isSubset(set1, set3),  // prints false
  isSubset(set2, set1),  // prints false
  isSubset(set2, set3),  // prints false
  isSubset(set3, set1),  // prints false
  isSubset(set3, set4),   // prints true
  isSubset(set1, set2),   // prints false
  isSubset(set5, set2)  // prints true
);
