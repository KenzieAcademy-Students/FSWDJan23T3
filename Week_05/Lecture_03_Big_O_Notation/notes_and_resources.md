# Big O Notation
Big O Notation is a method of measuring software performance as a factor of an order of magnitude of input data. We like to use Big O to measure two aspects of software:
- Time Complexity - this is the order of magnitude in terms of the amount of time it takes for a function or program to finish.
- Space Complexity - this is the order magnitude in terms of the amount of memory needed for a function or program to finish. 

Specifically, big O uses an order of magnitude compared to `n`, which is used to indicate the amount of data incoming to the system. 

## Example: Reversing an array
### Option 1: In-place
```js
function reverseArr(arr) {
  // to do this in place, we don't want to create a new array
  for(let i = 0; i < arr.length / 2; i++) {
    let temp = arr[arr.length - 1 - i]; 
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp; 
  }

  return arr;
}
```
Time Complexity: `O(n)` (this is a linear relationship). When it comes to Big O notation, we drop the coefficient when it is a simple numerical value.

Space Complexity: `O(1)` (this is a constant relationship). A constant (or `O(1)`) Big O Space Complexity measurement means that regardless of how much data is incoming, we're using the same amount of additional memory. 

### Option 2: Create a copy
```js
function reverseArr(arr) {
  // we'll create a new array with the new contents
  const newArr = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
}
```
Time Complexity: `O(n)`. The more elements in the input array, the more iterations of the for loop, in a 1 to 1 ratio. 

Space Complexity: `O(n)`. Because we're a making a copy of the array, and thus dedicating memory to a new array of the same size as the input, the larger the input array, the larger the array in memory is needed.

# In a Nutshell
- Good:
  - Objects
  - Single looped arrays
  - Primitive data types
- Bad:
  - Nested loops (as in the nested loop iterates through the same array as the parent loop)
  - useEffect that changes its dependency state every time


# Resources
- [Big O Cheat Sheet](https://www.bigocheatsheet.com/)