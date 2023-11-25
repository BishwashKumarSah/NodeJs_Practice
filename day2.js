const http = require("http");

const { userRouteHandle } = require("./routes");

const server = http.createServer(userRouteHandle);

server.listen(3000);
