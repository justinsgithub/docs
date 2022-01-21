# HTTP Headers

## overview

- HTTP is stateless
- this means if the client, or server,or both, need information about the state of the other (or any other info), we have to send that info along with our request or response 
- this is what HTTP headers are for 
- An HTTP header is a human-readable name-value pair, separated by colons, added to the HTTP request or response, which can be used to pass standard or custom information back and forth between the client and server
- a request can contain as many headers as are needed, each separated by a line-break
- if you wanted to send a POST request to a CMS to create a new resource, you would first have to authenticate yourself to prove to the server that you have the correct authorization to create new resources, in it's most basic form, this type of authentication is done by sending an authentication header, with basic authentication information, a username and password

    - `Authorization: Basic ouagnagf98u983u4ng308ving4==`

- in the real world, the username password combo is Base64 encoded, to ensure it does not get misunderstood at a text a string, when passed to the server


### cookies

- if the server wants or needs the client to remember where its has been or what state it is in, like what video and how far in a client is while watching online content, it can use a set cookie header, to give the client a cookie, a small piece of data
- the next time the client visits the server it sends the cookie back, and the server brings the client to the right state, cookies like this are used everywhere on the web
- cookies are the reason why news and social media sites seem to remember where you have been and why you stay logged into sites 
- even after you have closed the tab or the browser 
- you may have seen warnings on some sites, telling you they use cookies to track you, this is what they are talking about
- you can see what cookies a website has sent to your browser, by looking at the cookies in the application section in your developer tools 
- if you are worried about cookies stored in your browser, you can delete them by clearing the browser data
- this will log you out of any site using cookies, and will make your browser "forget" where it has been 
- it does not actually forget anything but it forgets the cookies

### header information
- headers are also often used to provide information about the client or the server 
- this can be anything, such as data and time information about the request / response pair 
- it can be a user agent header identifying the client 
- it can be server header identifying the software being used by the server
- proxy information 
- security information 
- cross origin resource sharing information
- with HTTP/2 and other modern technologies, we are also seeing new headers come online 
- these new headers include Link, which allows us to use server Push, to push files to the client before they are requested

## viewing HTTP headers 

- the easiest way to see HTTP headers is through the browser developer tools
- developer tools rely on the browser to generate requests
- if you need to send custom request headers to a server to test the response, you can do so using a REST client

### REST

- representational state transfer is a set of rules that describe how data is transferred and managed between clients and servers
- the entire web is a giant RESTful API, and you can use a REST client to interface with it 
- for our purposes, a REST client is a request-only user agent that allows us to create custom request headers, send them off to a server, and inspect the response 
- postman and vscode extension are REST client tools


## cache

### overview

- if the server wants a client to cache(to save some data for a specific period of time), it can send one or several cache headers
- these headers tell the browser what files to save and whether cached files should be updated, and for how long they should be kept
- caching files can dramatically improve website performance, because you are not sending as many files back and forth every time you reload a page 
- BUT, when files are cached in the browser, the browser will not receive any new versions of those files, until those cached files are either cleared or have expired


### details

- on your website you may have contents that are rarely updated, like your JS and CSS files
- content that is sometimes updated such as pages
- content that is updated all the time, like the front page or a new section of an information site 
- both servers and clients can tell the other party to cache (literally store store for later) any files they send through HTTP
- once cached, these files will be used instead of downloading fresh ones and cannot be overwritten from the server, 
- this dramatically speeds up the site and performance
- you can provide specific instructions on how long to cache the files for and under what circumstances the cached files can be overwritten 
- this is all done using the cache control header 

### cache-control 

- most commonly cache-control is used to store files in the browser to speed up future visits to the same address 
- it does this by storing the files and then just using the stored files instead of downloading new ones
- this done using the cache-control max-age directive

- the below example says please store this file for one year and use it instead of requesting to download a fresh copy during that time 


```shell
Cache-Control: max-age: 31536000
```

### cache request directives 

```shell
Cache-Control:
    max-age=<seconds>
    max-stale[=<seconds>]
    min-fresh=<seconds>
    no-cache
    no-store
    no-transform
    only-if-cached
```

### cache response directives

```shell
Cache-Control:
    must-revalidate    
    no-cache
    no-store
    no-transform
    public
    private
    proxy-revalidate
    max-age=<seconds>
    s-maxage=<seconds>
```


