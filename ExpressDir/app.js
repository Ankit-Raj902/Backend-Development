//Learnt basics of backend server working 
// example for understanding
// app.get("/user", (req, res) => {
//   res.send("Hello User"); //known as the callback function 
// });
//“Oye Express bhai 😎, sun zara… jab bhi koi banda mere server pe ‘/user’ route pe GET request bheje, toh is function ko bula dena (ye callback). Fir ye function request aur response ka handle leke karega jo karna hai — chahe message bhejna ho, file bhejni ho, ya data dikhana ho.”
//route = /user
//Route ka kaam ye hai ki Express ko batata hai kaunsa URL kaunse function ke liye handle karna hai


const express = require("express");
let port = 3000;
const app = express();  // express ka function call karke ek app bana liya
// / is home path
app.get("/", (req, res) => {
    res.send(`Hello Biduu! 😎 on port ${port}`);
});

//app.listen(3000, () => console.log("Server running on port 3000"));
//OR
app.listen(port, () => console.log(`Server running on port ${port}`));


