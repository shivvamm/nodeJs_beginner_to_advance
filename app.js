const http = require('http');

const server  = http.createServer((req, res) =>{
	console.log(`${req.method} ${req.url}`)

	if(req.url === '/'){
	res.writeHead(200,{"constent-type":"text/hmtl"})
	res.write("<h1>Home Page</h1>");
	res.end();
}
else if(req.url === '/about' ){
	res.writeHead(200,{"constent-type":"text/hmtl"})
	res.write("<h1>About Page</h1>");
	res.end();
}
else{
	res.writeHead(400,{"constent-type":"text/hmtl"})
	res.write("<h1>404 NOT FOUND</h1>");
	res.end();
}
});

server.listen(3000);