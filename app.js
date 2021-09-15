const express = require("express");
const server = express();

server.use(express.static(__dirname + "/public"));

/*
server.use((req, res, next) => { //get post 상관X next 있어야 다른거로 넘어감
    console.log("Hi from client");
    req.user = { id: "bit" };
    next();
});
*/

server.get("/", (req, res) => {
    console.log(req.user);
    res.sendFile(__dirname + "/index.html");
});

server.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
});

server.use((req, res) => s{ // 찾는 페이지 없으면
    res.sendFile(__dirname + "/404.html");
});

server.listen(3000, (err) => { //에러나면
    if (err) return console.log("error");
    console.log("server is listening on port 3000")
});