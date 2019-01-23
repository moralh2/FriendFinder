// Node Express Packages
var express = require("express");
var path = require("path");

// Create Node server
var app = express();

// PORT 8080 unless Heroku
var PORT = process.env.PORT || 8080;

// Data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Test server
app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "./app/public/home.html"))
});

// Start server and listen on PORT
app.listen(PORT, function(){
    console.log("FriendFinder App Server is listening on PORT: " + PORT);
});