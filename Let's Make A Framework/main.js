function Vector(x, y) {   // creating new Class/function 'Vector' with parameters x,y 
  this.x = x;       // give to vector.x value of 'x' given in declaration
  this.y = y;       // give to vector.y value of 'y' given in declaration
}

Vector.prototype.toString = function() {      // prototype means that to ALL existed and non-existed Vectors we give a method named 'toString'
  return 'x: ' + this.x + ', y: ' + this.y;   // 'toString' method returns string with values of param x and y of Vector
}                         // now ALL Vectors has an method 'toString'

v = new Vector(1, 2);   // createing new object and run function Vector named v with params x=1, y=2

Vector.prototype.add = function(vector) {   // prototype give all Vectors method 'add'
  this.x += vector.x;             // in vector whitch use '.add' method to param x we adding value of x of vactor given in declaration
  this.y += vector.y;
  return this;                // returning new values of vector params
}

v.add(new Vector(5, 5));  // to vector 'v' we add params from new Vector with x=5 & y=5 
              // now vector v has x = old 1 + new 5 = 6 and y = 2 + 5 =7

(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined')); // false a is undefined
console.log("b defined? " + (typeof b !== 'undefined')); // true b=3 is global, a has var so is closure

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo); // undefined
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

function foo1()
{
  return {
      bar: "hello"
  };
}
// foo1() => Object

function foo2()
{
  return
  {
      bar: "hello"
  };
}
// foo2() => undefined, after return in same line automatically add ';'
// after return; no code below is executed

(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
// 1,4, 3,2 
// 1 and 4 is sync and run immideatly  in first function loop
// 2,3 run in next loop with its delays

function isPalindrome(str) {
    // str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}
// checkoing palindrome
//split make array of letters ('') split always after ('') fe. '1,2' split(',') => [1,2],
// reverse - reversing array, 
//join make one string form array elems between every array elem put ('') // it colud be fe.('-')


for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', (function(i) {
    return function() { console.log(i); };
  })(i));
  document.body.appendChild(btn);
}
// all buttons log 5 because event is added with 'i" event is running when i ===5 
// after a loops
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  (function (i) {
    btn.addEventListener('click', function() { console.log(i); });
  })(i);
  document.body.appendChild(btn);
}
// now every buton has its own i value
// bacause i in closure has current i value but used in closure doesn't exist outside


(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);
// console 1
// 1 is in same closure as return so 1 is global for return function

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
// undefined
// John Doe
// stole... is in global scope and try to run content of function getSecret..
// { this._name} but in global there is no _name defined
// second run hero function inside hero where _name is declared
var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
// this will retur John Doe  bacause .bind said that hero is 'environment' of function

              