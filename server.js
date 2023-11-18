const http = require("http");

const port = normalizePort(process.env.PORT || '80');


function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end(`My little server`);
 };

const server = http.createServer(requestListener);
server.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});
