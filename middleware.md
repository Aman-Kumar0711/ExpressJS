# Middleware

### About Middleware

hum kisi bhi static website ko ek line mei serve kar sakte hain using middleware...request and response ke beech jo bhi ho rha hota hai woh middleware dekhta hai
express.static() is a middleware
To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

#### The function signature is:

`express.static(root, [options])`
The root argument specifies the root directory from which to serve static assets. For more information on the options argument, see express.static.

#### Example

For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:

app.use(express.static('public'))
Now, you can load the files that are in the public directory:

http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html

To use multiple static assets directories, call the express.static middleware function multiple times:

app.use(express.static('public'))
app.use(express.static('files'))

Express looks up the files in the order in which you set the static directories with the express.static middleware function.
