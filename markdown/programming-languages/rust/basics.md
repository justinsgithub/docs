# Rust Programming Basics

## variables

- immutable by default
- Rust automatically types variables 
- Rust encourages favoring immutability
- once variable is immutable, or a value is bound to variable name, value cannot be changed 
- Rust catches immutability errors at compile-time
- use mut to create a mutable variable

```rust
// throws error because immutable variable cannot be assigned to 5
fn main() {
    let x = 5; // rust automatically assigns 5 to int type
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is now: {}", x);
}
```
```rust
// to make a mutable variable
fn main() {
    let mut x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is now: {}", x);
}
```

- making a variable mutable can make code more convenient to write
- when using large data structures, mutating an instance in place may be faster than copying and returning newly allocated instances
- with smaller data structures, creating new instances and writing in a more functional programming style may be easier to think through, so lower performance might be worth the mental gain

### variables vs constants

- cannot use mut with constants
- constants are by default ***and always*** immutable
- constants are declared with const instead of let
- constant type values ***must be annotated***
- naming convention for constants is to use all uppercase with underscores between words
- Rust compiler can evaluate a limited set of operations at compile time
- constants are valid for the entire time a program runs, within the scope they were declared in


```rust
// example const 

const SECONDS_IN_WEEK: u32 = 60 * 60 * 24 * 7;
```

### shadowing

- shadowing is declaring a new variable with the same name as a previous variable
- shadowing allows making transformations to a variable but still keeping it immutable afterwards

```rust
fn main() {
    let x = 5;

    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {}", x);
    }

    println!("The value of x is: {}", x);
}
// → The value of x in the inner scope is: 12
// → The value of x is: 6
```

- shadowing allows changing a variables type, while using mut does not 
- example if we wanted to get the users input for preffered spaces in place of tabs 

```rust
fn main {
    // this is fine
    let spaces1 = '    ';
    let spaces1 = spaces.len();

    // this is not fine
    let mut spaces2 = '    ';
    spaces2 = spaces.len();
}
```



## functions 

### overview

- ***main*** is one of the most important functions in Rust and the entry point of many programs
- ***fn*** keyword allows the declaration of new functions
- Rust code uses ***snake case*** convention for function and variable names 
- snake case means all letters lowercase and an underscore in between words ( this_variable )
- functions start with ***fn*** and curly brackets tell the compiler where the function starts and ends
- functions can be defined before or after where they are called
- functions can have parameters
- parameters are special variables that are apart of a functions signature
- in function signatures the type of each parameter must be declared
- required type declations in parameters means the compiler almost never needs the type annotated elsewhere in the code


```rust
fn main() {
    println!("Hello, world!");

    example_function(5);

    print_labeled_measurement(5,'h');
}

fn example_function(x: i32) {
    println!("Example function.");
    println!("The value of x is: {}", x);
}

fn print_labeled_measurement(value: i32, unit_label: char) {
    println!("The measurement is: {}{}", value, unit_label);
}
```

### function bodies

- function bodies are made up of a series of ***statements*** that optionally end in an ***expression***
- ***statements*** are instructions that perform some action and do not return a value
- ***expressions*** evaluate to a resulting value
- function definitions are statements
- calling a function is an expression
- since statements do not return a value they cannot be assigned to a variable because there would be nothing to bind to 
- this is different from languages such as c and ruby


```rust 

fn five() -> i32 {
    5 // expression
}


fn plus_one(x: i32) -> i32 {
    x + 1 // expression
}

fn main() {
 // statements because they do not return values
    let x = five(); 
    let z = plus_one(5); 
    let y=6;
}
```
- most functions return the last expression implicitely


## conditions

- the different blocks of code in if statements are sometimes called arms
- condition on the code must be a bool
- implicit if statements to check if a number exists do not work in Rust
- a let statement can be assigned to the value of an if statement

```rust
fn main() {

    let condition = true;

    let this_number = if condition { 5 } else { 6 };

    println!("The value of this_number is: {}", this_number);

    let number_five = 5;

    let under_five = if number_five < 5 { true } else { false };

    println!("The value of under_five is: {}", under_five);


    if number != 0 {
        println!("number was something other than zero");
    } // -> this is fine

    if number {
        println!("number was three");
    } // -> throws error because 3 is an integer and not a bool

    let number_six = 6;

    if number_six % 4 == 0 {
        println!("number is divisible by 4");
    } else if number_six % 3 == 0 {
        println!("number is divisible by 3");
    } else if number_six % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
```

## loops

- an endless loop 

```rust 
fn main(){
    println!("oops");
    endless_loop()
}

fn endless_loop() {
    let mut count = 0;
    loop {
        println!("count again! {}", count);
        count = count + 1
    }
}
```
- ***break*** and ***continue*** breakout of the innermost loop they are in 
- use a loop label for an outer loop and specify it with the above keywords to change this behavior

```rust
    let mut count = 0;
    'counting_up: loop {
        println!("count = {}", count);
        let mut remaining = 10;

        loop {
            println!("remaining = {}", remaining);
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {}", count);
```

### returning values 

- one use of a loop is to keep retrying an operation that might fail
- a loop could be use to keep checking on if a thread has completed it's job
- to pass the result of the loop to the rest of the code return the value after the break expression

```rust 
fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("The result is {}", result);
}
```

### while loop

```rust 
fn main() {
    let mut number = 3;

    while number != 0 {
        println!("{}!", number);

        number -= 1;
    }

    println!("LIFTOFF!!!");
}
```

### for loop a collection 

- looping through a collection with a for loop is most likely better than using a while loop
- a for loop is safer and more concise than a while loop for going through a collection 


```rust
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a {
        println!("the value is: {}", element);
    }
}
```
- a Range is a standard library type that generates all numbers from n1 to n2 non inclusive
-  (1..4) is 1 2 3 

```rust 
fn main() {
    for number in (1..4).rev() {
        println!("{}!", number);
    }
    println!("LIFTOFF!!!");
}
```


