import http from "node:http";

const server = http.createServer((request, res) => {
  console.log(request.headers);

  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(
    JSON.stringify({
      msg: "Server is running",
    }),
  );
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
