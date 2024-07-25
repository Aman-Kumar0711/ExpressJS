const path = require("path");
const express = require("express");
const app = express();
//built-in middleware
//2 type ke path hote hain ek to relative ek absolute...absolute path use kiya karo
// path.join() is a method from the Node.js path module that is used to join multiple path segments into a single path string. It handles and corrects various issues related to path concatenation, such as ensuring the correct path separators are used (/ on UNIX-based systems and \ on Windows) and resolving any relative path segments (like . and ..)
//console.log(path.join(__dirname, "../public"));  .. se to main index.js jis directory mei hai uss se ek step baahar ja rha hoon
//yeh mera complete path ban chuka hai
const staticPath = path.join(__dirname, "../public"); //public folder mei hi to meri index.html and style.css hai
app.use(express.static(staticPath));
app.listen(8000, () => {
  console.log("Listening on port 8000");
});
