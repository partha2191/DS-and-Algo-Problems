// reference type
var obj = { value: 10};
var obj2 = obj;
var obj3 = { value: 10};

console.log(obj === obj2);
console.log(obj === obj3);
console.log([] === []);

// instantiation
class Player {
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`Hi, I'm ${this.name} and I am ${this.type}.`)
  }
}

class Wizard extends Player {
  constructor(name, type){
    super(name, type);
  }
  play(){
    console.log(`yeeee I'm a ${this.type}.`)
  }
}

const wizard1 = new Wizard('Harry Potter', 'Brave');

wizard1.introduce();
wizard1.play();