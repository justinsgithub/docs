# HTTP terminology

### browser

- application used to access and navigate HTML documents 
- browsers have many varieties aside from the normal visual browser
- other browser varieties include text-to-speech browsers, audio browsers, text-only browsers, vr, ar, mr, xr

### user agent

- application acting on behalf of the user 
- literally an agent of the user that is typically in a browser
- commonly referred to as a client application
- normally the browser but not always, could be middleware for example

### TCP

- short for Transmission Control Protocol
- one of the main internet protocols used by the World Wide Web, email, File Transfer Protocol, and remote administration
- when you connect to a service over the internet, you are probably using a TCP connection

### IP

- short for Internet Protocol
- the protocol actually used to transfer data between computers over a network
- every device connected to the internet as a dedicated IP address

### URL

- short for Uniform Resource Locator 
- an address pointing at a resource on the web 

### DNS 

- short for domain name server 
- DNS catalogs all domain name URLs and points them to the IP addresses of servers

### resource 

- the file or files available on a server when following a URL

### server 

- computer on the internet running some form of data storage and sharing application, most commonly a web server application
- HTTP is a client-server protocol, meaning a client / user-agent / browser sends a request to the server and the server serves responses back to the client

### proxy 

- dictionary definition

        1. One appointed or authorized to act for another, especially a person appointed to vote as one wishes at a meeting.
        2. The authority to act for another.
        3. The written authorization to act in place of another.

- software or hardware service acting as a middle person between clients and servers 
- proxies are often used when the IP address of a server needs to be hidden, or when a client or server sits behind some kind of network barrier like a firewall
- the proxy is quite literally a proxy, handing data back and forth between the client and server

### request-response pairs 

- clients and servers communicate over HTTP using request-response pairs
- a request is sent and a response is returned 
- the client request contains:

        - a request method, describing what action is requested
        - an address pointing to a resource 
        - other information about the client
        - if a client is trying to send information to the server, that information is also packaged in the request as a payload

- the response is literally a response to the request, it contains:

        - a status response code explaining what happened
        - information about how the response was handled
        - any data requested if the response was successful

### header 

- requests and responses use HTTP headers to: 

        - pass information back and forth
        - identify themselves 
        - explain what they want

- every request and response as a header and some also have payloads (the data that is transferred)
- the header contains metadata about the request facilitating communication between clients and servers 

### HTTP request method / verb 

- every HTTP request contains a method(a verb) explaining what action the sender wants to perform on the resource
- the request methods include:
        - GET to get something
        - PUT to put something
        - UPDATE to update something 
        - DELETE to delete something

### Status Response Code 

- the header of a HTTP response always contains a status response code 
- numerical code in the 100 to 500 range describing what type of response the server sent back to the client
- different number ranges are used for different types of responses: 
        - 100s for information 
        - 200s for success 
        - 300s for redirection 
        - 400s for client error 
        - 500s for server error 
        
### cache 

- dictionary definitions:

        1. An amount of goods or valuables, especially when kept in a concealed or hard-to-reach place.
        2. The concealed or hard-to-reach place used for storing a cache.
        3. A fast storage buffer in the central processing unit of a computer.

- method for storing data on the client or the server to speed up performance
- literally store data for a length of time to speed up transfers and performance
- for example, when you visit a regular website, your browser will likely download the CSS files for that website once, and then cache it in it's memory so when you navigate to the next page or come back to the site later, you don't have to re-download that CSS file
- websites and web servers can instruct clients to:      
        - cache files 
        - clear cached files 
        - update specific cached files

- this is done through instructions passed in a cache header 

### stateless 

- HTTP is stateless, meaning every request and response is unique, and no state is stored

### cookie 

- used to create stateful HTTP sessions, and notify the client and server what state each other is in
- string of data passed back and forth between the client and server to create a stateful session 
- this is how once you have logged into a website, you stay logged in 

### session 

- clients and servers can share information about states by passing information back and forth, creating a session
- when you login to a website, you typically stayed logged in 
- this happens because the server has placed a cookie in your browser, in it's cache
