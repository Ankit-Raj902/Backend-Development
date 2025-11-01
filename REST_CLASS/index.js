//both get and post request Client → Server ke beech defined hota hai when we run something like a url etc...in order to get a respose we send get 
// request to server...and it send us an info page...now like we have a  form..we will it and send our data to server to accept it...thats a post 
// reqeust created by us to server this is post reqest.

const express = require("express");
const app=express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({ extended:true }) );
app.use(express.json());

app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
//express.static() ek middleware function hai jo Express ko batata hai ki kis folder(yha public folder) me tere static files (jaise images, CSS, JS, HTML) padhe hue hain.

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

let port = 8080;

//const post nhi kr kste bcz baad me post dlt nhi kr payenge but we want to delete our post
let posts = [
    {
        id: uuidv4(),
        username:"meracollage",
        content:"I love Coding!"
    },
     {
        id: uuidv4(),
        username:"sahil Ranjan",
        content:"I got my first internship."
    },
     {
        id: uuidv4(),
        username:"billy",
        content:"Hardwork is the path to success."
    },
];


app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/post/new",(req,res)=>{
    res.render("new.ejs");
});

//post request ka data uski body me ata hai- jo ki terminal me dikhega
//yani app.post("/posts", (req, res) =>  ka ye  /post bta rha hai ki data submit hokar finally jayega kha.....
// aur jayega -> /posts pe isliye yha /posts likha h
app.post("/posts",(req,res)=>{
  //finally jo post hoga wo yha aakar /post pe add hona hai isliye /post likha yha
    //console.log(req.body);
    let id = uuidv4();
    let {username,content}= req.body;
    posts.push({id,username,content});
    res.redirect("/posts");
});
// 1.req = Request object
// 	Ye represent karta hai client se server ko jo data bheja gaya hai.
// 	Form submit karte hi username + content jaise fields client → server jaate hain.
// 	Isliye server ko wo data req.body me milta hai.
// 2.res = Response object
// 	Ye represent karta hai server se client ko jo response bhejna hai.

// POST request ka data “body” me aata hai kyunki HTTP protocol me GET request ke data URL ke saath jaate hain (query string), lekin POST request me data client → server ke request ke andar “body” me hota hai, not in URL.
// 	Matlab, jab tu form submit karta hai:
// 	Browser POST request bhejta hai
// 	Data (jaise username, content) request ke body part me attach hota hai
// 	Server me Express req.body se us data ko read karta hai

// GET request me data URL/query params me hota hai → req.query se milta hai
// POST request me data request body me hota hai → req.body se milta hai

app.get("/post/:id", (req, res) => {
  let { id } = req.params;
//   id = Number(id); // 👈 convert to number
  let post = posts.find((p) => p.id === id);
  //compares our arrays id with the url param id
  //console.log(post);
  res.render("show.ejs",{post});
  //mtlb ki ye res.render("show.ejs", { post }); isme ye post ke andar koi data hai(let post = posts.find((......ye post variable yha se aya hai ) 
  // and us post ke data ko tu ejs file ko access krne de rha hai jisse ham ye kr rhe hai show.ejs file ko ye post ka data access krwa rhe hai...
  //jisse ham is post ke content ko apne html/ejs me(show.ejs me) use kar skte...agar ye post nhi denge to hamare code me ham post.id post.username ye defined hi nhi hopayega code run nhi hoga...
});

app.patch("/post/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;

  let post = posts.find((p) => p.id === id);
  if (!post) {
    return res.status(404).send("❌ Post not found");
  }

  post.content = newContent; // Update the post content
  console.log(`✅ Post updated: ${post.content}`);

  // Redirect user back to posts page after editing
  res.redirect("/posts");
});

app.get("/post/:id/edit",(req,res)=>{
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    res.render("edit.ejs",{post});
});


app.delete("/post/:id", (req, res) => {
  let { id } = req.params;

  // filter out the post that should NOT be deleted
  posts = posts.filter((p) => p.id !== id);

  console.log(`🗑️ Deleted post with ID: ${id}`);
  res.redirect("/posts");
});


app.listen(port,() =>{
    console.log(`Listening to port ${port}`);
});