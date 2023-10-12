## vowelSign

### Instructions

Create function named "VowelSign" that takes a string as its input parameter.

The function is expected to produce a modified string as its output, where in each uppercase vowel in the input string is replaced with a "+" symbol, and each lowercase vowel is substituted with a "-" symbol.

It is required to implement this functionality by defining a regular expression pattern for identifying vowels, which should be stored in a variable named "vowels."

### Expected function

```js
function VowelSign(inputString) {
}

```
### Usage

Here is a possible program to test your function

```js

const inputStr = "This Is a Sample StrIng";
const result = VowelSign(inputStr);
console.log(result);

```
And its output :

```console
$ node index.js
"Th-s +s a S-mpl- Str+ng

```