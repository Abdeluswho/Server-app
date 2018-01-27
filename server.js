let http = require("http");

let port = 7000;
let port2 = 7500

function handleRequest(request, response) {
	// body...
	
	response.end("Awesome you have the right mindset today", request.url);

}

function handleRequest2(request, response) {
	// body...
	
	response.end("Ughhh go get you coffee first! then we can work..", request.url);
	
}

let server = http.createServer(handleRequest);
let ser = http.createServer(handleRequest2);

server.listen(port, function () {
	// body...
	console.log("server listening on http://localhost:%s", port);
});

ser.listen(port2, function () {
	// body...
	console.log("server listening on http://localhost:%s", port2);
})