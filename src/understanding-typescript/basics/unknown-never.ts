// unknown is slightly more strict than any, need to perfom checks when assigning variables in some cases
let userInput: unknown  // should be used rarely if ever 
let userName: string

userInput = 26
userInput = 'Justin'

if (typeof userInput === 'string') {
  userName = userInput
}

function generateError(message: string, errorCode: number): never {
  throw {message, errorCode} 
}

generateError('this is throwing an error', 1) // console.log would not output anything into the console


