var container = document.getElementById('container');
var container2 = document.getElementById('container2');
function Counter(el) {
    this.count = 0;
    el.innerHTML = this.count;
    var _this = this;
    el.addEventListener("click", function () {
        _this.count += 1;
        el.innerHTML = _this.count;
    });
}
new Counter(container);
function Counter2(el) {
    var _this_1 = this;
    this.count = 0;
    el.innerHTML = this.count;
    el.addEventListener('click', function () {
        _this_1.count += 1;
        el.innerHTML = _this_1.count;
    });
}
new Counter2(container2);
var filtered = [-1, 1, 2, 3].filter(function (x) { return x > 0; });
console.log(filtered);
