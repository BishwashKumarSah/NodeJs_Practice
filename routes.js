const fs = require("fs");

const userRouteHandle = (req, res) => {
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Assignment</title></head>");
    res.write("<body>");
    res.write("<h1>GoodMorning From NodeJs!</h1>");
    res.write(
      "<form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Submit</button></input></form>"
    );
    res.write("</body>");
    res.write("</html>");

    return res.end();
  }

  if (req.url === "/users") {
    res.write("<html>");
    res.write("<head><title>List of Users</title></head>");
    res.write(
      "<body><ul><li>Bishwash Kumar Sah</li><li>User2</li><li>User3</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/create-user" && req.method === "POST") {
    const inputData = [];
    req.on("data", (chuck) => {
      inputData.push(chuck);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(inputData).toString();
      const username = parsedBody.split("=")[1];
      fs.writeFileSync("userInfo.txt", username);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};

module.exports = { userRouteHandle };
