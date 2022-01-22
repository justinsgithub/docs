var _a;
var array = [123, "learn typescript more", false];
var id = array[0], chore = array[1], completed = array[2];
console.log(array);
console.log(id, chore, completed);
var a = "yes";
var b = "no";
console.log(a, b);
var temp = a;
a = b;
b = temp;
console.log(a, b);
var c = "yes";
var d = "no";
console.log(c, d);
_a = [d, c], c = _a[0], d = _a[1];
console.log(c, d);
var todo = {
    id: 123,
    chore: "learn more ts",
    completed: false
};
var chore = todo.chore, id = todo.id, completed = todo.completed;
console.log(id, chore, completed);
