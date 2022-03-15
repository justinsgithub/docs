# Programming Principals 

- computers are useless unless they are told exactly what to do 
- since the beginning of computers, there has always been the need for someone to tell it what to do 
- this is where programmers come in 
- programmers take a set up steps or jobs that need to be done by a computer and convert it from our language to their language

## control computers with code

### history of programming 

- in the early 1840's Charles Babbage proposed a machine called the Analytical Engine
- it was only a proposal, no actual machine was built
- one inventive woman by the name of Ada Lovelace decided to write an article that provided detailed instructions on how to represent Bernoulli numbers, a recursive equation based in number theory on the Analytical Engine
- this article is considered the very first computer program
- since then the devices that can be programmed went from: 
    - theoretical to physical
    - manual to automatic
    - analog to digital

- with each evolutionary step, the way we program computers needed to evolve as well
- with the birth of main frame computers, data processing required instructions to be sent to the machine and interpret the instructions from the programmer
- this was then applied to data to organize and analyze it 
- instructions were entered through a keyboard, but without a monitor, so everything was done through printouts on paper 
- if you look carefully at text encodings, and at some programming languages, you'll see things like carriage return or print that are carryovers from those printer days from decades ago 
- as computers got smaller and more powerful more languages were created 
- languages were also created to serve specific types of projects and industries like mathematics and science, data storage and graphics
- today we work with programming language that can serve many different purposes 
- a programmer often needs to use multiple programming languages to get a project completed
- as languages have evolved they have become specialized to complete specific tasks
- as a programmer you will use the best languages for specific tasks and combine them together to create your project
- the programming languages you learn today will continue to evolve and change in the future
- with future waves of new technology new languages with be developed to allow programmers to drive even more innovation

### forms of programming

- as programming as evolved over the decades, the types of programming you can do have changed as well 
- depending on what you want to do there are different types or forms of programming languages that work in different ways
- machine, assembly, interpreted, compiled 
- imperative, OOP, functional, scripting
- JS is an example of an interpreted language 
- C is an example of a compiled language
- Java and C# are examples of OOP languages
- Haskell, Scala, F# are examples of functional languages
- SQL and R is for data
- powershell, perl, and bash are examples of scripting languages

## define actions using code

### work with values and variables

- when a programmer needs to store a value a variable is used
- when a variable is defined, the computer allocates the space needed to store a variable of a certain type 
- sometimes the programmer defines what the type is that needs to be stored, like an integer
- the computer can then sometimes infer what type is needed based on the value that needs to be stored 
- when you define a certain type, it can only store that type of value 

- you can take a variable and then assign its value to another variable
    - some languages copy the value from one variable to another, so that their are now 2 unique values
    - other languages tell a variable to point to a value that is stored in memory, so if one of those variables changes, it changes in two places

### use functions to repeat actions

- functions are groups of actions that a programmer defines and gives a name
- while variables are named values, functions are named actions
- the steps that take place in a program and the order they go in are called the program flow 
- functions are the generic name for named groupings of code
- functions can be used in different ways throughout programming and they form the basic organization of your code 

### break down tasks

- part of a programmers job is to take complicated jobs and break them down into individual steps that cannot be broken down any further 
- it is like looking at water and then drilling down to the molecules and then the atoms that form it 
- you dive down to the smallest element that forms the basis of the object
- now take that principal and apply it to an action
- we take for granted so many steps that are part of a group of actions
- as a programmer you need to be as accurate and literal as possible with your code
- breaking down actions into smaller actions is critical to being successful
- with each function you write like take out the trash you need to define each statement or action that needs to happen within that to fulfill everything you expect and for the action, to be executed correctly
- when you breakdown a process or a task put yourself in someone else's shoes to see if the steps you outline make sense, if not add the clarity and details you need to make it fool proof to get the desired results

### customize functions with parameters

- when we create functions we take actions and group them together and give them a name
- we can then call those actions using the function name and run them as often as we need in our code 
- sometimes we want to customize the steps a little bit based on information we might have 
- parameters allow us to used different variable inside our function, like if we needed a sales tax variable to change bases on state, we could use a parameter for it

### variables and scope

- when we create variables we need them to hold values during our program, but how long do we need them to stick around? 
- as we build programs we can define how long we want to use variables, using Scope
- Scope defines how long a variable and the memory that is used to store it, is kept and how it's available for the program
- one obvious instance of when the variable is not available anymore is when the program closes, when the program stops it releases
- all the memory that it used and frees it for other programs or systems to use
- inside of our program, if we create a variable, we can access it using the name
- on our code if we create a variable and then call a function or method, the variable is available to that method since it was already created 
- if we enter into a function and create a variable inside of it, as soon as that function is complete the variable is thrown away, including the name and value
- a variable created inside a function, it is scoped to that function 
- if a variable is created outside a function, and then a function changes it that variable, it changes for the entire program, it would be scoped outside of the function, and can apply to a larger portion of a program
- anything you create in a function will be gone when you have finished it 
- you need to consider when and where you create your variables
- variable scope is an important part of knowing how to work with variables as you build more complex programs and code 


### return values from functions

- functions, sometimes called methods, are tools for programmers to take common actions and to group them to call using a function name 
- with a function you can send in values for it to use and perform actions on it 
- you often need to get information out of a function 
- because of variable's scope, any variable you create inside of it will be thrown away when the function is finished
- you need to have a way to return a value from the function when it is called
- there are 3 ways to work with a value: 

    1. use a literal, a literal is a value itself without any name or container, it is simply the value, like answer = 5\*5, the 5s are literals
    2. use a variable, that variable has a value, and can be assigned to another variable, like secondAnswer = answer
    3. the third is with a function or method, you essentially use it like a variable or literal, but to do this you need to have a return value, like answerPlusFive = function(answer) {return answer + 5}

### work with an API

- as a programmer you are building rules for how to program
- you and potentially others will use these rules to build out your program over time  
- examples of these rules: 

    - you create variables that can store certain types of values 
    - you create functions that perform certain actions and functions that require parameters
    - you create functions that return values of certain types
    - you create functions that are a combination of these

- with all of these mixed together you are creating a set of rules that a programmer will work with in the program
- you are creating an interface, or API
- API = Application Programming Interface
- as you make more advanced programs your API will expand and get more complex
- as a programmer you are doing 2 things at once:

    - you are defining steps that you want the program to perform with the hardware
    - you are defining the rules that you will use to build your program at the same time 

- you start off building the private API for your Application 
- as you get more sophisticated with your programming and coding skills you can build a public API that others can use for their own apps and programs


## repeat actions and test for conditions

### capture input from the user

- as a programmer you will create code that will have your program listen for events
- you will define what that event is (touch swipe pressure-change temperature-change location click)
- your program will perform actions based on defined events 
- the specifics on how you do this will vary slightly based on input type 
- some input happens while the program runs and happens in parallel to other things
- other types of input require that the program stops and waits for you to provide input to continue 
- the first type of input is called synchronous input, where the program and input capturing happen in parallel
- the other type of input is called asynchronous, where the program must wait for input from you to in order to continue 
- based on the type of program you are creating and the type of device it is for will define how you will create code for your user interaction

### manage different variable types

- as you program you will be working with values of all kinds, but often you will find that things will not match up, and you will need to juggle different variable types to get your code to work
- there are different ways your program can manage differences between value types 
- some ways are automatic and some you have to do yourself
- with some languages the variables are dynamically typed 
- dynamically typed means that they adjust to whatever is assigned to them 
- with dynamically types languages, a variable that is assigned as an unsigned integer can become a string if one is assigned to it 
- sometimes a value does not match a variable type 
- some languages may automatically convert that the best it can to match the variable type, like null to false
- sometimes you need to make the conversion explicit
- with some languages you need to manually convert from one type to another 
- programming languages have functions and methods that can take a value and return it as a different type 
- usually the tool that you are using for coding can help you see what your variable types are, but sometimes that is not possible
- in many languages there are methods that tell you what your types are, so you can make the right conversions
- it is important to remember, types do not just apply to functions and methods as well 
- the parameters that define what data goes into the functions and the return values are all based on specific types
- any value, either a literal, variable, expression or function will need to be managed as you work with your program

### create conditional tests 

- computers process in binary, yes no, 1 0 
- in programming you need to think in binary
- Boolean is a special datatype designed for this, and use equality operators
- there are 6 equality operators to choose from in programming
- `==` = checks if values are equal
- `!=` = checks if values are not equal
- `>` = checks if value is greater than other value
- `<` = checks if value is less than other value
- `>=` = checks if value is greater than or equal other value
- `<=` = checks if value is less than or equal other value

- if else statements create more complex tests

### build compound conditional tests

- or = will be true if either condition is true
- and = will be true if both conditions are true
- not = returns the opposite of what the above tests would return

### loops arrays

- while loop = performs an action while a certain condition is true (or not true)
- do while loop = will run the action at least once then perform while loop 
- for loop = perform an action for a specified count or amount of something
- array = one of the most basic ways to collect values as a single unit / collection in programming
- it is common to loop through arrays

## objects and OOP

### everything is an object

- in many languages, objects are the foundation
- in OOP languages, everything is considered an object
- objects consist of names, actions, characteristics

### everything is a class

- with objects everything can be defined as having characteristics, actions, and names
- to program with these, we need to have some framework or scaffolding to build objects from 
- we do this using classes 
- a class is a set of rules that define how a category of objects or a class of objects, look, behave, and take customization through various values and settings
- within a class you define 4 things, called class members:
    - class name 
    - properties
    - methods
    - constructor

- class members define the basic structure of a class
- classes are a blueprint for objects
- you don't use a class directly, you create instances of classes
- defining a class is like creating a stack of sticky notes where every page is the same 
- the sticky notes are templates that will define all the instances you create on that class 
- when you take the top note off the stack you are instantiating the class 
    - you are creating an instance of the class that you can use in your program
    - when you instantiate a class you give the instance a unique name, an instance name
    - when you create an instance and give it a name you also trigger the constructor 
    - the special constructor function is where you define what needs to get setup when you create the instance
    - sometimes you need to set some properties or execute a method to configure part of the instance
    - since it is function you can set it up to accept a value 
    - generally a constructor doesn't return any value, but an instance of the class 

### work with existing classes and objects

- as a programmer you will work with prebuilt classes that are part of the programming language and SDK (software development kit) that you will be working with 
- when you create an instance of a class, you instantiate it and the code in the constructor runs
- the constructor is helpful if you need to set things up in the instance when it runs 
- when you work with an instance you will access properties and methods inside it, defined by the class, using the instance name

- a static property is the same for all properties 
- an example could be a count that tracks the total of all instances created from that class
- a constructor could bump that count up by 1

### make your own classes and objects

- when you create a class with a property, you are by default making is accessible to everyone 
- you do not always want to give unrestricted public access to your properties
- you can take members of a class and make them either private or public
- public means that anyone can access them 
    - they can access properties like any other variable and public methods like any function
- private properties are available only within the instance and they are hidden from anything outside of the class 
- private properties can be accessed with getters and setters

### extend classes

- when you create a class you are not limited to just that class, you can add properties and methods to it 

### use polymorphism using interfaces

- an interface is a tool in OOP that allows you to categorize classes
- this allows you to say that anything that uses this interface, includes its methods
- when you create a variable it has to have a type
- you either define a type or it is inferred by the value that is being assigned to it 
- when you have a variable that has a type you define the type based on a class
- since everything is a class that means an integer, Boolean, string, and anything else to define a variable are also classes
- if we create a variable that accepts integers we are typing that variable using the integer class 
- we can type variables to be any object we want, including objects based on classes that we create ourselves
- you can type variables to interfaces instead of classes which works better in some scenarios
- this is the basis of polymorphism
- using object orientated programming, class hierarchy, and polymorphism programmers have built tons of rules and recommendations on how to create code called best practices and design patterns

## beyond programming

### debug problems

- there are a few ways you can go about fixing problems
- you can print out things in your code as it runs to see what is happening and pinpoint where things went wrong
- there are also tools you can use to control how your code runs
- many IDEs have a special debugging mode that allows you to interactively run your code line by line
- you can also do this with browsers using their built in developer modes
- another way is to create code for catching errors and handling them more gracefully, maybe by prompting the user for different input
- an exception is an error that a programmer can use to adjust their code

### refactor code to make improvements

- coding is an iterative process, you may have to come back to code months later to adjust it, and wonder what you were thinking when you wrote it 
- you maybe learned a new practice that makes the code better, or you overlooked something when you first wrote it 
- when you update your code to make it work better, you are refactoring it 
- refactoring is a common practice with programming
- as you add new capabilities to your programs, you will revisit and update older code
- the trick with refactoring is to make sure that any changes you make won't have adverse effects on the rest of your program

- refactoring is not about fixing errors or crashes, it's about improving already working code in some way
- there are 3 reasons why you may want to refactor your code
- the first reason to refactor is to improve performance: 
    - sometimes based on the types of data you work with, your program might require a lot of memory or processing power
    - refactoring your code to be more efficient with resources can make you programs faster 

- second reason is to support new features:
    - as you add new capabilities to your project, you might have existing sections of code that need to be updated to better support the code you add to your program
    
- the third reason to refactor your code is to improve readability:
    - sometimes when you write your code it might make sense to you, but going back and cleaning things up like variable names, method names, and adding comments can make your code easier for others to understand and work with 

- refactoring existing code is a common practice for any programmer, and keeps your code working its best and makes you a better programmer along the way 

### save progress and work with others

- working as a developer is an iterative process, as you add more capabilities to your project and re-factor existing code, you will want to keep a history of your progress
- sometime changes you make do not quite work out and you need a way to go back in time to an earlier point and restore from an earlier version
    - using code repositories are the main way your are able to do that 
    - one of the most popular methods is Git and GitHub, which is used to manage your code and work with others collaboratively on a project 

- code repositories are essentially snapshots in time, the capture your code at a certain point called a "commit"
    - when you finish editing your code you perform a commit that saves that point in time and the state of the code in the repository
    - you provide a description and then that is saved into the repository
    - as you continue to make changes even if you make additional commits, if you ever need to go back to another point, you can restore code from an earlier point in time

- you can create a branch in code repositories
- branches are points in the life of your code that you break the development up into 2 parts
    - one reason could be that you are getting ready to build the next major version of your product, but you need to keep the existing version around to fix bugs and issues that might crop up while you are developing the new version
    - when you are ready to release your new version, you can then manage both versions of code or merge back if you need to 

- code repositories allow you to work collaboratively with others 
- coding projects can become really big and often too large for a single person to manage
- with a code repository, you can have multiple people work with different sections of code
    - when they commit their code, you will get a notification that your project has been updated by another person
    - you can then compare or diff between what you have and the new code to you see if you need if you need to refactor anything that you have been working on 

### build iteratively using agile development

- agile means that the product is designed and built over multiple phases
- with each phase work goes into adding functionality or features that either the end user can use or you need to have in place before you can do other work
- each phase, sometimes called a sprint, is planned independently from one another  
    - a roadmap brings it all together and plots out all the sprints that are required to release the product to market 

- as programmer you will learn that agile is use for many projects

### create for multiple platforms

- as a programmer you will build programmers and apps for customers and users 
- not all of your users might be the same 
- consider they might be using different OS, devices, or browsers
- you need to plan for this reality by planning to build for multiple platforms
- there are 2 ways to make apps for multiple platforms
- the first is to use first-party tools
    - these are tools technologies and programming languages that are created by the makers of the operating system and ecosystem
    - these tools come from companies such as google microsoft and apple
    - although these tools are different the programming languages for each of them are very similar (c-sharp java swift) and are based on the same principals

- the alternative is to use 3rd party tools that can build applications for multiple platforms at the same time 
    - some of these are based on web technologies, like Cordova, while others are based on other platforms like Xamarin or Unity with C-sharp, .net
    - the advantage of these is that you only need to learn 1 set of tools or technologies 
    - but you do trade off some platform specific-capabilities 

- the important thing is that when learning programming you should keep in mind that you will be targeting many, many people and not all of these people will have the same devices or software
- as developer you need to plan on reaching as many people as you can with your project and that may require building for multiple platforms
