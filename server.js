var express=require('express');
var server=express();
server.use(express.static(__dirname+ '/app'));
var port=8085;

server.listen(port, function(){
	console.log('server listening on port - '+port);
} )