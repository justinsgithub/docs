# Code Challenges

## triangle pyramid

```Javascript
const loopATriangle = () => {
    let material = '#';
    let construct = '#'
    for (i = 0; i < 7; i++) {
        console.log(construct)
        construct += material
    };
};

loopATriangle()
```

## fizzbuzz

```Javascript
const fizzbuzz = () => {
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    };
};

fizzbuzz()
```

## chessboard

```Javascript
const makeChessboard = (size) => {
    const rows = size / 2;
    const row = ' # # # #\n\n# # # # \n\n';
    let board = '';
    for (i = 0; i < rows; i++) {
        board += row;
    };
    return board
};

let chessBoard = makeChessboard(8)

console.log(chessBoard)
```
## find the minimum

```Javascript
const findMin = (firstNum, secondNum) => {
    if (firstNum < secondNum) {
        return firstNum
    } else if (secondNum < firstNum) {
        return secondNum
    }
    return firstNum;
}


console.log(findMin(1, 3))
console.log(findMin(3, 2))
console.log(findMin(3, 3))
```

## count B's and count the char

```Javascript
// version 1
const countB = (aString) => {
    Bcount = 0;
    stringLength = aString.length;
    for (let i = 0; i <= stringLength; i++) {
        if (aString[i] === "B") {
            Bcount++;
        }
    };
    return Bcount
};
console.log(countB('BillyBoB'))
console.log(countB('silly'))


const countChar = (aString, aChar) => {
    charCount = 0;
    stringLength = aString.length;
    for (let i = 0; i <= stringLength; i++) {
        if (aString[i] === aChar) {
            charCount++;
        }
    };
    return charCount
};
console.log(countChar('BillyBoB', 'B'));
console.log(countChar('silly', 'i'));
console.log(countChar('silly', 'o'));


// version 2
const countB2 = (aString) => {
    return countChar(aString, 'B');
};
console.log(countB2('BillyBoB'))
console.log(countB2('silly'))
```

## sum and range

```javascript
const range = (start, end, step=1) => {
    
    const thisArray = [];
    
    if (step >= 0) { 
        for (let i = start; i <= end; i+=step) {
            thisArray.push(i)
        };
    } else {
        for (let i = start; i >= end; i+=step) {
            thisArray.push(i)
        };
    }
    return thisArray

};

const sum = (thisArray) => {
    let sumOfElements = 0
    
    for (let i of thisArray) {
        sumOfElements += parseInt(i);
    };

    return sumOfElements
};

console.log(range(1,10))

console.log(sum(range(1,10)))

console.log(range(1,10,2))

console.log(range(5,2,-1))
```

## reverse array 

```javascript
const reverseArray = thisArray => {
    const reversedArray = [];

    for (let i of thisArray) {
        reversedArray.unshift(i);
    }

    return reversedArray;
};

console.log(reverseArray([1, 2, 3]));
```

## reverse array in place

```javascript
const reverseArrayInPlace = thisArray => {
    const oldThisArray = thisArray.slice();
    thisArray.length = 0;
    for (let i of oldThisArray) {
        thisArray.unshift(i);
    };
    return thisArray
};

const onetwothree = [1, 2, 3];
reverseArrayInPlace(onetwothree);

console.log(onetwothree);
```
