const express = require("express");
const mongoose = require("mongoose");
const server = express();

const User = require("./models/User");
require("dotenv").config({ path: "variables.env" });

server.get("/", (req, res)=>{
    const newUser = new User();
    newUser.email = "bitcocom@empas.com";
    newUser.name = "bitcocom";
    newUser.age = "25"; 
    newUser
        .save()
        .then((data)=>{
            console.log(data);
            res.json({
                message : "User Create Successfully"
            })
        })
        .catch((err) => {
            res.json({
                message: "User not Successfully Created"
            });
        });
});


server.listen(3000, (err)=>{
    if(err) 
        return console.log(err);
    else{
        mongoose.connect(process.env.MONGDB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => { //db연결
            if (err) {
                console.log(err);
            } else {
                console.log("connected DB");
            }
        });
    }
});



