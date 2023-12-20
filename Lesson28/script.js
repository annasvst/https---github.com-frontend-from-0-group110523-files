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
    if (randomValue > 0.1) {
      resolve(`Success! Random Value: ${randomValue}`);
    } else {
      // Simulate an error (reject) if the random number is 0.5 or less
      reject(`Error! Random Value: ${randomValue}`);
    }
  }, 2000); // Delay for 2 seconds (2000 milliseconds)
});

const myPromise2 = new Promise((resolve, reject) => {
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
  }, 1000); // Delay for 2 seconds (2000 milliseconds)
});

// Step 2: Using .then() to handle resolved Promise
// myPromise
//   .then((result) => {
//     console.log(result); // This code will execute if the Promise is resolved
//   })
//   .catch((error) => {
//     console.error(error); // This code will execute if the Promise is rejected
//   });

console.log("Promise created. Waiting for it to resolve or reject...");


/* Asyc / await syntax for working with Promises */

// const anyPromise = Promise.any([myPromise, myPromise2]); // checks if at least one promise is successfull 
const firstPromise = Promise.race([myPromise, myPromise2]);// Returns result of the promise that was complited first
// const allPromises = Promise.all([myPromise, myPromise]); // If you need to check all results

// Arrow function
// const promiseResult = async () => {
//   try {
//     const success = await(anyPromise);
//     console.log('promiseResult function: ', success);
//   } catch(error) {
//     console.log(error);
//   }
// };

// promiseResult();


// Examples of making a function asyncronous
// Function declaration
async function getFirstResult () {
  try {
    const success = await(firstPromise);

    // success.map(async (successItem) => {
    //     const result = await(myRequest);
    // })
    
    console.log('getFirstResult function: ', success);
  } catch(error) {
    console.log(error);
  } finally {
    console.log('Final code block!');
  }
};

getFirstResult();

// Function expression
// TODO: Anna to check what error case is not handled
// const allPromisesResult = async function () {
//   try {
//     const success = await(allPromises);
//     console.log('allPromisesResult function: ', success);
//   } catch(error) {
//     console.log(error);
//   } finally {
//     console.log('Final code block!');
//   }
// }

// allPromisesResult();

// Try, catch, finally