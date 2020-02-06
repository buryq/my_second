const http = require('http');

const server = http.createServer(function (req, res) {
    console.log('request coming...', req.url);

    res.write('200 - OK');
    res.end();
});

console.log('Server is running...');
server.listen(3050);