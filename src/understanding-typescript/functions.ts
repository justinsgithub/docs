let log: Function

log = console.log

log('functions have a "void" return type when they do not return anything')

function add(n1: number, n2: number): number {
  return n1 + n2
}

// setting this to undefined would be an error in typescript although that is technically what it returns in javascript
function printResult(num: number): void {
  console.log('Result: ', num)
}

// rare if never use case 
function printResultReturn(num: number): undefined {
  console.log('Result: ', num)
  return
}

// logs 3 to the console and then logs undefined to the console
log(printResult(add(1,2))) 

let undefinedVar: undefined // possibly no use case for this 

// can be any function that takes 2 numbers as parameters and returns a number 
let combineValues: (a: number, b: number) => number

combineValues = add

function addAndHandle(n1:number, n2: number, callback: (num: number) => void ) {
  const result = n1 + n2
  return callback(result)
}
addAndHandle(1, 2, (num) => console.log(num))

function addAndHandle2(n1:number, n2: number, callback: (num: number) => number ) {
  const result = n1 + n2
  return callback(result)
}

addAndHandle2(1, 2, (num) => num + num)

