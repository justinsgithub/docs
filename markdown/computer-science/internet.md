# Internet 

- the internet is not a strict set of rules, it is a design philosophy

## internet basics

### how the internet was born

- internet can be traced back to 1960's
- what we call the internet first started as a project for the United States government
- ARPANET = Advanced Research Projects Agency Network
- ARPANET was established in 1969 by the Department of Defense as a communication network 
- in order for the network to work, it needed to have a way for information to be sent reliably from one point of the network to another
- the blocks of information that are sent are called packets, and they need to be transmitted multiple times, simultaneously
- to do this a set of rules needed to be created
- in the 1970's, Vint Cerf and Robert Kahn created 2 sets of rules to do exactly that
- the Transmission Control Protocol (TCP) and Internet Protocol (IP) TCP / IPas a communication network 
- in 1982 TCP / IP was introduced as the standard networking protocols on the ARPANET which remained under the control of the government through the 1980's
- in 1990 Tim Berners-Lee created an application called World Wide Web (later renamed Nexus), at the European Organization for Nuclear Research, or CERN
- using a NeXT computer Berners-Lee created the first web browser that allowed a user to navigate through pages of information using links to connect phrases to additional pages
- with this browser Berners-Lee alos created the Hypertext Transfer Protocol (HTTP) and Hypertext Markup Language (HTML)
- Berners-Lee also created the very first web server called httpd

### who manages the internet?

- nobody controls the internet
- a combination of government agencies, international groups, and companies in the private sector collaborate together to keep the fundamental technologies of the internet working 
- these groups form the rules that define how all of the different systems work
- the internet is formed of multiple networks that all conform to the standard protocols of the internet TCP/IP
- some of these networks are owned by private companies like your internet service provider, universities, cell phone companies and others
- all these different networks need to have a way to tell one from the other 
- it is like having a bunch of airports, each airport is run by a different group of people: 
    - you need to have a way to know that if you are going from airport A to airport C that the pilot knows where they are going
    - and that the airport you are going to knows to expect your arrival 
    - in the case of airports an agency known as the International Association or IATA developed a system of 3 letter codes that every airport throughout the world has adopted 
    - if you're at SFO and your bags and ticket have JFK on it, it knows that you are headed to New York City and every airport is aware of each other

- ICANN = Internet Corporation for Assigned Names and Numbers 
- URLS = Uniform Resource Locator
- the same happens on the internet, but instead of airports there are networks
- ICANN does the same thing, it manages the names or identifiers that are part of the internet like URLS
- URLs are the phrases you know for websites, portions of a website name (called a domain) are managed by ICANN

- for example: 
    - a government website in the US typically ends in .gov
    - commercial sites end in .com
    - international sites have their own designation
    - in the US it is google.com, but in Canada it is google.ca
    - Amazon in the UK is amazon.co.uk

- there are a few international agencies called standards bodies, like the W3C and WHATWG that are groups of people that work to develop a universally adopted set of rules(called standards) that software and hardware companies can rely on to build products that will work with the technology

- many of these standards bodies have individuals from private companies, and they work to add new features to languages and rules of the internet
- if a new company really wants to add a new feature to their browser but it is not part of the standard rules, they might add the feature in and tell their users and fans that this awesome new feature is available to them 
- if they like it they might demand that other browsers adopt it and then push for it to become a standard
    - on the other side, some companies might want to push their solution over another
    - so you have a situation where the makers of the browsers have alot of power in determining what goes into the rules, known as a specification(or spec)

## addressing & routing information

### sending and receiving information

- everything that we create on the computer is translated into digital information using bits

- every message, file, or stream of information is broken down into small chunks called packets 

- when packets are sent on the internet they usually wil travel the network together

- each packet contains some important information inside of it called the header 

    - first the packet says the IP where it came from (like the return address on an envelope)

    - if there is an err sending the packet there is an IP to return to let the sender know it did not go through, or return to the sender and confirm the packet was sent 

    - the packets then says where it is going (like the address on an envelope)

    - a packet also says how long it is by stating the number of bytes that are in the packet, this way we know if it is complete 

    - all the packets in a message are the same size, so we know if one is not the same size as the others, we know that we have lost some data 

    - we also need to know how many packets are in a message, each packet lives within its own set 

### internet protocol & IP address

- instead of a street address, address on the internet,use numbers

- the use of numbers as address is one of the core concepts of the internet and is called Internet Protocol (IP)

- each device on the internet has an address, called an IP address

- there is IPv4 and IPv6 

- IPv4 is 4 numbers seperated by periods from 0 to 255, allowing for over 4billion possible addresses on the internet

- each packet that is sent has the sender and receiver address in the header, store as IP addresses 

- there are public addresses and private ones 

- IANA = Internet Assigned Numbers Authority

- IANA determines what numbers and subsets are assigned to different groups

- within these groups there is the public IP you have on the internet, and a public on that you have on your local network 

- the job of a router is to router data from the public address to the local device private addresses 
### scaling up the internet from IPv4 to IPv6

- in 1995 an experimental stream protocol called IPv5 was designed but was never finalized 

- in 1995 the IETF, Internet Engineering Task Force needed to create a new way to provide addresses on the internet that would expand beyond the 4 billion limit 

    - the result was to increase the number of bits used to store and address 

    - IPv4 uses 32 bits, IPv6 uses 128 (340 undecillion unique addresses / 340 trillion trillion trillion ), more then the amount of atoms on the surface of the planet 

    - new operating systems support something called dual stack, where both IPv4 and IPv6 are supported at the same time, which allows device to work regardless if the hardware is updated or not 

- IPV6 is represented by binary bits, organized into 8 16 bit sections

- each 16bit block is converted to hexadecimal and is seperated with a colon 

### Domain Name Server and DNS

- a domain name is a sequence of phrases that map to a giant internet-wide databae of IP address 

- when you enter a domain name in your browser, it gets sent to a DNS 

- the DNS holds a cache of tons of domain names and their matching IP addresses 

- the process of using a domain name to find an IP address is called domain name resolution 

- the .$ part of internet names is called the top level domain 

- the parts before the custom domain is called the subdomain 

### routers & redirecting requests

- routers are the signposts that packets use to travel across the internet and over private networks within an organization 

- using the header information in data packets, routers read the information in the header to direct packets to go to the right location 

- when you send data from your computer, it first gets sent to the router, the router reads the header to figure out where to send it 

    - the data could either be sent to the internet or another local devic on the network

    - when you send data to the internet, it gets sent to your ISP and then to its destination 

- routers have a component called a configuration table, which is a set of commands that defines how the router works 
### packets & fault tolerance

- messages are broken down into small pieces of data called a packet

- a packet consists of about a kilobyte of information, but if you are sending a long email, an audio file, or an image, that would require that the data is broken down into dozens or even hundreds of packets, or more 

- these chains of packets will rarely stay together as a group and will break apart and take different paths along the internet

- the `ping` command sends packets to a server and then requests the server to send the information back 

- using a ***ping*** you can test how long it takes to reach or ***ping*** a server and if any packets are lost along the way 

- ***fault tolerance*** = being able to navigate through various conditions on the internet 

- if there are problems with certain points on the network, the internet is able reroute packets 

- 

### reliability and TCP

- when hundreds or thousands of packets are transmitted from 1 location to another, they can take different paths based on changing network conditions and other factors

- when packets get to a destination they are unorganized and sometimes not complete, so the messages need audited and reviewed in order to put it together the right way

- TCP = transmission control protocol 

- TCP uses a process where it looks at all the packets in a message and checks them

- using the header information in each packet, it knows how many there are, how large they should be, and in which order the packets should be in

    - using this check list it is able to rearrange the packets, if it finds that a packet does not match the expected size or other characteristic, it is discarded and using the header information again, sends a request back to the sender for a specific package to be resent 
    
    - after assembly the packets received, if TCP finds that packets are missing, it goes back to the sender and asks for the items o be resent

    - after TCP verifies that all the packets are accounted for, are in the right order, and are free of any issues, it certifies the data and the packets are merged together to recreate the original file that was on the sender's device 

- for most transmissions on the internet, the TCP method is used, which is why the IP and TCP protocols are referred to as a single item TCP/IP

- TCP places reliability in a higher priority than speed or latency

- for instances where reliability isn't as important, but speed is, there is another protocol called UDP

- UDP = User Diagram Protocol

- UDP does not do the extensive reliability checks that TCP performs, but because of this it can send information at faster rate 
## web servers

### identifying a server with URLs

- A records and CNAME records store rules for how domain names are translated to IP addresses 

- A records are for pointing a domain name at the IP address of webserver 

- A record = address record

- CNAME records are for redirecting domain names to a different domain

CNAME record = canonical name record
### HTTP and requests

- HTTP = HyperText Transfer Protocol

- a daemon is a program that runs on a server and runs in the background and does not require any human interaction at all 

- the daemon for most web servers is the HTTPd program, or HTTP daemon

- httpd does 1 thing, listens to requests that are routed to the server 

### hypertext and HTML

- HTML = HyperText Markup Language

### remembering requests with cookies 

- the time that you are on a site is called a session 

- browser cookies store information about your sessions to make it easier to work with various websites and save settings or things in your shopping cart

### securing requests with SSL and TLS

- when you send information over the internet, it is publicly visible by default 

- SSL = Secure Sockets Layer

- TSL = Transport Layer Security 

## encryption

### Caesar's cypher and keys

### improving security with longer keys

### symmetric and asymmetric keys
