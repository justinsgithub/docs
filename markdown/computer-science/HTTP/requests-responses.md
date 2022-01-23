# Requests and Responses

- the core component of HTTP is the request-response pair

## anatomy of a URL

- to get access to information on the web, you need to know the address of that information 
- this is what the Uniform Resource Locator is for
- URL is a human-readable address describing where on the web a particular resource is located
- a URL has two main parts: 

    1. a protocol declaration, such as https:// 
    2. a URN, Universal Resource Name, which provides the location of the resource

- the protocol declaration states how we are accessing the resource, using the http methods and transport layer
- the URN itself has different pieces: 

    1. the host name, such as example.com, which is registered at a DNS (domain name service), which points to a dedicated server IP address somewhere on the web
    2. next we have the implied and invisible connection port, stating which port we want to connect with on the server, for HTTP connections the default port is 80, for HTTPS the default is 443
    3. after the host and port is the resource path, which is the file location within the server 
    4. lastly is an optional URL query such as https://example.com/search?q=my-search

- if the server uses the default port we do not see the port declared
- if the server uses another port or we want to access another port, like 3000, that port can be declared using a colon, like localhost:8080
- the default names for web documents are index.html and default.htm or something similiar
- if we request a folder without a file specification, the server and browser automatically look for the default-named files
- if we are looking for something else, like contact.html or about.html, it needs to be requested specifically
- URL queries start with a ? and multiple can be strung together using an ampersand &

## HTTP methods

- every request sent over the HTTP protocol includes a method, aka a verb
- this method tells the server what type of action we want to perform with the request
- there are a limited set of these methods available and some are more used than others
- for standard web transactions, we typically only use 3 (GET, POST, and DELETE)
- the above 3 are not the only methods available to use
- methods include:

        - GET 
        - POST 
        - PUT 
        - PATCH 
        - DELETE
        - HEAD 
        - OPTIONS 
        - TRACE

- each of the HTTP methods has it's own request / response pair 
- some methods require more information than others
- to send data to the server, we have 3 different methods (POST PUT PATCH)
- there are also 3 different methods to get data from server, without really touching the content(HEAD OPTIONS TRACE)

### GET
- the most frequently used HTTP method is GET
- it is also the most simple
- a GET request for a public resource only needs the method and the URL to work
- if the resource sits behind a security layer, the request typically also needs an authorization header, containing an encrypted username and password pair, and may require a cookie containing an authentication token
- if a get request if successful, a 200 OK HTTP status is returned, along with the requested data
- if a GET request does not work, the 404 Not Found status is returned, telling you the resource literally cannot be found at this address
- if the user does not have the correct access authorization,a 405 Not Allowed status is returned and if the resource is blocked by the server a 403 forbidden status is returned


### POST

- used for sending data to server
- is the one used most often, as it is the one used whenever you submit a form on a webpage
- a POST request asks the server to create a new resource, and give it an id for future retrieval
- because POST requests make changes to the server, they typically need an authorization header
- a successful POST request returns a 201 Created HTTP status, along with a link to the new resource ID, and a response header
- if the resource requested from a POST request already exists, the server returns a 409 conflict status
- if the POST request resource is sent to a resource that cannot create new resources then you get a 404 Not Found HTTP status in return
    
### PUT
    
- used to update a some or all contents of a resource with the contents of a request
- like POST, PUT typically requires an authorization header
- unlike POST, which just contains the contents of a resource, a PUT request contains the ID of a resource and the new content to be updated / added to that resource
- if the resource already exists, the existing contents in the resource are replaces with the contents in the PUT request
- if no resource with this ID exists, the server will in some cases allow a new resource to be created, or you will get an error message
- a successful PUT request returns a 200 OK status
- if there is no content on the server a 204 No Content status is returned 
- if the id does not match an existing resource, a 404 Not Found status is returned
- if a PUT request is sent to a resource that cannot be updated, a 405 Method Not Allowed status is returned

### PATCH 

- used to modify an existing resource
- while PUT updates a resource by replacing content, PATCH can carry along instructions on how to modify the existing resource, without necessarily replacing data 
- PATCH also typically requires an authorization header and returns the same status as PUT


### DELETE


- deletes a specified resource
- a DELETE request must contain the id for the resource and an authorization header
- if you try to delete a resource you are not allowed to delete, you'll get a 405 Method Not Allowed Status
- what actually happens on a server when you send a DELETE request varies from server to server
- in some cases you delete a database entry
- in other cases you change the status of a database entry, without actually removing content 
- it all depends on the design of the server you are interacting with 

### HEAD 

- returns just the HEAD section of the response 

### OPTIONS 

- returns a description of the communication options for the target resource

### TRACE 

- creates a loop back of the request message, effectively telling the client where the request ended up 

## HTTP status codes 

- anytime you send a HTTP request to a server you will get a response, even if the response is that something went wrong 
- this response starts with a HTTP status code, explaining what happened on the server and how your request was handled 
- the client can use these status codes to identify successes and failures and automatically respond with next steps
- the HTTP response status codes are split into 5 main groupings to (100 200 300 400 500) codes 

### 1xx information 

- informational and rarely encountered 
- used to inform the client of the status of the server 
- 102 Processing tells the client to wait for the server to finish
- 100 Continue tells the client the server has received the request headers and is ready for the rest of the request body
- the last one is typically encountered when sending POST requests with a large data body

### 2xx success 

- status codes of the 2xx format are success messages
- these are common codes including 200 OK
- 200 OK means the request was successful 
- 201 Created means the request was successful and a new resource was create
- 204 No Content means the server processed the request but returned no content

### 3xx redirection 

- indicates redirection 
- the client is provided with a new URL to follow to get the requested resource 
- 301 Moved Permanently which tells the client "use this new URI for all future request"
- 302 Found which technically means "resource temporarily redirected to this other URI", but is most often used to mean "the response to this resource is actually found at this other URI", which is the real job of 303 See Other
- 303 See Other ^ 
- 307 Temporary redirect 
- 308 Permanent redirect

### 4xx client error 

- signal client errors
- 400 Bad request = the request is either malformed or too large or something similar
- 401 Unauthorized = the client lacks proper authentication to access the resource 
- 403 Forbidden = the request is refused by the server, typically because the client is not logged in or does not have the correct permissions
- 404 Not found = the resource doesn't exist
- 405 Method not allowed = means the HTTP verb / request method, such as "POST" was used on a resource that can only receive a certain method like GET

### 5xx server error

- signal server errors 

- 500 internal server error, meaning something went wrong on the server 
- 502 bad gateway, meaning the server acts as a literal gateway or proxy and received an invalid response from wherever it was trying to connect to 
- 503 service unavailable, encountered when a server is overloaded, or temporarily unavailable or something else goes wrong
