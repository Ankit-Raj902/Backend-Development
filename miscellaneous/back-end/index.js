//both get and post request Client → Server ke beech defined hota hai when we run something like a url etc...in order to get a respose we send get 
// request to server...and it send us an info page...now like we have a  form..we will it and send our data to server to accept it...thats a post 
// reqeust created by us to server this is post reqest.

const express = require("express");
const app = express();

let port = 8080;

app.use(express.urlencoded({extended:true}));
//express can now understand the post body data (parsing)
app.use(express.json());


app.get("/register",(req,res) => {
   let {username,password}= req.query;
   //username and password used bcz its used in inputs's name section
    res.send(`standard GET response, welcome! ${username} `);
});

app.post("/register",(req,res) => {
    //console.log(req.body);
    let {username,password}= req.body;
    res.send(`standard POST response, welcome! ${username} `);
});


app.listen(port,() => {
    console.log(`app is listening to port ${port}`);
});

