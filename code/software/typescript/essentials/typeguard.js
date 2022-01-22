function totalLength(x, y) {
    var total = x.length + y.length;
    x.slice(0);
    if (x instanceof Array) {
        x.push('abc');
    }
    if (x instanceof String) {
        x.substr(1);
    }
    return total;
}
console.log(totalLength("hello ", "there"));
