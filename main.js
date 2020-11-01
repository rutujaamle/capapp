const { response } = require('express');
var http = require('http') ;

var server = http.createServer(function (request , response)
{
    response.writeHead(200 , {"Content-Type" : "text/plain"});
    response.end("Hello NodeApp!! \n");
});

server.listen(8000);
console.log("Server listening on port 8000 : http://127.0.01:8000/");