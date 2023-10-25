## sortBydir

### Instructions

Create a function that order an array of numbers,it should receive a dir parameter which has with two possible values 'asc' or 'desc', and return a new array ordered ascendingly or descendingly respectively. 

If no dir parameter is set it should assume 'asc' by default. 

If the dir parameter has an invalid value, return false.

If the values of the array is not an integer, return false.


### Expected Function

```js
function sortBydir(arrayIntg,dir)

```

### Usage

Here is a program to test your function.

```js
const inputArray = [4, 2, 8, 1, 5];
const ascendingResult = sortBydir(inputArray);
const descendingResult = sortBydir(inputArray, 'desc');
console.log(ascendingResult);
console.log(descendingResult);
```

And its output

```console
$ node index.js
[1, 2, 4, 5, 8]
[8, 5, 4, 2, 1]
$
```