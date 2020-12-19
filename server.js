const express = require('express');

const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello World</h1>")
})


app.get("/contact", function (req, res) {
    res.send("<p>Contact Me: semiteagain@gmail.com</p>")
})

app.get("/about", function (req, res) {
    res.send("<div><h1>I am Mukaila Semiu,</h1> <p>Learning with Angela Yu.</p></div>")
})


app.listen(3000, function () {
    console.log("server 3000 started....")
}) ;