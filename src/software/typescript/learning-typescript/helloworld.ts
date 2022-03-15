const tip: string = 'You’ll see that there are two syntaxes for building types: Interfaces and Types. You should prefer interface. Use type when you need specific features.'

interface User {
  username: string;
  password: string;
  id: number;
}

type userAnswer = true | false
type windowStates = 'open' | 'maximized' | 'minimized' 
type LockStates = 'locked' | 'unlocked'
type PositiveEvenNumbersUnder10 = 0 | 2 | 4 | 6 | 8 
type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{name: string}>
type UserArray = Array<User>

const objectArray: ObjectWithNameArray = [{name: 'justin'}, {name: 'michael'}]


const myNames: string[] = ['justin', 'tyler', 'angeles', 'ward']

function getLength(obj: string | string[]) {
  return obj.length
}

const ensureArray = (obj: string | string[]) => {
  if (typeof obj === 'string') return [obj]
  return obj
}

console.log(ensureArray('hello'))

console.log(getLength(tip))
console.log(getLength(myNames))

const exampleUser: User  = {
  username: 'example',
  password: 'password',
  id: 1
}

class UserAccount {
  username: string;
  password: string;
  id: number;

  constructor(username: string, password: string, id: number) {
    this.username = username;
    this.password = password;
    this.id = id;
  }
}

const exampleUser2: User = new UserAccount('justin', 'angeles', 26)

const getCurrentUser = (): User => {
  console.log('getting User')
  return exampleUser
}

const deleteUser = (user: User) => {
  console.log(user)
  return user
}

deleteUser(exampleUser)
