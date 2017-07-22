var fs = require('fs');
var url = require('url');
var http = require('http');
//var page = require('./src/page');    //번들 파일 불러옴
var server = http.createServer();


server.on('request', function(req, res){
    var location = url.parse('http://'+req.url), status = 404, content = 'Page not found.';


    // switch (location.path) {
    //     case '/':
    //         status = 200;
    //         content = fs.readFileSync('./index.html');
    //
    //         //추가 serverendering
    //         content = content.toString().replace('<% page %>',page())
    //         break;
    //     case '/bundle.js':
    //         try {
    //             fs.accessSync('./dist/bundle.js');
    //             status = 200;
    //             content = fs.readFileSync('./dist/bundle.js');
    //         } catch(e) {
    //             console.log(e);
    //         }
    // }
    //
    // res.writeHead(status);
    // res.end(content);
    res.end("test")
});

server.listen(8000, '127.0.0.1', function(){
    console.log('Listening on port 8000...')
});
