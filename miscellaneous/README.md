# 🌐 GET & POST Requests in Express.js 🚀

Hey everyone 👋  
This repo is about my learning journey of **GET** and **POST** requests using **Express.js** — jisme maine seekha kaise browser ke form se data send karke backend me handle karte hain. 😎  

---

## 🧠 What I Learned

### 🔹 Setting Up Express Server

> Sabse pehle basic server setup kiya using Express 👇  

```js
const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

- `express()` se app create hota hai.  
- `app.listen()` server ko ek port pe run karata hai (yahan port 8080).  

---

### 🔹 GET Request – Form se Data Lena (via Query Params)

> `GET` method se data **URL ke through** backend me jata hai.  

```js
app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(`Standard GET Response 😎 — Welcome ${username}!`);
});
```

- `req.query` me woh data milta hai jo URL ke saath aata hai.  
- Example:  
  ```
  http://localhost:8080/register?username=Ankit&password=123
  ```
- Isme `username` aur `password` query ke roop me backend ko milte hain.  

---

### 🔹 POST Request – Secure Data Transfer (via Body)

> `POST` method me data **URL me show nahi hota** — ye secure tarike se backend me jata hai.  

```js
app.post("/register", (req, res) => {
  res.send("Standard POST Response 🚀");
});
```

- POST ke liye form me method `"post"` hota hai.  
- Lekin agar tu `req.body` ka use kare, toh pehle `express.urlencoded()` middleware lagana padta hai 👇  

```js
app.use(express.urlencoded({ extended: true }));
```

---

### 🔹 Frontend (HTML Form)

> Ek simple `index.html` file jisme 2 forms hain — ek GET aur ek POST ke liye 👇  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GET vs POST Forms</title>
</head>
<body style="font-family: Arial; padding: 20px;">
  <h1>GET vs POST Method Example</h1>

  <!-- 🟢 FORM 1 : Using GET Method -->
  <h2>Form using GET Method</h2>
  <form action="http://localhost:8080/register" method="get">
    <label for="username1">Username:</label>
    <input type="text" id="username1" name="username"><br><br>

    <label for="password1">Password:</label>
    <input type="password" id="password1" name="password"><br><br>

    <input type="submit" value="Login (GET)">
  </form>

  <hr>

  <!-- 🔵 FORM 2 : Using POST Method -->
  <h2>Form using POST Method</h2>
  <form action="http://localhost:8080/register" method="post">
    <label for="username2">Username:</label>
    <input type="text" id="username2" name="username"><br><br>

    <label for="password2">Password:</label>
    <input type="password" id="password2" name="password"><br><br>

    <input type="submit" value="Login (POST)">
  </form>

</body>
</html>
```

---

### 🔹 Browser Me Output Dekhne Ka Tarika 💻

1. Apne project folder me dono file rakho:  
   - `app.js` (Express server)  
   - `index.html` (frontend form)

2. Run the server 👇  
   ```bash
   node app.js
   ```
3. Open browser aur jao 👉  
   ```
   http://localhost:8080/register
   ```
4. Form bhar ke **GET** button dabao — URL me query params dikhenge.  
5. **POST** button dabao — URL clean rahega (secure transfer).  

---

### 🔹 Example GET URL Output

> Jab GET form submit karte ho, URL kuch aisa dikhta hai 👇  
```
http://localhost:8080/register?username=Ankit&password=123
```

> Browser me Response:
```
Standard GET Response 😎 — Welcome Ankit!
```

---

### 🔹 Folder Structure 📂

```bash
GetPostExample/
│
├── app.js
├── index.html
└── package.json
```

---

### 🔹 Key Takeaways ❤️‍🔥

✅ `GET` → Data URL ke through bheja jata hai (visible)  
✅ `POST` → Data hidden hota hai (secure)  
✅ `req.query` → GET data access karne ke liye  
✅ `req.body` → POST data access karne ke liye  
✅ Form me `action` aur `method` define karna zaroori hai  

---

Made with 💻 + ☕ + ❤️ by **Ankit Raj** ✨