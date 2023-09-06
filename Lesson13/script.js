/* 
Multiline comment:
Statements, expressions, and comments
alert and propmt - functions that are only available in the web browser environment
*/

console.log('Hello world!');

// Single line comment: prompt('How old are your?');

// Statement:
let myNumber = 5;

// Expression:
3 + 5;

// Keywords: let, var, const, undefined, null, BigInt, Symbol, true, false

// let, var, const - used to declare variables
let changableVariable;
console.log('Hello, ' + changableVariable);
changableVariable = 'John';

console.log('Hello, ' + changableVariable);

changableVariable = 'Jane';

console.log('Hello, ' + changableVariable);

const nonChangableVariable = 'You can\'t change me!';

console.log(nonChangableVariable);

var thisIsAnOldWayToDeclareVariableInJs = 'Don\'t use me!';


// camelCase - it's the case you use in JS to name different things

// Types in JS:

// String
const myString = 'This is my string';
const myString2 = "This is my string";

// Number
const myNumber2 = 12.22;

// BigInt introduced in 2020
const myBigInt = BigInt(323123112);
const myBigInt2 = 323123112n;

// Boolean
let myBoolean = true;
myBoolean = false;

// Object 
const myObject = {
  name: 'John',
  age: 30,
  isStudent: false,
  address: {
    street: 'My street',
    house: '3',
    zipCode: '142345'
  }
};

// Array - a special type of object
['Hi', 'sadas', 2, true, {name: 'Jane'}];
// 0 1 2 3 4

// Symbol 
const mySymbol = Symbol('key');
console.log(Symbol('key') === Symbol('key'));

// undefined - a values has not been defined yet;

// null - absence of value;
changableVariable = null;
console.log(changableVariable);













