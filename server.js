const http = require("http");

const host = 'localhost';
const port = 3000;

const requestListener = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello Node!!!!</h1>\n');
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});