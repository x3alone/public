## oneMatch

### Instructions

Create a function named oneMatch , that takes two arguments: the first is a string, and the second  is a regular expressions.

Your function should return a boolean , true if the regular expression match the string and false if it dosen't.

### Expected function

```js
function oneMatch(inputString, regex){

}
```

### Usage

Here is a possible program to test your function :

```js
const rgx1 = /\d{3}-\d{2}-\d{4}/;
const str1 = "123-45-6789";
console.log(oneMatch(str1, rgx1));
const rgx2 = /^[A-Za-z\s]+$/;
const str2 = "Hello World";
console.log(oneMatch(str2, rgx2)); 
const rgx3 = /^[\d]+$/; 
const str3 = "abc123";
console.log(oneMatch(str3, rgx3));
const rgx4 = /[^0-9]/;
console.log(oneMatch(str4, rgx4));
```

And its output :

```console
$ node index.js
true
true
false
false
$
```