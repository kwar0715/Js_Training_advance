var foo = function(who){
  this.me = who;
}

foo.prototype.identity = function(){
  console.log(this.me);
}

var f1 = new foo('a');
var f2 = new foo('b');

f2.speak = function(){
  console.log(this.identity());
}

console.log(f1.identity());

f2.speak()