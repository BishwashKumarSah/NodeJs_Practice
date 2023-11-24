//day 1
//created a basic server

const http = require("http");
const server = http.createServer(function (req, res) {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from nodejs server</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(8000);
