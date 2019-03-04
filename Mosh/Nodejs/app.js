const http = require('http');

// this server has the same capabilitise of 
// an event emitter
// a call back function to handle request and response
const server  = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Nodejs is a beast');
        res.end();
    }
    // lets add another route
    if(req.url ==='/api/courses'){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
});

//every time there's a new connection
// the server will raise an event
// create a port - event raise
server.listen(3000);

console.log('listening on port 3000..');