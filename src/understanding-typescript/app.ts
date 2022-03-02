const logNumber: (num: number) => void = (num) => console.log(num)

logNumber(5)

const person = {
  name: 'justin',
  age: 26
}

const samePerson = person

const personsTwin = { ...person }

const add = (...numbers: number[]) => {
  return numbers.reduce((thisValue, nextValue) => thisValue + nextValue, 0)
}

const addThreeNumbers = (...numbers: [number, number, number]) => {
  return numbers.reduce((thisValue, nextValue) => thisValue + nextValue, 0)
}

console.log(add(1,2,3,4,5))
console.log(addThreeNumbers(1,2,3))
