// Learning querry string 
// Express automatically query string ke data ko req.query object me store kar deta hai 😎
//req.query → ek object hai jo URL ke query string (jo ? ke baad aati hai) ko rakhta hai.

const exp = require("express");
const app = exp();

let port = 8080;

app.get("/search", (req, res) => {
    console.log(req.query); // query object print karega

    const name = req.query.name;
    const age = req.query.age;
    //name and age are your querry items

    res.send(`
        <h1>Query Data</h1>
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
    `);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});