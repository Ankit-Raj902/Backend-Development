# Node.js Basics Journey 🚀

Hey everyone 👋  
This repo is about my journey of learning **Node.js basics** — jisme maine seekha `require`, `export/import`, `npm`, `figlet`, `cowsay`, and more! 😎  

---

## 🧠 What I Learned

### 🔹 require (Old Way)
> (jisme poora file hi extract ya require krna prta tha if we need any snippet from that file)

- Pehle Node.js me hum modules ko load karte the using `require()` function.  
- Ye method **CommonJS** system par based hai.  
- Problem ye thi ki agar ek file me 10 functions hain aur hame sirf ek chahiye, to bhi puri file import hoti thi.  
- Isse project heavy aur slow ho jata tha.  

---

### 🔹 export / import (New Way)
> (new way) seekha ..seperately export ka use krna bhi jisme ham only needed things ko export krte hai spcific snippets ke aage export likh ke...

- Ye modern ES Modules system par based hai.  
- Ab hum sirf **needed snippets** export kar sakte hain, jaise ek function, variable, ya class.  
- Dusri file me hum **sirf wahi import** karte hain jinki hame zarurat hai.  
- Ye code ko modular, clean aur fast banata hai.  

---

### 🔹 npm ko jana
> npm install package jana... maine figlet aur cowsay..ka use bhi kiya..using npm install package commands..aur run kiya...

- `npm` ka matlab hai **Node Package Manager**.  
- Isse hum external libraries install karte hain — jaise `figlet`, `cowsay`, etc.  
- Ye packages help karte hain extra features use karne me bina manually likhe.  
- Commands I used:
  ```bash
  npm init
  npm install figlet
  npm install cowsay
