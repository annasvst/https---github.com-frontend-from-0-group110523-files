/* 
  OOP - Object Oriented programming
  FP - Functional programming

  OOP:  state is usually stored in objects and can be modified through methods 
  FP: state is immutable, and functions are designed to transform data rather than mutate it

  OOP: classes encapsulates related data and behavior
  FP: problems are broken down into smaller, composable functions that can be combined to solve larger problems.
*/

// name, age

class User {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name () {
    console.log('Get method is called!');
    return this._name.toUpperCase();
  }

  set name (nameParameter) {
    console.log('setter: ', nameParameter);
    return this._name = nameParameter.trim();
  }

  greet () {
    return 'Hi, I\'m ' + this._name;
  }

  introduceYourself() {
    return 'Hi, I\'m ' + this._name + '. I\'m ' + this._age + ' years old.';
  }

}

const john = new User('John', 40);
const jane = new User('Jane', 20);
jane.name = ' Jane    '; // The set method from the User object is used for reassignment;

john.name; // Here the get method from the User object is used!

console.log(john.greet());
console.log(jane.greet());
console.log(jane.introduceYourself());

console.log('    string     '.trim());

class Animal {
  constructor(name, kind, numOfLegs, sound) {
    this._name = name;
    this._kind = kind;
    this._numOfLegs = numOfLegs;
    this._sound = sound;
  }

  describe () {
    return `This is a  ${this._kind} named ${this._name}. It has ${this._numOfLegs} legs`;
  }

  sound () {
    return this._sound;
  }
};

class Dog extends Animal {
  constructor(name) {
    super(name, 'dog', 4, 'bark');
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, 'cat', 4, 'meuw');
  }
}

class Duck extends Animal {
  constructor(name) {
    super(name, 'duck', 2, 'quack');
  }
}



const dog1 = new Dog('Dog 1');
const dog2 = new Dog('Dog 2');
const dog3 = new Dog('Dog 3');

const cat1 = new Cat('Cat 1');

const duck1 = new Duck('Duck 1');

console.log(dog1.sound());
console.log(cat1.sound());
console.log(duck1.sound());












