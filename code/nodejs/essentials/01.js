const path = require("path");


console.log(__dirname);
console.log(__filename);

console.log(`this filename is ${path.basename(__filename)}`);

console.log(process.pid);
console.log(process.versions.node);
