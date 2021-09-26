var http=require('http');
var fs=require('fs');
var port=8080;
var html;
var js;
var js2;
var css;
var do0;
fs.readFile('./final.html', function(err, data){
	if(err){
		throw err;
	}
	html=data;
});
fs.readFile('./final.js', function(err, data){
	if(err){
		throw err;
	}
	js=data;
});
fs.readFile('./recorder.js', function(err, data){
	if(err){
		throw err;
	}
	js2=data;
});
fs.readFile('./final.css', function(err, data){
	if(err){
		throw err;
	}
	css=data;
});
fs.readFile('./0do.mp3', function(err, data){
	if(err){
		throw err;
	}
	do0=data;
});

app.put("/song", (req, res) => {
  var mp3SongName = './0do.mp3';
  var mp3_file = fs.createWriteStream(mp3SongName);

  mp3_file.on('open', function (fd) {
    req.on('data', function(data){
        console.log("loading... \n");
        mp3_file.write(data);
    }); 

    req.on('end', function(){
        console.log("finalizing...");
        mp3_file.end();
        res.sendStatus(200);
    });
  });
}
var server=http.createServer(function(req, res){
	switch(req.url){
		case "/final.js":
			res.writeHead(200, {"Content-Type": "text/javascript"});
			res.write(js);
			console.log("js file required");
			break;
		case "/final.css":
			res.writeHead(200, {"Content-Type": "text/css"});
			res.write(css);
			console.log("css file required");
			break;
		case "/final.css":
			res.writeHead(200, {"Content-Type": "text/javascript"});
			res.write(js2);
			console.log("js file required");
			break;
		case "/":
			res.writeHead(200, {"Content-Type": "text/html"});
			res.write(html);
			console.log("html file required");
	}
	res.end();
});
server.listen(port, '0.0.0.0', function(){
	console.log('HTTP listening at http://%s:%s/', this.address().address, this.address().port);
});