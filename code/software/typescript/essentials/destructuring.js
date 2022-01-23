var array = [123, "learn typescript more", false]

var [id, chore, completed] = array;

console.log(array)
console.log(id, chore, completed)

let a = "yes";
let b = "no";
console.log(a,b)

var temp = a;
a = b;
b = temp;
console.log(a,b);

var c = "yes";
var d = "no";
console.log(c ,d );

[ c, d ] = [ d, c ];

console.log( c , d );

var todo = {
    id: 123,
    chore: "learn more ts",
    completed: false
};

var {id, chore, completed} = todo;

console.log(id,chore,completed)