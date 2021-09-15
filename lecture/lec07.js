const express = require("express");
const server = express();

server.get("/", (req, res) => {
    res.send("<h1>hello nodejs</h1>");
});

server.listen(3000, (err) => { //혹시 에러나면
    if (err) return console.log("error");
    console.log("server is listening on port 3000")
});