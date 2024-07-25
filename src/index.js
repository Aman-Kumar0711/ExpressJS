const path = require("path");
const express = require("express");
const app = express();
//built-in middleware
//2 type ke path hote hain ek to relative ek absolute...absolute path use kiya karo
// path.join() is a method from the Node.js path module that is used to join multiple path segments into a single path string. It handles and corrects various issues related to path concatenation, such as ensuring the correct path separators are used (/ on UNIX-based systems and \ on Windows) and resolving any relative path segments (like . and ..)
//console.log(path.join(__dirname, "../public"));  .. se to main index.js jis directory mei hai uss se ek step baahar ja rha hoon
//yeh mera complete path ban chuka hai
const staticPath = path.join(__dirname, "../public"); //public folder mei hi to meri index.html and style.css hai
//ab mera servet ban chuka hai and static website uspe serve bhi main iss line ki madad se kar paa rha hoon...ab agar mujhe kuchh changes karne hain site mei to mujhe public folder mei jaake individual cheezeon per change karna hoga bas baaki woh server per apne aap update hota rahega...
app.use(express.static(staticPath));
app.listen(8000, () => {
  console.log("Listening on port 8000");
});
