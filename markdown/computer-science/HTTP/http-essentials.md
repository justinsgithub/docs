# HTTP Essentials

- Hypertext transfer protocol, a protocol used to transfer hypertext
- in this context, a protocol is a system of rules that allow communication between different entities, such as computers
- hypertext is a somewhat outdated word for text that is displayed on a computer screen, which contains links to other texts (web documents)
- HTTP is the set of rules that servers and web browsers use to transfer web documents back and forth, which is why every URL starts with HTTP

- the core component of HTTP is the request-response pair

## HTTP headers

- when requests and responses are sent back and forth over HTTP, we can include HTTP headers with additional information
- these headers can include:
        - what type of client sent the request 
        - server configuration 
        - time and date of the response
        - how long the client should store the data
        - what format the data is in 
        - the cookies used to track sessions

## seeing HTTP in action

- anytime you load something in a web browser, you are seeing HTTP work 
- when using a web browser you are not actually seeing what is really happening because the browser puts a nice User Interface on top of all the code stuff happening behind the scenes
- to see what is happening behind the scenes, you need to use the browser's developer tools

### developer tools

- open developer tools 
- go to the network tab
- this tool can capture all the network traffic, between the browser and the server and display it to you
- the tool does not always do this by default because it uses a lot of resources
- once you've opened the network tab, make sure all is checked, and then hit reload for the page
- all the files that the browser requested from the server will be displayed
- in the transferred column you can see which files have been cached by the computer
- you can click on any of these files and see the full transaction that took place
- you will see: 

        - the URL that was requested by the browser
        - the request method, GET majority of the time
        - the remote IP address that the URL resolved to 
        - the status code for the response
        - the HTTP version that was used
        - request headers 
        - response headers

- to run more in depth tests on response and request headers, you can use a dedicated rest client to do so
    
    - with these applications you can send custom request headers as plain text and get the responses back as plain text to inspect, without having to deal with the browser interface

## HTTP flow 

- imagine the whole web as a library, and you are a client looking for information
- in this library, each row in a shelf is a website 
- each site / row can carry a bunch if different books (information, documents, images, audio, stylesheets, js sheets, etc.)
- when you want to see what is on one of these websites / rows, you go to the librarian and make a HTTP protocol request
- can i get the stuff from row #3?
- this request is received and handled by the librarian (representing servers on the web), who goes to the cubby, gathers up the relevant pieces that match your request, and hands them back with a response status

### flow of all HTTP transactions 

1. the browser opens a TCP connection to the server 

    - this ensures data can be sent back and forth over the network and that the data sent from one end is put together the same way at the other end 
    - if the connection happens over HTTPS, TLS certificates are exchanged to ensure only the computer and the server can encrypt and decrypt the transmitted data
    - this prevents anyone from being able to eaves drop on the conversation between the client and server, and steal the data they are transmitting

2. the browser sends an HTTP message

    - this message always contains an HTTP method like GET, PUT, DELETE, etc.
    - the message also always contains a URL pointing at the requested resource
    - the message can also contain headers like cookies, or authentication data 
    - the header can also contain data if the browser is submitting data to the server using the post, put, or patch methods

3. the server performs the requested actions and sends a response back to the browser

    - this response will contain a HTTP status message indicating what happened 
    - the response will include headers with information about the response 
    - the response will also return the data that was requested 
    - the returned data could be an HTML document, stylesheet, JS file, image, or any other type of content used in a standard website

4. once the response is full received, the TCP connection is closed

    - since HTTP is stateless we are now back to a clean state

- in most scenarios the HTTP transaction between a browser and a server is to receive a web document for a page or a view
- this document typically holds links to CSS and JS files as well as referenced elements like images
- each of these items is fetched from their server and brought into the browser using the same HTTP flow

## HTTP/2 multiplexing + server push

- HTTP2 allows multiplexing, meaning multiple transactions can take place over the same TCP connection at the same time
- this new protocol also allows the server to push the data to the browser
- pushing data to the browser means if the browser requests a specific document, the server can say "this document depends on these other files, so i will push them to you at the same time"
- this improves performance and reduces the load time for webpages and views significantly


## HTTP/2 vs HTTP/1.1
- when people talk about HTTP they often refer to HTTPS and HTTP/2
- just like other technology HTTP is constantly evolving and improved to be better, stronger, faster
- the page is referring to HTTP/2
- HTTP/2 is relatively new in web terms, and as of 04/03/18 powers between 70-80% of all transactions over web
- the older protocol HTTP/1.1 is still alive and is also the fallback protocol anytime HTTP/2 fails, which means you will encounter HTTP/1.1 from time to time now and in the future
- HTTP/2:
        - is faster and more secure and uses compression algorithms to speed up requests
        - allows for multiplexing, which means multiple files are sent over a connection at the same time
        - requires an encrypted connection between the client and server through HTTPS

- HTTP/1.1
        - uncompressed headers
        - transfers only 1 file at a time over a connection
        - no default encryption

- in an ideal world every HTTP transactions would be encrypted over a HTTPS connection using the HTTP/2 protocol
- in the real world most HTTP transactions will be done using HTTPS over HTTP/2 and when that does not work they will fall back on unencrypted HTTP/1.1, which while slower still gets the job done fine


## core principals

### Plain Language & Human Readable

- when you see a HTTP request or response you can read it out loud and understand what it is saying, even if you don't really know how the technology works
- for example, all HTTP request methods use simple human words (GET, POST, PUT, DELETE, CONNECT, HEAD)
- you do not need to know anything about computers or networks do get an idea of what the above verbs mean

### stateless protocol

- this means each request sent over the protocol is unique, and no request is connected to another request
- in other words, HTTP has no memory of other requests
- if you go to a webpage with a photo gallery slideshow and it will show you the first picture, reload the page and it will show you the first picture again because HTTP has no memory if you making that first request
- this means users cannot go through sequences of content using multiple requests
- to fix this, HTTP allows sessions, which are stored states shared between the browser and the server
- if a user is flipping through a photo gallery, the browser and server can exchange information about where the visitor is in the sequence by passing information back and forth in the form of cookies
- reload a page and your browser sends a cookie to server that says "last time we spoke, we were looking at the 3rd picture"
- HTTP is stateless, but it is not session-less

### request/response pairs

- HTTP works based on request / response pairs
- every action performed on HTTP starts with a request using one of the HTTP methods
- every action performed on HTTP ends with a response containing an HTTP status code, saying what happened to the request, along with data like headers, and content

