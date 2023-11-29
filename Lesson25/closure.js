const outerFunction = (x) => {
  console.log('Inside outerFunction. X is', x);
  const innerFunction = (y) => {
    console.log('Inside innerFunction. X is', x, 'Y is', y);

    return x + y;
  };
  return innerFunction;
};

const addFive = outerFunction(5);
console.log('addFive', addFive);
/*
const innerFunction = (y) => {
    console.log('Inside innerFunction. X is', x, 'Y is', y);

    return x + y;
  };

*/
console.log(addFive(3)); // Output: 8


const addition = (a, b) => a + b;

// Her zaman 5 arti baska numara yapiyoruz
const addition2 = (a) => (b) => (c) => a + b + c;
const addFive2 = addition2(5); // (b) => 5 + b;

/*
(a) => (b) => (c) => a + b + c;
return (b) => (c) => a + b + c;
return (c) => a + b + c;
return a + b + c;
*/

// Her zaman 10 arti baska numara yapiyoruz


const add = (a) => (b) => a + b;

// const addFive = add(5);
// const addTen = add(10);

console.log(addFive(3)); 