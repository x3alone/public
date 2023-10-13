## suffix

### Instructions

Create function to move the first letter of each word to the end and add "er" to the end of each word while leaving punctuation marks untouched using regular expression

### Expected function

```js
function suffix(str) {
}
```

### Usage

Here is a possible program to test your function:

```js
const inputStr = "  this is a  test string   ";
const format = suffix(inputStr);
console.log(format);
```

and the output should be:

```console
$ node index.js
elloHer, orldwer! hisTwer is Her a estwer.
$
```