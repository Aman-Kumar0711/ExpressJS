const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const port = 8000;
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
//to set view engine
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);
app.get("", (req, res) => {
  res.render("indexagain"); //hbs maine upar hi mention kar diya hai
  //render se yeh hoga ki jo bhi file maine di hai woh render hogi, dynamically
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//iske hum dekhenge Partials ke baare mei...jaise react mei humko koi cheez baar baar use karni ho and woh har web page mei constant ho like header ya footer to usko ek component bana ke rakh lete thhe and jahaan bhi zarurat padti thi wahaan use kar lete thhe...waise hi Express.js mei hote hain partials...jo baar baar use hone waali cheezein hain unko hum ek partials naam ke folder mei store kara lenge
//Partials ko register karne ke liye first of all we reuire hbs module then we write the command hbs.registerPartials(absoulte path of partial folder)

//jaise ki meri index.js file yeh hai and yeh views se data render kar rahi hai jo ki header.hbs se data le rha hai in partials foder...to ab agar main kahin bhi change karu and mujhe woh change server per dikhana hai to baar baar har cheez save karke fir waapas index.js ko save karke server per changes reflect karu iss se behtar hai ki main terminal mei aise file run karu yeh waali

//nodemon src/indexagain.js -e js,hbs
//iska matlab hai ki hbs ya js extension waali kisi bhi file mei change ho jo iss server se related hain to server update ho jaaye
