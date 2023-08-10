# Challenge: Write a function that accepts a parameter, n, that computes and returns the nth number in the Fibonacci Sequence

- Could you remind me what the fibonacci sequence is?
- When we say nth number in the sequence, are we including 0 as the first number? or 1 as the first number? Also are we zeroing the "index" of n? As in, is n = 1 the first number? or the 2nd? 
  - Response: Use 1 as the first number, and n = 1 will be the first number.
- Edge cases:
  - What if n is not a whole number?
  - What if n is a negative number?
  - What if n is not a number?
  - What if n is an enormous number?
- Pseudocode
```js
function nthFib(n) {
  // Edge cases:
  if(n % 1 !== 0) {
    return false; // not a whole number
  } else if (n <= 0) {
    return false; // negative number, or zero
  } else if (typeof n !== "number" || isNaN(n)) {
    return false; // n is not a number
  }

  // If n === 1 or n === 2, return 1
  if(n === 1 || n === 2) {
    return 1; // first 2 numbers in fib are 1
  }

  let prevNum = 1;
  let prevPrevNum = 1;

  // for each number between 1 and n
  //   calculate the new fib num
  //   set prevPrevNum to prevNum's current value
  //   set prevNum to the new fib num

  // return the nth number
}
```