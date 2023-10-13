## asterisksfirst

### Instructions

Create function that processes a string.

It should trim spaces from the beginning and end of the string and capitalize the first letter of each word. 

Furthermore, it should remove spaces between words and prepend the string with an asterisk (*).

The function should return the processed string, but if the resulting string exceeds 250 characters in length, or if the input or output is empty, it should return 'false'.

### Expected function

```js
function asterisksfirst(inputString) {
}
```

### Usage

Here is a possible program to test your function:

```js
const inputString = "  this is a  test string   ";
const format = asterisksfirst(inputString);
console.log(format);
```

and the output should be:

```console
$ node index.js
"*ThisIsATestString"
$
```