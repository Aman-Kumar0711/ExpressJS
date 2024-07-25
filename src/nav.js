//navigate karenge isme ek page se dusre page per
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});
app.get("/contact", (req, res) => {
  res.send("Contact Page");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// In Express.js, the res.send() method is used to send a response to the client. The difference between res.send("this is home page") and res.status(200).send("this is home page") lies in how the HTTP status code is handled.

//     res.send("this is home page"):
//         This method sends the response body "this is home page" to the client.
//         If no status code is set before calling res.send(), Express will automatically set the status code to 200 (OK) by default.

//     res.status(200).send("this is home page"):
//         This method explicitly sets the HTTP status code to 200 (OK) using res.status(200).
//         It then sends the response body "this is home page" to the client.
//         Using res.status(200) before send() is useful when you want to ensure that the status code is explicitly set, making the code more readable and clear about the intended status code of the response.

// In summary, while both methods will result in the same response being sent to the client with a status code of 200, the latter method explicitly sets the status code, which can be beneficial for clarity and maintainability of the code.
