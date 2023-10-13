## numberOfLetters

### Instructions

Create a function that if we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven.

The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.

Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). 

For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium.

### Expected function

```js
function numberOfLetters(int) {
}
```

### Usage

Here is a possible program to test your function:

```js
console.log(numbersOfLetters(60))
console.log(numbersOfLetters(1))
```

and the output should be:

```console
$ node index.js
["sixzero", "seven", "five", "four"]
["one", "three", "five", "four"]
$
```



