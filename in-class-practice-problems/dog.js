function Dog(name, action){
  this.name = name;
  this.action = action;
  this.getName = function(){
    return this.name;
  };
  this.action = function(){
    return this.action;
  }
}

var bob = new Dog('Bob', 'wagging tail');


Dog.prototype.dogFriends = function(){
  this.friends = []
}
