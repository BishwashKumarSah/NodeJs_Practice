//day 1
//created a basic server

const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text'><button>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/message" && req.method === "POST") {
    fs.writeFileSync("message.txt", "Dummy Data");
    res.statusCode = 302;
    res.setHeader("Location", "/login");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from nodejs server</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(8000);
