# Code Challenges





## [Codewars](https://www.codewars.com)

### remove vowels

- Create a function called shortcut to remove all the lowercase vowels in a given string.

```python
def shortcut( s ):
    lowercase_vowels = ['a','e','i','o','u']
    thisString = s
    
    for x in s:
        if x in lowercase_vowels:
            thisString = thisString.replace(x, "")

    return thisString

# other  solutions

def shortcut(s):
    return s.translate(None, 'aeiou')
#
def shortcut(s):
    return ''.join(c for c in s if c not in 'aeiou')
#
import re

def shortcut( s ):
    return re.sub('[aoeui]', '', s)
```

## final grade 
This function should return a number (final grade). There are four types of final grades:

    100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
    90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
    75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
    0, in other cases

```python
def final_grade(exam, projects):
    grade =  0
    if exam > 90 or projects > 10:
        grade = 100
    elif exam > 75 and projects >= 5:
        grade = 90
    elif exam > 50 and projects >= 2:
        grade = 75
    
    return grade
```

### traffic lights

You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
```python
def update_light(current):
    # Your code here.
    if current == 'green':
        return 'yellow'
    if current == 'yellow':
        return 'red'
    if current == 'red':
        return 'green'
```

### enough space on bus

The Story:

Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
Task Overview:

You have to write a function that accepts three parameters:

    cap is the amount of people the bus can hold excluding the driver.
    on is the number of people on the bus excluding the driver.
    wait is the number of people waiting to get on to the bus excluding the driver.

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

```python 
def enough(cap, on, wait):
    # Your code here
    total_passengers = on + wait
    if total_passengers <= cap:
        return 0

    return total_passengers - cap
```

## ascii total 
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.
```python
def uni_total(s):
    #your code here
    ascii_total = 0
    for x in s:
        ascii_total += ord(x)
        
    return ascii_total
```

## unstandardised keypads

Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

```python 
def computer_to_phone(numbers):
    #your code here
    translated_numbers = {
        "1":"7",
        "2":"8",
        "3":"9",
        "4":"4",
        "5":"5",
        "6":"6",
        "7":"1",
        "8":"2",
        "9":"3",
        "0":"0",
    }
    
    phone_string = ''
    for num in numbers:
        phone_string += translated_numbers[num]
        
    return phone_string
```
 
## compare sum of chars 
- consider all letters uppercase and if string has non letters it equals 0
```python 
def compare(s1,s2):
    string1val = 0
    string2val = 0
    
    if s1:
        if s1.isalpha():
            for x in s1.upper():
                string1val += ord(x)
    if s2:
        if s2.isalpha():
            for x in s2.upper():
                string2val += ord(x)

    return string1val == string2val
```

## move exclamation marks to end

-  Move all exclamation marks to the end of the sentence 

```python 
def remove(s):
    new_sentence = ''
    for x in s:
        if not x == '!':
            new_sentence += x
            
    for x in s:  
        if x == '!':
            new_sentence +=x
    return new_sentence                
```

## remove all ! from end of string

```python 
def remove(s):
    while s[-1] == '!':
        l = len(s)
        s = s[:l-1]
    return s
```

## series of integers

Write a function generateIntegers/generate_integers that accepts a single argument n/$n and generates an array containing the integers from 0 to n/$n inclusive.

For example, generateIntegers(3)/generate_integers(3) should return [0, 1, 2, 3].

n/$n can be any integer greater than or equal to 0.

```python 
def generate_integers(n):
    y = []
    for x in range(n+1):
        y.append(x)
    return y
```
