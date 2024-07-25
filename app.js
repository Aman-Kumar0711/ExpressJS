const express = require("express");
const app = express();
//ab yeh mera app ban gaya hai...main ab isme express ki koi bhi property use karke kuchh bhi kar sakta hoon

//Express ka kaam hota hai API create karna, iske 4 methods hain:
// 1. Get-> to get the data from the server(read basically).
// 2. Post-> to put dta in the server(write basically).
// 3. Put-> to update the data.
// 4. Delete-> to delete the data.

//app.get(route,callback) yeh format rehta hai
app.get("/", (req, res) => {
  //The request object(req) represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers etc.
  //The response object(res) represents the HTTP response that the express app sends when it receives an HTTP request.
  res.send("Hey There!");
});
app.get("/about", (req, res) => {
  res.send("Hey There! This is about page");
});
//bas ho gayi routing...kitna easy hai express per routing create karna
app.listen(8000, () => {
  console.log("Listening on port 8000");
});

//Mostly Express.js routing and API ke kaam aata hai.
