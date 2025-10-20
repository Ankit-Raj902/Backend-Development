// import figlet module
const figlet = require("figlet"); //packages ke liye ./ ka use nhi krte direct name dedo

// generate ASCII text
figlet("Jai Mata Di", function (err, data) {
  if (err) {
    console.log("Kuch galat ho gaya 😅");
    console.dir(err);
    return;
  }
  console.log(data);
});