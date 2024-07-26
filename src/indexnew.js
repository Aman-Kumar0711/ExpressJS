const path = require("path");
const express = require("express");
const app = express();
const port = 8000;
//to set view engine
app.set("view engine", "hbs");
//agar ejs ya pug use karta yo hbs ki jagah unko likhta
app.set("views", path.join(__dirname, "../templates/views")); //main is prakaar views ki jagah kuchh aur bhi naam rakhwa sakta hoon uss directory ka jidhar meri .hbs file stored hai...otherwise default to views hota hi hai
app.get("", (req, res) => {
  res.render("index"); //hbs maine upar hi mention kar diya hai
  //render se yeh hoga ki jo bhi file maine di hai woh render hogi, dynamically

  //maan lo mujhe dynamic content bhejna ho to main index.hbs waali file mei {{something}} likhunga and uss something ko yahaan define kar dunga
  //eg
  //res.render("index",{
  //   something:"alpha"})  to ab jahaan maine index.hbs mei something likha hoga wahaan alpha aa jaayega
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
