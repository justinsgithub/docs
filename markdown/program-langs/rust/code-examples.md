# Code Examples

## formatting text

```rust 
fn main() {
    println!("This is simply println! to the console");

    println!(
        "{} lang uses curly brackets for placeholders {} ",
        "Rust", "like using f with python"
    );

    println!(
        "Rust {1} {0} postional {2} and {1} {0} named {2}",
        "use", "can", "parameters"
    );

    println!(
        "My name is {name} and i {activity}",
        name = "Justin",
        activity = "code"
    );

    // traits
    println!("Binary: {:b} Hex: {:x} Octal: {:o}", 1, 1, 1);
    println!("Binary: {:b} Hex: {:x} Octal: {:o}", 5, 5, 5);
    println!("Binary: {:b} Hex: {:x} Octal: {:o}", 10, 10, 10);

    // debug trait
    println!("{:?}", (12, true, "hello"));

    // basic math
    println!("10 + 10 = {}", 10 + 10);
}
```
