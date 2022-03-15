const log = console.log
log('TypeScript Types')
log('TS has a built in feature called type interface')
log('TS will infer a variable is the type that it is initialized with')
log('it is not considered good practice to unnecessarily explicitely type an obviously inferred type')

function add(n1: number, n2: number) {
  return n1 + n2
}

log(add(4, 6))
