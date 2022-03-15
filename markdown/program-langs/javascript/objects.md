# Classes and Objects

## mutability

- the value of 10 will always be 10
- the value of string "cat" will always be "cat"
- object values can be changed
- 2 different objects holding the same values are not considered equal

```Javascript
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
```
