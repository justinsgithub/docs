var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var logNumber = function (num) { return console.log(num); };
logNumber(5);
var person = {
    name: 'justin',
    age: 26
};
var samePerson = person;
var personsTwin = __assign({}, person);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (thisValue, nextValue) { return thisValue + nextValue; }, 0);
};
var addThreeNumbers = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (thisValue, nextValue) { return thisValue + nextValue; }, 0);
};
console.log(add(1, 2, 3, 4, 5));
console.log(addThreeNumbers(1, 2, 3));
