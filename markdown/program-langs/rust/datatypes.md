# Datatypes

## overview

- Rust must know the data types of all variables at compile time 

- every value in rust is a certain data type 

- data types tell Rust how it is going to work with that data and how much memory to reserve for it

- ***scalar*** and ***compound*** are two data type subsets

- Rust compiler can infer a variable type many times but other times we must annotate it

```rust 
// converting the string to integer below would confuse compiler so we annotate
let guess: u32 = "42".parse().expect("Not a number!");
```

## scalar types

> Rust has 4 primary scalar types

- integers, floating-point numbers, Booleans, characters
- represent a single value


## number types

> a number without a fractional component, a whole number 

- each integer is given with the ***bits*** of space that it uses up 
- each integer is also labeled ***signed*** or ***unsigned***
- isize and usize types depend on the kind of computer your program is running on
- 32 bits for a 32-bit architecture (older computers and some modern devices)
- 64 bits for a 64-bit architecture (most modern computers / devices) 
- Rust defaults to i32
- if unsure what integer type to use, the Rust default is a good place to start
- isize and usize is most often used when indexing a collection


| Length        | Signed        | Unsigned      |
| ------------- | ------------- | ------------- |
| 8-bit         | i8            | u8            |
| 16-bit        | i16           | u16           |
| 32-bit        | i32           | u32           |
| 64-bit        | i64           | u64           |
| 128-bit       | i128          | u128          |
| arch-bit      | isize         | usize         |


###  signed integer types 

- signed means it is possible for the variable to be negative so we need to include the sign to specify 
- signed numbers are stored using two’s complement representation
- signed variants of integers can store numbers from  -(2<sup>n - 1</sup>) to 2<sup>n - 1</sup> - 1 inclusive 
- n is the number of bits that variant uses

| signed   | stores                                | equivalent      |
| -------- | -----------------------------------   | -------------   |
|   i8     | -(2<sup>7</sup>) to 2<sup>7 - 1</sup> | -128 to 127     |
|   i16    |                                       |                 |
|   i32    |                                       |                 |
|   i64    |                                       |                 |
|   i128   |                                       |                 |
|   isize  |                                       |                 |


###  unsigned integer types 

- unsigned means that the variable will only ever be positive and can be represented without a sign
- unsigned variants of integers can store numbers from -(2<sup>7</sup>) to 2<sup>7</sup> - 1
- n is the number of bits that variant uses

| unsigned      | stores                                | equivalent      |
| ------------- | ------------------------------------- | -------------   |
| u8            | 0 to 2<sup>8 - 1</sup>                | 0 to 255        |
| u16           |                                       |                 |
| u32           |                                       |                 |
| u64           |                                       |                 |
| u128          |                                       |                 |
| usize         |                                       |                 |



### integer / number literals

- integer literals can be written in any of the forms shown in the below table
- number literals that can be multiple numeric types allow a type suffix to designate the type
- an example type suffix is 57u8 
- number literals can also use _ as a visual separator to make the number easier to read
- an example using a visual seperator is 1_000, which is the same as 1000


| number literal  | example     |
| --------------- | ----------- |
| decimal         | 98_222      |
| hex             | 0xff        |                
| octal           | 0o77        |                
| binary          | 0b1111_0000 |                
| byte ( u8 only )| b'A'        |                


### integer overflow

- integer overflow occurs when assigning a variable an integer that is too large for its datatype
- assigning 256 to a type of u8 would cause integer overflow
- Rust includes checks for integer overflow errors when compiling in debug mode
- when compiling in release mode with the --release flag, Rust does not include checks for integer overflow
- if overflow occurs when compiling in release mode Rust performs ***two’s complement wrapping***
- in the case of a u8, the value 256 becomes 0, the value 257 becomes 1, and so on 
- with two’s complement wrapping the program won’t panic but the variable will have a value that probably isn’t expected

### integer overflow error handling

> method families the standard library provides


- wrap in all modes with the wrapping_* methods
- return the None value if there is overflow with the checked_* methods
- return the value and a boolean indicating whether there was overflow with the overflowing_* methods
- saturate at the value’s minimum or maximum values with saturating_* methods

### floating-point types 

> numbers with decimal points

- Rust floating-point types are f32 and f64
- f32 and f64 are 32 bits and 64 bits in size
- default is f64 which is roughly same speed as f32 in modern computers 
- f64 is capable of more precision
- floating-point numbers are represented according to the IEEE-754 standard
- f32 type is a single-precision float
- f64 has double precision

```rust
fn main() {
    let x = 2.0; // f64

    let y: f32 = 3.0; // f32
}
```

### numeric operations
- Rust supports basic math operations for all number types
- math operations include addition, subtraction, multiplication, division, and remainder
- integer division rounds down to the nearest integer
- code below shows how to use each numeric operation in a let statement
- each expression in these statements uses a math operator and evaluates to a single value which is then bound to a variable


```rust
fn main() {
    // addition
    let sum = 5 + 10;

    // subtraction
    let difference = 95.5 - 4.3;

    // multiplication
    let product = 4 * 30;

    // division
    let quotient = 56.7 / 32.2;
    let floored = 2 / 3; // Results in 0

    // remainder
    let remainder = 43 % 5;
}
```

## Boolean type 

- a Boolean type in Rust has two possible values: true and false
- Booleans are one byte in size
- Boolean type in Rust is specified using bool
- main way to use Boolean values is through conditionals

```rust
fn main() {
    let t = true;

    let f: bool = false; // with explicit type annotation
}
```

## char / character type

- Rust’s char type is the language’s most primitive alphabetic type
- char literals are specified with single quotes
- char type is four bytes in size
- represents a Unicode Scalar Value ( can represent much more than ASCII )
- Unicode Scalar Values range from U+0000 to U+D7FF and U+E000 to U+10FFFF inclusive
- valid char values include -
    - Emoji
    - Accented letters
    - Chinese characters
    - Japanese characters
    - Korean characters
    - zero-width spaces
    - Emoji


```rust
fn main() {
    let z = 'z';
    let Z = 'ℤ';
    let heart_eyed_cat = '😻';
}
```

## compound types 

- ***compound types*** can group multiple values into one type
- Rust has two primitive compound types ( tuples and arrays )


### tuple type

- a tuple is a general way of grouping together a number values with a variety of types into 1 compound type
- tuples have a fixed length 
- once a tuple is declared it cannot grow or shrink in size
- each position in a tuple has a type
- the types of each position in a tuple do not have to be the same 
- pattern matching can be used to destructure a tuple value, like below code 
- to access a tuple element directly use TUPLE-NAME.INDEX-OF-ELEMENT 

```rust
fn main() {
    let example_tuple: (i32, f64, u8) = (500, 6.4, 1);

    let (x, y, z) = example_tuple;

    println!("The value of x is: {}", y);
    println!("The value of y is: {}", y);
    println!("The value of z is: {}", z);

    let five_hundred = example_tuple.0; // → 500

    let six_point_four = example_tuple.1; // → 6.4

    let one = example_tuple.2; // → 1
}
// example_tuple binds to the entire tuple
// a tuple is considered a single compound element
```

- a tuple without any values is ()
- a tuple without any values is a special type
- () is called a unit type and the value is called a unit value
- expressions implicitly return the unit value if they do not return any other value

### array type

> Rust arrays are different from the typical programming language array

- an array is one of Rust's ways to have a collection of multiple values
- every element in an array must have the same type ( unlike tuples )
- arrays in Rust must have a fixed length ( like tuples )
- an array is denoted with square brackets containing comma seperated values
- useful if data is to be allocated on the stack rather than the heap
- useful to ensure always having a fixed number of elements ( like for zipcodes )
- array type is not as flexible as vector type
- vector is a similiar type that is allowed to grow or shrink
- if unsure whether to use an array or vector, a vector should probably be used 
- array is probably better than vector for letting a program know the months in a year ( amount of months unlikely to change )

```rust
fn main() {
    let example_array = [1, 2, 3, 4, 5];
    
    let months_array = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];


    // an array with elements that all
    let shorthand_array = [3; 5];

    // same as above
    let longhand_array = [3, 3, 3, 3, 3];

    // same as above
    let explicitly_annotated_array: [i32; 5] = [3, 3, 3, 3, 3];
}
```

- an array is a single chunk of memory of a known and fixed size that can be allocated on the stack
- access elements of an array using indexing

```rust
fn main() {
    let this_array = [1, 2, 3, 4, 5];

    let first_element = this_array[0]; // → 1
    let second_element =this_array[1]; // → 2
}
```


- example of trying to access a non-existent array element 

```rust
use std::io;

fn main() {
    let a = [1, 2, 3, 4, 5];

    println!("Please enter an array index.");

    let mut index = String::new();

    io::stdin()
        .read_line(&mut index)
        .expect("Failed to read line");

    let index: usize = index
        .trim()
        .parse()
        .expect("Index entered was not a number");

    let element = a[index];

    println!(
        "The value of the element at index {} is: {}",
        index, element
    );
}

// if user inputs anything above 4 ( because array only has index 0 to 4 )

// → program panics and does not execute the final println!

```

- the above error check happens at runtime because Rust has to get the user input to check against the code
- this is an example of Rust's memory safety principals
- in many low-level languages this kind of check is not done and invalid memory can be accessed
- Rust protects against this kind of error by immediately exiting instead of allowing the memory access and continuing
