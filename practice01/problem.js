var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];


function biggerWords(array){
    var biggestWords = []
    var biggestWord = array.reduce( function (currentBiggest, word){
        if(word.length > currentBiggest.length){
            biggestWords = [];
            currentBiggest = word;
            biggestWords.push(currentBiggest);
        } else if(word.length === currentBiggest.length ){
            biggestWords.push(word);
        }
        return currentBiggest;
    })
    return biggestWords;
}

var result = biggerWords(myArray);
console.log(result);