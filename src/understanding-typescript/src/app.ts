// Code goes here!

class Department {
  name: string; // this is considered a field of the class

  // functions in classes are referred to as methods 

  // constructor is a keyword / function which is executed whenever a new object is created
  constructor(n: string){
    this.name = n // sets property name property to "n", which is passed as an argument at initialization
  }

  describe(this: Department) {
    console.log('Department: ', this.name)
  }
}

const development = new Department('Development')

development.describe()

const devCopy = { name: 'blah', describe: development.describe}

devCopy.describe() // returns undefined, because "this" usually refers to the object that the method is being called on 
