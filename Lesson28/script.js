/*
Promises in JS
A *Promise* is like a placeholder for a future value or action.

Think of it like ordering food at a restaurant: you place an order (Promise), and you'll get your food (result) when it's ready.

*/

/*
  How to create a Promise?
*/

const myExamplePromise = new Promise((resolve, reject) => { /* code here */ });

const myPromise = new Promise((resolve, reject) => {
  // Inside the Promise, you can place the code you want to execute asynchronously.

  // Simulate a delay using setTimeout
  setTimeout(() => {
    const randomValue = Math.random(); // Generate a random number

    // Simulate success (resolve) if the random number is greater than 0.5
    if (randomValue > 0.5) {
      resolve(`Success! Random Value: ${randomValue}`);
    } else {
      // Simulate an error (reject) if the random number is 0.5 or less
      reject(`Error! Random Value: ${randomValue}`);
    }
  }, 2000); // Delay for 2 seconds (2000 milliseconds)
});

// Step 2: Using .then() to handle resolved Promise
myPromise
  .then((result) => {
    console.log(result); // This code will execute if the Promise is resolved
  })
  .catch((error) => {
    console.error(error); // This code will execute if the Promise is rejected
  });

console.log("Promise created. Waiting for it to resolve or reject...");


/* Asyc / await syntax for working with Promises */

// Examples of making a function asyncronous
// Function declaration
// Function expression
// Arrow function

// Try, catch, finally