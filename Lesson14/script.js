// 1. Declare a variable x and initialize it to 5.
// Declare a variable y and initialize it to 3.
// Declare a variable z and initialize it to the sum of x and y.
// var, const, let

const x = 5;
const y = 3;
const z = x + y;

console.log('Exercise 1:', z);

console.log('------------------------');
// 2. Declare a variable name and initialize it to your name as a string.
const myName = 'Gülçin';
// Declare a variable age and initialize it to your age as a number.
const age = 30;
// Declare a variable phrase and initialize it to the string "Hello, world!".
const phrase = 'Hello, world!';
// Add name and age to the sentence above. "Hello, world! My name is (name). I'm (age) years old.".

console.log(`${phrase} My name is ${myName}. I am ${age} years old.`);
console.log(phrase + ' My name is ' + myName + '. I am ' + age + ' years old.');

console.log('------------------------');
// 3. Declare a variable number1 and initialize it to 10.
const number1 = 10;

// Declare a variable number2 and initialize it to 3.
const number2 = 3;
// Declare a variable result and initialize it to the quotient of number1 divided by number2.
const result = number1/number2;
// Declare a variable number3 and initialize it to the difference between number1 and number2.
const number3= number1-number2 ;

// Toplama +
// Carpi *

console.log('Exercise 3.1:', result);
console.log('Exercise 3.2:', number3);

console.log('------------------------');
// 4. Declare a variable firstName and initialize it to your first name as a string.
// Declare a variable lastName and initialize it to your last name as a string.
// Declare a variable fullName and initialize it to the concatenation of firstName and lastName.

console.log('Exercise 4:' /* Result here */);

console.log('------------------------');
// 5. Declare a variable number4 and initialize it to 7.
// Declare a variable number5 and initialize it to 2.
// Declare a variable result2 and initialize it to the product of number4 and number5 (multiply numbers).

console.log('Exercise 5:'  /* Result here */);
 
console.log('------------------------');
// 6. Declare a variable PI and initialize it to the value of PI (3.14159). There's a built in function to do that (Math.PI).

const PI = Math.PI;
console.log('Exercise 6:', PI);

console.log('------------------------');
// 7. Declare a variable counter and initialize it to 0.
// Increment the counter variable by 1 using 3 different ways to increment numbers.
let counter = 0 ;
counter = counter + 1;
console.log('Exercise 7.1:', counter);
counter += 1;
console.log('Exercise 7.2:', counter);
counter++;
console.log('Exercise 7.3:', counter);

console.log('Exercise 7.4:', counter + 1);
console.log('Exercise 7.5:', counter += 1);
console.log('Exercise 7.6:', counter++);
console.log('Exercise 7.7:', counter);
// Anna to find another example

console.log('------------------------');
// 8. Declare a variable temperature and initialize it to 20.
// Increase the value of temperature by 5 and log the result to console.

console.log('Exercise 8:'  /* Result here */);

console.log('------------------------');
// 9. Declare a variable TODAY_DATE and initialize it to the current date using the built in Date object.
const date1 = new Date ();
const date2 = new Date ('January 1, 2000');
// Note: When you create a new Date object using a string representation of a date and time, such as 'January 1, 2000', the resulting date and time are interpreted based on the timezone of the environment in which the code is running.
// The output (1999-12-31T23:00:00.000Z) is in UTC (Coordinated Universal Time) format, which is often used as a reference time in computing. The Z at the end of the string indicates that the time is in UTC.
// The reason the output is one hour behind what you might expect (i.e. January 1, 2000 at 00:00:00) is because of the timezone offset between your local timezone and UTC. The output indicates that your local timezone is one hour ahead of UTC. This is likely because your local timezone observes daylight saving time, which can cause the timezone offset to change depending on the time of year.
// To get the date and time in your local timezone, you can use methods such as getDate(), getMonth(), and getFullYear() to extract the individual components of the date and time, and then construct a new Date object using those components. 

console.log('Exercise 9:', date1, date2);

console.log('------------------------');
// 10. Declare a variable number6 and initialize it to 6. Declare a variable number7 and initialize it to `++number6` (number6 incremented using prexif ++ operator). Log both values to the console.
let number6 = 6;
const number7 = ++number6;

console.log('Exercise 10.1:',  number6, number7);
const number99 = ++number6 + 1;

console.log('Exercise 10.2:' , number6, number99);
console.log('------------------------');
// 11. Declare a variable number8 and initialize it to 8. Declare a variable number9 and initialize it to `number8++` (number8 incremented using postfix ++ operator). Log both values to the console.
let number8 = 8 ;
const number9 = number8++;

console.log('Exercise11:' ,number8 , number9 );

let number10 = 8;
number10++;
const number11 = number10;

console.log('Exercise11:', number10, number11);
console.log('------------------------');

// 12. Declare a variable number10 and initialize it to -3. Use the postfix ++ operator to increment the value of num by 1, then multiply the result by 2 and log it to the console.

console.log('Exercise 12:'  /* Result here */);

console.log('------------------------');
// 13. Declare two variables a and b and initialize them to 2 and 3, respectively. Use the prefix ++ operator to increment the value of a by 1, then add b to the result and log it to the console.


console.log('Exercise 13:'  /* Result here */);

console.log('------------------------');

// BONUS: generate random number in a range from 0 (excluding) to 10 (including)
// Use Math.floor() and Math.random() to do that.
// Math.random() generate random number between 0 and 1 (not including 1)
// Math.floor()

console.log(Math.floor(Math.random() * 10 + 1));