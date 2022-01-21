# React Authentication

## user authentication basics

### what is user authentication?

- verifying that our application's users are who they say they are


## JSON Web Tokens (JWT)

- strings we can give to users when they authenticate
- unique strings that we give to different users of our site after they have logged in 
- form the figurative beating heart of most modern website authentication
- can be used instead of the user's password to interact with protected server resources
- if the user wants to interact with our database in any way as that user, such as update their information in our database, instead of having to send their password to our server everytime, they can send us this string instead
- JWT is a actually an encoded JSON object that contains information about our user, such as the id, email, and other application information

```json 
{
    id: '123',
    email: 'john.doe@gmail.com',
    likesCoffee: true,
}
```

- usually encoded base64

- the ***header*** tells us the type and signing algo of the token

- the ***payload*** is the actual data that the JSON web token contains

- pieces of the data in the payload are referred to as ***claims*** 

- the ***signature*** is used to verify the authenticity of the data that the JWT contains in it's other parts

- the signature is created by combining the header and payload and signing those using the specified algo and a ***secret key***

- the secret key is defined on the server

- anyone who has the token can see the information that it contains (unless it is encrypted), but they cannot change the data in the token unless they have the private key, which should not be the case because our server should be the only one with access to the private key

### JWT in full-stack apps 

1. user logs in 

2. server generates a JWT containing the user's information

3. server sends token back to the user 

4. the front end / react / browser stores jwt in session or local storage

5. whenever user wants to make privileged request, they send JWT along with their request 

6. server uses JWT signature to verify that it has not been modified

- when the front end send a JWT to the server, it will usually send the token in an `{ Authorization: 'Bearer ijsfiosjdifjsjfiosjfisojf'}` request header

- tokens are credentials and they need to be treated with care 

- never give anyone else access to your JWT tokens, never want to display them in a public place, and as a developer you want to make sure the user's JWT's are as secure as possible

### signing vs encrypting

- unfortunately these two concepts do seem fairly similar to each other at first glance, but there is a big difference between them 

- signing = proves that the data in the JWT is correct and has not been modified

- encrypting = hides the data that the token contains from 3rd parties, JWTs are not encrypted by default

- do not put secret information inside of JWTs unless they are encrypted or unless you are using HTTPS

### JWT benefits 

- they are stateless, all the info JWTs contain is contained inside of the token itself, so it does not require our backend to actively keep track of who is logged in 

- in our DB we do not have to set properties on users saying logged in = true or anything like that 

- use JSON which is more compact and secure (since signing JSON is generally easier and less vulnerable than XML)than using XML or other similar options to XML


### JWT drawbacks

- because of the way tokens work, they remain valid until they expire or until the private key is changed

- if a user's account gets hacked, there is not really a great way to kick the hacker out, even after the user changes their password, since the hacker will still have that JWT

- hard to block specific users without making our JWT flow stateful, by having a database that has blacklisted ids, for example

- tokens are valid until they expire or until the private key is changed 

- the user will have to reauthenticate when the token expires 

- the JWT standard does not define a process for refreshing tokens, so when the token expires, the user will have to reauthenticate (every 2 days or however long we set the expiration date)
    
## email verification

## resetting passwords

## OAuth

## prebuilt authentication options

## best practices

