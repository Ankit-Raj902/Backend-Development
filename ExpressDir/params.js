//learning the use of parameters in express js

const express = require("express");
const app = express();

let port = 8080;

//app.get me hi params define bhi krte ho aur uska kya result hoga wo bhi isi me define krte ho through res.send
app.get("/username/:name/userage/:age",(req,res) => {
    console.log(req.params); // pura object milta hai
    const name= req.params.name;
    const age = req.params.age;

res.send(
    `<h1>User's Detail</h1>
    <p>Name : ${name}</p>
    <p>Age : ${age}</p>
    `);
});

app.listen(port,() =>{
    console.log(`App is running on port ${port}`);
});