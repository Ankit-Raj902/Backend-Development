# 🌟 My EJS Learning Journey 🚀

Hey everyone 👋  
This repo is about my journey of learning **EJS (Embedded JavaScript Templates)** — jisme maine seekha kaise backend se data ko browser me dynamically render karte hain using Express.js aur EJS! 😎  

---

## 🧠 What I Learned

### 🔹 Setting Up Express + EJS

> EJS ko Express ke sath connect karne ka basic setup 👇  

```js
const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
```

- `app.set("view engine", "ejs")` → batata hai ki hum EJS ko template engine ke roop me use kar rahe hain.  
- `app.set("views", path.join(__dirname, "views"))` → Express ko batata hai ki EJS files kis folder me milengi.  

---

### 🔹 Rendering EJS Files

> EJS file ko render karne ke liye `res.render()` ka use hota hai 👇  

```js
app.get("/", (req, res) => {
  res.render("home.ejs");
});
```

- Ye `views` folder ke andar `home.ejs` file ko render karta hai.  
- EJS files hamesha `views` folder me hi honi chahiye (by default).  

---

### 🔹 Passing Data from Backend to EJS

> Backend se frontend me data bhejna EJS ke sath easy hai 😎👇  

```js
app.get("/profile", (req, res) => {
  const user = { name: "Ankit Raj", passion: "Web Development" };
  res.render("profile.ejs", { user });
});
```

> Aur `profile.ejs` me likhte hain 👇  

```html
<h1>Welcome <%= user.name %> 👋</h1>
<p>Your passion is: <%= user.passion %></p>
```

- `<%= %>` ka use hota hai variables ko display karne ke liye.  
- Ye dynamic rendering ka base hai EJS me.  

---

### 🔹 Including Common Sections (like Header & Footer)

> Repeat hone wale sections (jaise header, footer, navbar) ke liye `include` ka use karte hain 👇  

```html
<!-- main.ejs -->
<%- include("partials/header") %>

<h1>Main Content Area</h1>

<%- include("partials/footer") %>
```

- `partials/` folder ke andar `header.ejs` aur `footer.ejs` rakhe jate hain.  
- `<%- %>` ka use hota hai HTML ko as-it-is render karne ke liye (escaped nahi hota).  

---

### 🔹 Rendering Data from JSON File

> Suppose ek `data.json` file hai 👇  

```json
{
  "title": "My Website",
  "creator": "Ankit Raj",
  "users": ["Amit", "Sumit", "Ravi"]
}
```

> Toh usko render karne ke liye 👇  

```js
const data = require("./data.json");

app.get("/info", (req, res) => {
  res.render("info.ejs", { data });
});
```

> Aur `info.ejs` me likhte hain 👇  

```html
<h1><%= data.title %> by <%= data.creator %></h1>

<ul>
  <% data.users.forEach(user => { %>
    <li><%= user %></li>
  <% }) %>
</ul>
```

---

### 🔹 Directory Structure

> Project ka basic structure kuch aisa hoga 👇  

```bash
myEJSApp/
│
├── views/
│   ├── home.ejs
│   ├── profile.ejs
│   ├── info.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
│
├── data.json
├── app.js
└── package.json
```

---

### 🔹 Final Thoughts ❤️‍🔥

EJS mujhe ek **superpower** laga backend development me!  
Kyuki ye allow karta hai ki hum **dynamic content easily render kar sakein** bina complex frontend frameworks ke.  

> Learning Summary:  
> ✅ Setup Express + EJS  
> ✅ Render dynamic pages  
> ✅ Include header/footer  
> ✅ Pass JSON data  
> ✅ Build clean templates  

---

Made with 💻 + ☕ + ❤️ by **Ankit Raj** ✨