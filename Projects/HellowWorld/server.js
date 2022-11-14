var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        //res.write('<html><body><p>This is home Page.</p></body></html>');
        res.write(JSON.stringify({ message: "Hello World from root"}));
        res.end();
    
    }
    else if (req.url == "/student") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        //res.write('<html><body><p>This is student Page.</p></body></html>');
        res.write(JSON.stringify({ message: "Hello World from student"}));
        res.end();
    
    }
    else if (req.url == "/admin") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        //res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.write(JSON.stringify({ message: "Hello World from admin"}));
        res.end();
    
    }
    else if (req.url == "/stam") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        //res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.write(JSON.stringify({ message: "Hello World from statm"}));
        res.end();
    
    }
    else if (req.url == "/procedure1") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        //res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.write(JSON.stringify({ message: "Hello World from procedure1"}));
        res.end();
    
    }
    else if (req.url == "/procedure2") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        //res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.write(JSON.stringify({ message: "Hello World from procedure2"}));
        res.end();

    }
    else if (req.url == "/procedure3") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        //res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.write(JSON.stringify({ message: "Hello World from procedure3"}));
        res.end();

    }
    else
        res.end('Invalid Request!');

});

// Just a comment

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')
