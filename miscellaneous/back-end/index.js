const express = require("express");
const app = express();

let port = 8080;

app.get("/register",(req,res) => {
   let {username,password}= req.query;
   //username and password used bcz its used in inputs's name section
    res.send(`standard GET response, welcome! ${username} `);
});

app.post("/register",(req,res) => {
    res.send("standard POST response");
});


app.listen(port,() => {
    console.log(`app is listening to port ${port}`);
});

