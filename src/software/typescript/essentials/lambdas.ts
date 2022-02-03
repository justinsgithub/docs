var container = document.getElementById('container');
var container2 = document.getElementById('container2');

function Counter(el){
    this.count = 0;

    el.innerHTML = this.count;

    let _this = this;

    el.addEventListener("click", 

        function () {
            _this.count += 1
            el.innerHTML = _this.count;

        }
    )
}

new Counter(container)

function Counter2(el) {
    this.count = 0;

    el.innerHTML = this.count;

    el.addEventListener('click', 
        () => {
            this.count += 1;
            el.innerHTML = this.count;
        })
}

new Counter2(container2)

const filtered = [-1, 1,2,3].filter(x => x > 0)

console.log(filtered)
