for (let i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function() {
     console.log(i); 
  });
  document.body.appendChild(btn);
}

class Object1 {
  
  constructor(text, quantity) {
    this.text = text;
    this.qty = quantity;
    this.name = 'obj1';
  }
}

Object1.prototype.showTxt = function() {
  console.log(this.text, this.qty);
}

var ex1 = new Object1('elo', 3);

ex1.showTxt();

class Object2 extends Object1 {
  
  constructor(text, quantity, end) {
    super();
    this.text = text;
    this.qty = quantity;
    this.end = end;
  }

  showMultiText() {
    for (let i = 1; i <= this.qty; i++) {
      console.log(this.text, i, this.end);
    }
  }
}

var ex2 = new Object2('yo', 7, 'elo');

ex2.showTxt();
ex2.showMultiText();

class Object3 extends Object1 {

  constructor(realName) {
    super();
    this.realName = realName;
  }

  showNames() {
    console.log(this.name + ' is name of main class of ' + this.realName);
  }
}

var ex3 = new Object3('obj3');

ex3.showNames();

class Object4 extends Object1 {

  constructor(text, quantity, arg4) {
    super();
    this.text = text;
    this.qty = quantity;
    this.arg4 = arg4;
  }

  showAllArgs() {
    console.log(this.text, this.qty, this.name, this.arg4);
  }
}

var ex4 =  new Object4('firstText', 4, '4thArg');

ex4.showAllArgs();
