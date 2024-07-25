//navigate karenge isme ek page se dusre page per...but data iss baar html ya json denge
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  //res.send("<h1>Welcome to Home page</h1>");
  //basically main HTML tags pass kar sakta hoon res.send mei...
  //ek aur tareeka hai ki main res.write likhta jaaun baar baar...uss se dikkat yeh hogi ki web page tab tak load hota rahega jab tak usko lagega ki data aa sakta hai aur...hence mujhe uss loading ko khatam karne ke liye aakhiri mei res.send() sirf itna likhna hoga
  res.write("<h1>Welcome to Home Page</h1>");
  res.write("<h2>I am Aman</h2>");
  res.send();
  //yeh to bahut hi basic dekha,,,agar poori HTML file bhejni ho to woh aise ek ek line karke thode hi add karenge...uska tareeka aage dekhenge
});
app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});
app.get("/contact", (req, res) => {
  //agar main object ya array of object ke form mei data bhej doon(yeh array of object waala API mei kaam aayega) to woh automatically stringify hoke JSON mei convert ho jaayega site per
  //   res.send({
  //     name: "AMAN",
  //     age: 22,
  //     surname: "chahar",
  //   });
  //   res.send([
  //     {
  //       name: "AMAN",
  //       age: 22,
  //       surname: "chahar",
  //     },
  //     {
  //       name: "Pintu",
  //       age: 22,
  //       surname: "Badmos",
  //     },
  //   ]);
  res.json([
    {
      name: "AMAN",
      age: 22,
      surname: "chahar",
    },
    {
      name: "Pintu",
      age: 22,
      surname: "Badmos",
    },
  ]);
  //basically res.send likhke object ya array of object bhejo ya res.json likh ke bhejo dono se same kaam hota hai...

  //The methods are identical when object or array of objects is passed but res.json() will also convert non-objects such as null or undefined, which are not valid JSON,
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// res.send();  me string pass kroge to string jayegi as a response
// Par object yaa array pass kroge to JSON data Jayega .
// Par agar res.json(); use Kara hai to Kuch bhi daalo json file hi return krega.
