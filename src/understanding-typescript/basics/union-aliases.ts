const log = console.log

log('may sometimes need a runtime check when using unions to perform different operations depending on the types used')
log('use union types to create an option of possible number or string values, "literal types"')
log('use type aliases to create pre-made union types')

type CombineType = number | string
type ConversionOptions = 'as-number' | 'as-string'

function combine(input1: CombineType, input2: number | string, resultConversion: ConversionOptions) {
  let result

  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  } 
  if (resultConversion === 'as-number') {
    return +result // the + converts it to a number 
  } else {
    return result.toString()
  }
  return result
}

log(combine(1, 2, 'as-number'))

log(combine('Justin', 'Angeles', 'as-string'))
