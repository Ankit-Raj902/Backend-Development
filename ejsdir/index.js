const express = require("express");
const app = express();
const path = require("path"); // <-- path module chahiye
const fs = require("fs");
//fs (File System) Node.js built-in module to read/write data.json file

let port = 8080;

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
// __dirname
// •Ye Node.js ka built-in variable hai.	
// •Ye us JS file ka folder path return karta hai, jisme tu code run kr rha.
//console.log(__dirname);
// output : /Users/ankitraj/Desktop/Backend/ejsdir
//now
// path.join(__dirname, "views") = /Users/ankitraj/Desktop/Backend/ejsdir/views
//now
// app.set("views", ...)
// Ye Express ko bata raha hai:
// “Bhai, tera views folder ka path yaha hai, yahi se .ejs files dhundhni hai.”
// ab khi se bhi code chala lo express tumare views folder k dhuhd lega aur tumara code chlega


//express searches for vies directory by default...and then runs he ejs file in that
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/docs",(req,res)=>{
    res.send("you reached the docs page");
});

app.get("/rolldice",(req,res)=>{
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs",{diceValue});
});


//route
app.get("/:username", (req, res) => {
    const { username } = req.params;

    const newinstaData = {
        username: username,
        followers: Math.floor(Math.random() * 5000),
        following: Math.floor(Math.random() * 500),
        posts: Math.floor(Math.random() * 200),
        bio: "This is a dynamic Insta profile ❤️‍🔥"
    };

    res.render("insta", { data: newinstaData });
});

app.get("/ig/:username", (req, res) => {
    const {username} = req.params; // gets username from URL
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"));
    const instaData = data[username];

    if (instaData) {
        res.render("instagram", { instaData });
    } else {
        res.status(404).send("<h1>404: User not found 😿</h1>");
    }
});



app.listen(port,()=>{
    console.log(`The app is listening on port ${port}`);
});



//Ham dono ko ek saath hi merge bhi kar ste hai
//BY USING THE GIVEN CODE 

// const express = require("express");
// const app = express();
// const path = require("path");
// const instaData = require("./data.json");

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // Route
// app.get("/:username", (req, res) => {
//     const { username } = req.params;

//     // Sample new data
//     const newinstaData = {
//         username: username,
//         followers: Math.floor(Math.random() * 5000),
//         following: Math.floor(Math.random() * 500),
//         posts: Math.floor(Math.random() * 200),
//         bio: "This is a dynamic Insta profile ❤️‍🔥"
//     };

//     // Merge data.json with new dynamic data
//     const mergedData = { ...instaData[username], ...newinstaData };

//     // Debug check
//     console.log(mergedData);

//     res.render("insta", { data: mergedData });
// });

// app.listen(8080, () => {
//     console.log("Server running on http://localhost:8080");
// });