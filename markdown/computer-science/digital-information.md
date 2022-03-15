# Digital Information

## innovation and technology

### history and innovation

- the first idea of a computer was created by Charles Babbage
- many of the concepts of computer logic today existed in Babbage's work back in the 19th century
- Ada Lovelace was considered the first programmer 
- Alan Turing is largely credited with the birth of modern computer science
- Turing formalized the concepts of algorithm and computation using a general purpose computer called the turing machine
- all innovation goes back to the basics of computer science
- all future innovation will only exist because of work done today and in the past

### impact of coding and programming

- coding and programming are what allow all the hardware innovations that have been created, come alive
- the way that programming works with programming can happen at many levels 
- to work with hardware you need to have a system that can work directly with the hardware components on your computer
- this can be processors, memory, or devices that are attached, through ports on your computer
- a software that does this is called the operating system 
- the OS is the overall system that interfaces the software we work with everyday to the hardware that is in the machine 
- API = Application Programming Interface
- to play a game on a computer, the operating system provides an API for how the game can interact with the hardware
- the OS defines what the game can and cannot do 
- without the API, a game could do very bad things to the computer 
- the API protects the system and creates a clearly defined way that programmers can work with hardware and other software
- makers of the operating system also provide a set of tools that allow developers to work with the system
- SDK = software development kit
- SDKs help developers build applications that can be used on top of the operating system

- the SDKs include 3 basic parts (Code, Language, Compiler / Interpreter):

- code:
    
    - prebuilt sets of code that do alot of the heavy work for you 
    - defines things like numbers 
    - arithmetic 
    - working with the file system 
    - user interface controls like buttons and windows 
    - navigation, such as keyboard and mouse

- programming language: 
    
    - tells the computer what to do when a user wants to run the app 

- interpreter / compiler:
    - takes the instructions that are created and when needed, instructs the operating system on what to do 
    - interprets / compiles the instructions into binary numbers that the computer can understand
    - no matter what you are doing on a computer, it needs to be translated to binary numbers for computers to understand

## computer communications

### yes and no answers with binary

- binary = a system with only two possible states (yes or no, on or off)
- different ways to represent binary state: 
    - boolean: a value that contains one of two options, true or false
    - numbers: 1 and 0, 1 represents on and 0 represents off 

- binary information can be stored and communicated by using states of on or off
- microchips have logic gates in them which uses electricity to determine the on and off signals
- storage devices can change and save binary states to be able to access them later
- networks can communicate by sending signals with on and off states defined within them 
- a single binary state is called a bit, the smallest amount of storage you can measure 
- using the basic bit unit, we can build larger and more complicated representations of information
- and create a way for us to take things that we recognize everyday and represent them using these tiny values called bits 


### binary and bits

- we can represent the binary states of on and off as numbers 
- the binary number system only uses digits, 1 and 0 
- for a binary state of on, it is represented by a 1
- for a state of off, it is represented by a 0
- storing a single value does not make much sense on its own, you would have to store multiple values in a single row
- to do that you would create a string of them, and since they are all numbers, you are just creating a larger number with multiple digits or bits
- a grouping of 8 binary digits is called a byte
- a byte is a common measure of data we use everyday 
- a kilobyte is 1,024 bytes
- a megabyte is 1,024 kilobytes
- a gigabyte is 1,024 megabytes
- a terabyte is 1,024 gigabyte
- on a computer you might have a drive that can store a terabyte of data 
- a terabyte can contain almost 9 trillion bits, 9 trillion individual states of on and off 
- each of these bits holds an on or off state that holds a tiny part of a larger piece of information
- whether it is a single number, a piece of text called a string, a document, photo, song, movie, or a computer program
- all these things we work with every day are translated into bits that are stored, transmitted, and translated by computers and networks 
- the process of taking information that we recognize today, like a string of text, and converting it to a binary number is called encoding 
- you are taking something that we recognize in a way that humans can understand it, and are finding a way to convert it using a specific process into a string of binary digits that can be transmitted, processed, and stored by a computer or network
- using that same process but in reverse, those binary digits can be converted back into the information that we work with every day 
- this is called decoding, it reconstitutes the files that are transmitted or accessed and presents them to us in a format that we can recognize 
- in order for the encoding and decoding process to work, the bits that contain these values need to be stored accessed, or transmitted
- the way this is done is developing a protocol, or set of rules, for how bits are transmitted, and defines the basis for how digital communications work

### communicating with bits 

- we can translate information and code it as bits in a number of ways 
- since bits represent states of on or off, which we represent as 1s and 0s, we can communicate those to other people 
- ***bitrate*** is the number of bits that are transmitted each second
- when communicating bits, both sides of the communication need to agree speed and size of the communication, how the bits are being sent

### digital communication 

- there are 3 ways of communicating in bits when connecting to the internet:
1. radio
    
    - Wi-Fi networks are based on radio waves that transmit binary states, based on alternating the radio waves that send information
    - by encoding information into binary data, it is then translated into these varying radio waves and can be transmitted, received, and converted back to binary data, and decoded into its original format
    - wifi and radio communications are great for short distances, but if you take your laptop to far from the hotspot the signal gets weaker until, at some point it isn't strong enough to reliably send information
    - radio can also be noisy
    - when you have one hotspot transmission don't encounter much interference
    - but if you have multiple hotspots you can create a lot of radio noise that can create interference and break down the reliability of the network
    - there are certain bands up and down the various radio frequencies that are reserved for different types of transmissions, such as satellite information, FM and AM radio, or for other types of communication 
    - hotspots use unique channels to reduce interference and noise, but there are still limitations
    - because of these limitations radio is generally used as a way to connect individual devices to a network


2. electrical

    - other formats like electricity can support larger and more complex communication 
    - with electricity you can send electric pulses over wires that represent binary states 
    - an ethernet cable is based on electric transmission of data.
    - data that is encoded into binary states and transmitted is then sent using these eletric pulses
    - electric and wire communications are the foundation of much of digital communication, especially within a home or office 
    - for instance, while you might use Wi-Fi that uses radio waves to transmit data, the hotspots you connect to are wired in a complex network of transmission lines that use electricity
    - electricity is used for large amount of communications 
    - electricity does have some limitations with speed and reliability, especially along great distances 
    - where electricity starts falling short is where optical comes in 

3. optical

    - optical or light communications uses pulses of light sent along a cable of glass or plastic 
    - the speed of light, when sent through glass, can be about 2,000 kilometers per second (124,000 miles per second)
    - glass has different limitations, mostly cost 
    - optical cables are much more expensive than cables based on electricity 
    - optical cables are generally used for the long haul communications across continents and oceans



- together, radio, electrical, and optical power digital communication across the globe and even outside of it 
- using special frequencies, we are able to send and receive digital information with satellites and probes, that we send to other planets in our solar system
- the further sats and probes go out, the longer it takes to get the information, which is why it can take months or even years to get all of the information recorded by an exploration probe visiting someplace in our solarsystem like Pluto and sending that information back to earth
- we represent how fast computers can send and receive information (bitrate) by measuring the bandwidth of the transmission, which is the theoretical maximum that a communication system can support 
- bandwidth is represented at a specific bitrate
- if you are using a computer with a usb3 port, it has a bandwidth of 5 gigabits per second
- older Wi-Fi networks like 802.11b standard can transmit at 11 megabits per second 
- newer Wi-Fi networks like 802.11ac can transmit at 1.3 gigabits per second, or 1300 megabits per second
- 802.11b,g,n,ac are names used to find the types of wireless network
- Wi-Fi networks can form to a standard, so devices of different types can communicate together, but you need to have matching support on both ends 
- an older laptop that can understand 802.11g networks will not understand anything from an 802.11ac network
- most Wi-Fi networks can transmit across multiple standards
- the last thing to consider with digital communications is the time it takes to get a message from one side of the globe to the other, this is called latency
- latency is usually measure in milliseconds, or 1,000th of a second
- if you are communicating in 2 directions, latency can be an issue, since the longer it takes for one side to communicate to the other, that is doubled if the other side needs to send information back in response
- the lower the latency, the faster 2-way communications can take place
- whether it is with light, electricity, or radio waves, all of the information we communicate and transmit is encoded as binary data and can reach anyone on the planet (any maybe even another planet)

## number systems

### abstraction of numbers 


 - when we think of numbers, we think of digits, 0 - 9
 - for example: 723, this number represents a value, or a count of something, it could be 723 dollars, 723 yards of yarn, 723 gallons of milk, the number tells us how much of something there is, but numbers can be represented in different ways and mean different things
 - 5 books, and V (roman numeral) books mean the same thing but are written completely differently 
 - Roman Numerals are another way of representing how much of something we have 
 - Roman Numerals follow a different set of rules using symbols like I,V,X,L,C, and M
 - Roman Numerals are based on basic counting, starting at 1, symbols are added, and then at a certain point, the next largest symbol is used 
 - numbers can be represented in different ways 

 - decimal number system

     - we represent numbers using the decimal number system 
     - the decimal number system uses base 10, which is why there are 10 digits that we use for numbers
     - the other key part of a number system is the fact that you can have multiple digits
     - we can take the number 5 and represent that as a single digit, but the number 15 needs 2 digits
     - the next number to the left represents 10 
     - classic odometers represent a good visual way we can represent counting in decimal
     - you can think of the first digit being multiplied by the power of 0 (n<sup>0</sup>)  
     - n(0) equals n * 1
     - as you move to the left, you can take the exponent and increase it by 1 for as long as the number is

    - decimal: 

    |7  |2  |3  |total|
    |---|---|---|---- |
    |100*7|10*2|1*3|723|
    |700|20|1*3|723|
     
    - octal: 

    |7  |2  |3  |total|
    |---|---|---|---- |
    |64*7|8*2|1*3|723|
    |448|16|3|467|
     
    - hexadecimal: 

    |7  |2  |3  |total|
    |---|---|---|---- |
    |256*7|16*2|1*3|723|
    |1792|32|3|1827|


- hexadecimal numbers are often found in coding to represent colors
- #e5411c 
     - each color(2 letters) need 1 byte to represent it, you would need 3 bytes per pixel
     - the first 2 numbers represent red, the second 2 green, the third 2 blue
     - this is controlling the amount of red, green, and blue light in each pixel 

- when thinking about number systems, you have a few things that are the same:

     - the base number which is the maximum range of possible digits
     - multiple columns that are incremented exponentially the further you go to the left to make larger values, (the opposite applies as well, to make smaller numbers)
     - with those rules you can apply them to any base number, including 2 
     - base 2 is the basis of the binary number system, which serves as the foundational way computers store, communicate, and process information 

### binary numbers

- binary states are the basis of how computers store, process, and share information using states of on or off 
- using the binary number system we can represent these states using a base 2 number system, using 0 and 1 
- using the rules of numbers systems we can create a system for what a binary digit looks like
- we have a maximum of 2 possible digits, 0 and 1
- we also have multiple columns that exponentially increases in value from right to left, based on 2, the base of the number system 

|binary number|decimal values|total of decimal values|
|-------------|-------------|-------------|
|0            |0            |0            |
|1            |1            |1            |
|10           |1+0          |2            |
|11           |2+1          |3            |
|100          |4+0+0        |4            |
|101          |4+0+1        |5            |
|110          |4+2+0        |6            |
|111          |4+2+1        |7            |
|1000         |8+0+0+0             |8            |
|1001         |8+0+0+1             |9            |
|1010         |8+0+1+0             |10           |
|1010         |8+0+1+1             |11           |
|1100         |8+4+0+0             |12           |
|1110         |8+4+2+0             |14           |
|1111         |8+4+2+1             |15           |
|10000        |16+0+0+0+0             |16          |


- if the number ends in 0, it is even 
- when the number is equal to a power of 2, we add a new column

### how to figure out the binary representation of a decimal value in binary:


    1. decimal-number = 39, binary-number = ?
    2. find the highest power of 2 less than decimal-number
    3. highest-power = 32
    4. divide highest-power by 2 until you get 1
    5. 32 / 2 = 16, 16 / 2 = 8, 8 / 2 = 4, 4 / 2 = 2, 2 / 1 = 1
    6. 5 divisions
    7. current-binary-number = 1 + 5 digits
    8. binary-number = current-binary-number = 100000
    9. current-decimal-number = previous-decimal-number - highest-power
    10. current-decimal-number = 7
    11. find the highest power of 2 below current-decimal-number
    12. highest-power = 4
    13. divide highest-power by 2 until you get 1 or 0 
    14. 4 / 2 = 2, 2 / 2 = 0
    15. 2 divisions
    16. current-binary-number = 1 + 2 digits
    17. current-binary-number = 100
    18. binary-number = previous-binary-number + current-binary-number = 10100
    19. current-decimal-number = previous-decimal-number - highest-power
    20. current-decimal-number = 3
    21. find the highest power of 2 below current-decimal-number
    22. highest-power = 2
    23. divide highest-power by 2 until you get 1 or 0 
    24. 2 / 2 = 0
    25. 1 division
    26. current-binary-number = 1 + 1 digits
    27. current-binary-number = 10
    28. binary-number = previous-binary-number + current-binary-number = 10110
    29. new-decimal-number = previous-decimal-number - highest-power
    30. current-decimal-number = 1
    31. find the highest power of 2 below current-decimal-number
    32. highest-power = 0
    33. divide highest-power by 2 until you get 1 or 0 
    34. 0 / 2 = 0
    35. 0 division
    36. current-binary-number = 0 + 1 digits
    37. current-binary-number = 01
    38. binary-number = previous-binary-number + current-binary-number = 10111

    binary-number = 10111

- this conversion process is the basis for all encoding

### bit size and values

- with binary numbers we can store numbers that we would ordinarily represent in decimal, in a format that the computer can store, send, or receive
- as we think about values, the more digits that are in the number, the larger the potential value
- a 2 bit number can store 4 different values 

|digits|different values|max value|
|---|---|---|
|x|0 1|1|
|xx|00 01 10 11|3|
|xxx|000 001 010 011 100 101 110 111 |15|

- 8 bit, 16 bit, 32 bit, 64 bit and higher are all representations of the number of digits that are available to store as a binary number 
- an 8 bit column has 8 possible digits and a max value of 255, or 256 total values, including 0 
- 2<sup>8</sup> = 256 
- 2<sup>16</sup> = 65536
- 2<sup>32</sup> = 4,294,967,296
- 2<sup>64</sup> = 18 quintillion

|1|1|1|1|1|1|1|1|
|-|-|-|-|-|-|-|-|
|128|64|32|16|8|4|2|1

- using these bits, a computer can store values in memory 
- a programmer needs to balance the storage requirements of their applications to the amount that is available to the program
- to help manage that, developers have different sizes and types of containers called variables that they can use to store information
- each variable type has a different bit size requirement, meaning that the variable has a limited size that the programmer can store values into 

### overflow

- when a computer sets aside a specific amount of memory to store a value, it does so based on the number of bytes that might be required 
- overflow happens when the space reserved is too small for the value it is trying to store
- the first digit in an unsigned number is 1 for a positive number and 0 for a negative number 
- this results in weird and unpredictable errors
- the y2k bug / year 2000 but happened because programmers were only storing the last 2 digits of years and assuming the 19, which obviously caused problems when 2000 hit 
- now years are stored with 4 digits, which is going to cause more problems in the year 10000
- the number of seconds in 10000 will be 252288000000
- computers store dates using binary, often by counting the number of seconds that have elapsed since a specified date
- for many systems and programming languages, dates are stored as the amount of seconds since 12:00AM, January 1st, 1970 
- the date gets stored in a 32-bit binary number 

- Date: 2038-01-19 03:14:05 UTC
- Binary: 01111111 11111111 11111111 11111010
- Decimal: 2147483642
- Date: 1900-01-19 03:14:05 UTC


## encoding and sending text

### ASCII and Unicode

- using binary we can represent values of different types in a format that is native to a computer 
- we can also do this with text 
- encoding is taking text and converting to a unique code, the reverse is decoding
- the encoding and decoding have to agree on a standard
- we use numbers to represent letters 
- 65 = A, 97 = a
- each number is converted to binary, 8 bits, 1 byte, 256 characters 
- this encoding is called ASCII, American Standard Code for Information Interchange 
- ASCII was first developed in the early 1960s
- over time the system expanded to include more characters
- at a certain point there were too many symbols or glyphs in the world to represent by 256 numbers, so ASCII was at it's limit
- a new standard called Unicode uses multiple bytes to represent thousands and thousands of symbols from languages all around the world
- the web is standardized on the UTF8 format, (8bit Unicode Transformation Format)
- UTF8 is backward compatible with ASCII 
- each character is represented prefixed with a U and then followed by a 4 digit hexadecimal number (U + 0044 = D)
- 4 hexadecimal numbers require 2 bytes to store them, or 16 bits
- using just 2 bytes, over 65,000 symbols can be encoded and decoded
- there currently 3 plane of Unicode being used and other plane that are not used or can be customized 
- planes can go all the way up to plane 16
- all in all, Unicode can store 1,114,112 symbols(called code points)

### encoding formatted text

- when we want certain parts of text formatted, we need to mark the start point and end point so the computer knows words / sections we want formatted 
- we use different markers for different formats

## working large data 

### file sizes and bytes

- data has a unit of measure just like distance 
- the smallest amount of storage is a single bit, a single 1 or 0, on or off 
- we group bits into sets of 8 to make a byte
- the byte is the base form of measurement for data size, just like meter when we measure distance
- from this base size we can use prefixes to show magnitude of size
- measurement in data size is done in multiples of 1,024, instead of 1,000, to work with binary better 
- kibibits is technically the accurate way to represent 1,024, but for the most part kilobyte is the same thing
- b = bit, KB = kilobyte
- 1 kilobyte (KB) = 1,024 bytes = about 2-3 paragraphs of text 
- 1 megabyte(MB) = 1,024 kilobytes = about a 1,000 page book 
- 1 gigabyte(GB) = 1,024 megabytes = about 1,000 books with 1,000 pages each
- 1 terabyte(TB) = 1,024 gigabytes = about 1,000,000 books with 1,000 pages each
- 1 petabyte(PB) = 1,024 terabytes = over 1 quadrillion 125 trillion 899 billion 906 million bytes
- there is also exabyte, zettabyte, yottabyte
- bandwidth = how much information can be transferred within a particular time
- a common Ethernet connection can send about 1Gb(gigabits) / second (128 MB / second)

### text compression

- compression allows data to occupy a smaller amount of space, but at the same time preserve the original data through compression protocols that encode and decode the compressed file
- compression looks through a file for matching words / patterns / sentences and replaces it with a unique Unicode character
- you perform multiple rounds of compression, then finding matching patterns of the unique Unicode characters as well 

### encoding images

- the same encoding happens for images, but the program looks for patterns of matching pixels instead
- images that are based on pixels are called bitmaps
- for a picture which is HD resolution (1920px x 1080px) it is 2,073,600 pixels of data to store
- a HD res pic would require 6,220,800 bytes (about 5.9 megabytes) to store it 
- 4k is 4 times HD, so it is 3,840 x 2,160(8.2 million pixel or 24 million bytes or 23 megabytes)
- with real image files there is some additional information that is stored in them, like the software that was used to make them, the owner of the file, and other information stored inside them
- so actual images will be a little bit larger than the above dimensions
- a video that is showing 30 frames per second means 30 individual images are playing each second the video plays
- an HD video that is 1 minute long is 1800 individual images that are shown in that minute
- 1 minute HD = 10.42 GBs (11 billion bytes)
- 1 minute 4K = 41.71 GBs
- above does not include audio 

- Vectors are another way to store images 
- instead of storing individual pixels, vectors store pictures using points
- instead of pixels, the points on the boxes are encoded based on a coordinate system
- the result is a much smaller file since it only contains point information for the boxes
- Vector images can also scale easily and redraw the lines proportionally when you make the image bigger
- with a bitmap the information is not the same so the image gets distorted or pixilated if it gets too big
- the more complex you make your vector, the more data it requires 
- you cannot really represent photographs in vector form
- web browsers and apps can work with both formats
- a web browser can worth with bitmap formats like JPEG, PNG, and GIF
- a web browser can also work with Vector formats like SVG
- both of these are ways a browser can decode image files and render them for you to see

### image compression and file formats

- in theory there are an infinite number of colors you can create through mixing red green and blue light
- at a certain point people cannot tell the subtle difference between colors
- reducing color variations is one way to reduce the size of photographs and images
- one popular ways of doing this is the GIF format
- a GIF is based on a total number of 256 colors
- the image can use either a standard 256 color palette or it can select colors from the 24-bit RGB color space 
- LZW is a lossless compression format
- lossless means it can reduce the file size further without degrading the visual quality of it 
- JPEG is another image format  
- JPEG compression is lossy, as it compresses to reduce the file size, it cannot be uncompressed into the exact original format, it will lossy, or lose details as it is opened and displayed again  
- JPEG has a variable amount of compression that lets you trade off size for detail
- using the JPEG format you can define the amount of loss in detail when the image is compressed
- JPEG can have little to no loss of detail, or significant amounts
- PNG (Portable Network Graphics) is another format, which is an improved version of the GIF where pixels can contain 24-bit RGB color values, or 32-bit values which also include transparency, allowing images or content that appears behind it to show through the image
- all these formats are specific to representing images on screens 
- there are other formats that are for print, photography and more
- in print color is stored by the amount of various types of inks that are use in the printing process 
- unlike with light, pigment uses different colors to build the rainbow of colors that can be created with CMYK (cyan, magenta, yellow, black) as the primary colors
- for photography, camera sensors capture light information that isn't processed into specific colors
- photography formats, sometimes called RAW formats contain data, not pixels and need to be processed using software to create the color for each pixel
- the RAW file stores the radiometric characteristics of the picture, which can be things such as light intensity, color, and dynamic ranges within the subject captured by the sensor
- image files can vary in type, context, and format 
- pixel images can rely on compression formats that can alter the balance between size and color or size and detail
- for screens it all comes down to how each format is decoded, to let the pixel know how much light to display
