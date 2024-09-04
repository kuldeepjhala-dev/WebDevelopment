const http = require("node:http");
const server = http.createServer((req, res) => {
    console.log("Hii kuldeep");
    res.end("Hello-world");
});
server.listen(7777); 