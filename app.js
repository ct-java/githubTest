const http = require('http')
const url = require('url')
const fs = require('fs')
const rookout = require('rookout');


rookout.start({
    token: '23b9e66b-b9c9-427a-8e4b-e5123bc38c2e',
    labels:
        {
            "env":"dev" // Optional,see Labels page below Projects
        }
});
http.createServer(function (req, res) {
    let pathname = url.parse(req.url).pathname;
    console.log(pathname);
    console.log("hello world");
    res.writeHead(200, { ContentType: 'text/html' })
    res.end(`<p>test node${pathname}</p>`)
}).listen(8880)