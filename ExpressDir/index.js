//learning static and dynamic route parameters 
// /<route_name> means "static route parameter” & /:<route_name> ka matlab hota hai “dynamic route parameter” 
//learnt about app.use => used to send response to any route


const exp = require("express");
const app = exp();

let port = 8080;

app.get("/", (req, res) => {
    res.send("you reached the home page");
});

app.get("/about",(req,res)=>{
    res.send("you reached the about page");
});

app.get("/contacts",(req,res)=>{
    res.send("you reached the contacts page");
});

app.get("/docs",(req,res)=>{
    res.send("you reached the docs page");
});

// app.get("/*", (req, res, next) => {
//     res.send("this page does not exist");
// });

// 	•	Problem:why app.get("/*", (req, res, next) is crashing the server
// Latest Express + Node version (Express 6+, Node v22) me "/*" ko path parameter ke form me parse kiya jata hai.
// 	•	Path parser (path-to-regexp) expect karta hai ki wildcard ke liye parameter name ho.
// 	•	"*" ya "/*" ke saath parameter name missing → PathError: Missing parameter name aa gaya.
// 	•	Isliye server crash ho gaya.
// Basically Express ka route parser strict ho gaya hai latest version me, isliye wildcard GET route direct crash karta hai.


//instead app.get("/*", (req, res, next) use app.use((req, res) to avoid server crashing
app.use((req, res) => {
    res.status(404).send("this page does not exist");
});

// Why app.use works perfectly
// 	•	app.use ka use middleware ke liye hota hai
// 	•	Jab request kisi defined route se match nahi karti, ye automatically execute ho jata hai
// 	•	Advantages:
// 	1.	Sab HTTP methods (GET, POST, etc.) ke liye kaam karta hai
// 	2.	Path validation strict nahi hota → server crash nahi hota
// 	3.	Recommended way for 404 / unmatched routes
// 	•	Ye basically ek catch-all middleware hai jo route match na hone par error message ya 404 page dikhata hai



// Start the server - to be written at last 
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


