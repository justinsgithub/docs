var array = [
    "learn typescript",
    "learn typescript more",
    "practice typescript"
]

for (var index in array ) {
        var value = array[index];
        console.log(`${index}: ${value}`);
}

for (var value of array) {
    console.log(`${value}`)

}

