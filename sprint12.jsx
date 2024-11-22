const http = require("http");
const server = http.createServer((request, response) => {
  console.log("The response is here");
  console.log(request);
  console.log(response);

  res.statusCode = 200;
  res.statusMessage = "OK";
  res.setHeader("Content-Type", "text/plain");

  res.write("Hello, ");
  res.write("world!");

  res.end();
});
server.listen(3000);
