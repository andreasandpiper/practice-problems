name = "window";

function doSomethingSilly(){

  console.log(this.name);

}


var someObj = {
  name: 'Dan',
  occupation: 'madman',
  age: Infinity
}
