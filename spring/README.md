# Spring

- Microservices tool
- Widely used by large organisations
- Readability (lots of Computer Science graduates start with Java)
- Object-oriented programming patterns help with boilerplate etc.
- Speed (can handle more concurrent requests, and is faster to serve content)
  - Downside is that it's memory-heavy
- Scalability
- Spring has a lot of features for microservices built-in
- Compiles into an executable (`.jar`)
  - Easy to get onto a server
- Can be written in any environment, and then run easily on a server environment

## Architecture

- Made up of 3 layers mainly
  - Controller
  - Service layer
  - The repository

The controller is a Java class. It's job is to do a couple of things:

1. Extract data from the HTTP request such as endpoint, body, parameters (params), headers
2. Validate the data from the HTTP request (is the endpoint provided, does the body have what we need, etc.) (checking against the DTO)
3. Issue the data to the service layer (only if the data from the HTTP request is valid, otherwise throw an error)
4. Issue a HTTP response after the database has returned data to the repository, and the repository returns Java data to the service layer, and the service layer returns Java data to the controller

- This is where we turn the entity into the body of the HTTP response

The service layer is a Java class that turns the data from the HTTP request (DTO) into a Java object. It's where all the business logic lies.

1. Turns the data from the request into a Java object (an entity)
2. Additional processing the data as needed such as converting values into certain types, etc.
3. Business logic
4. Issue the data to the repository

The repository (also known as DAO - data access object) in Spring is a Java interface. It implements JPA repository which has built-in methods for performing CRUD tasks on our database. It also gives us the ability to write custom methods.

- Object relational mapping (ORM) is required to ensure the database knows what data belongs to what column in its appropriate table.

The DTO is a Java class that specifies the rules about what fields should be in the HTTP request. For example, `qty` should be larger than 0, the name shouldn't be blank, etc.

An entity is an object of a Java class that represents what a record in the database should look like. For example:

- What are the columns?
- What type of data is in that column?
- Can it be null?
- Should it be unique?

## Full-Stack Development

- The API or backend would serialise the data it gets from the database, meaning it would convert it into a certain format like `JSON`

## Quick Notes

- Rebecca Purple

### Server

- Processing HTTP requests
- It's a way for the front-end to communicate to the database and carry out CRUD tasks on the database
- Where you validate incoming data to ensure every required field is there, if the information is in the correct format or value type, etc., before you send it to the database to be inserted into the appropriate table
- Business logic
  - eBay example
- Prepare a record for the database
- Query the database
- Prepare a response to send back to the front-end
  - Serialising the data
  - Adding a status code

### HTTP Request

- Endpoint
- HTTP verb (GET, POST, PUT/PATCH, DELETE)
  - GET is to read data
  - POST is to create data
  - PUT/PATCH update data
  - DELETE is to delete data
- Headers
  - Additional information about the request, what type of data it is, access tokens, what kind of browser it's coming from, etc.
    - Access tokens can include authorisation keys
- Body (optiona)
  - Often `JSON`, some times formdata
- Cookies
  - Access information, saved settings, tracking information, etc.
    - An application could know that I'm logged into Facebook by using a cookie

### HTTP Response

- Headers
- Status code
  - 2xx - success
    - 200 - OK
    - 201 - CREATED
    - 204 - NO CONTENT
  - 3xx - redirect
    - 301 - resource permanently moved
  - 4xx - errors due to the user
    - 400 - bad request
    - 403 - forbidden (the server understands the request but refuses to authorise it)
    - 404 - not found
    - 401 - Unauthorised
    - 429 - too many requests
    - 408 - request timeout
    - 418 - I'm a teapot
  - 5xx - errors due to the developer
    - 500 - internal server error
- Body (optional)
  - Optional because it depends on the HTTP request made; the body contains the data that's being sent back to the user
  - Could be an image, HTML, binary code, text, `JSON`, etc., must be a text response
  - In the response structure, there's always a blank line that precedes the body

## Resources

- https://start.spring.io/

  - Maven packages our code up
  - Snapshots are like beta versions, stability is not the highest
  - metadata influences the packages and project

- Lombok dependency

  - Causes issues in Eclipse

- Validation dependency

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

- Dependencies
  - Spring Web
  - Spring Data JPA (ORM)
  - MySQL Driver
  - Validation
  - Spring Boot DevTools
