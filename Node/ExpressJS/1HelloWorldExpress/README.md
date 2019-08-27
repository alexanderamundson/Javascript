ExpressJS Hello World

The first line in server.js imports Express into our file. Express can be accessed through the const variable 'express'. 

app.get(route, callback function)
This function tells what to do when a HTTP get request at the given route is called. The callback function has 2 parameters, req (request) and res (response). The request object(req) represents the HTTP request. The response object represents the HTTP response that the Express app sends when it receives an HTTP request.

res.send()
This function can take an object as input and it sends this object to the requesting client (browser). In server.js we code simply sends the string "Hello World!!!".

app.listen()
listens for connections on the specified port. Server.js listens on port 8080.

server.js also demonstrates get and post routes, pug view templates, displaying static files with Express, and how to display and retrieve from data.