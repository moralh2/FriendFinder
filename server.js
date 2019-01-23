// Node Express Package
var express = require("express");

// Create Node server
var app = express();

// PORT 8080 unless Heroku
var PORT = process.env.PORT || 8080;

// Data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Router
require("./app/routing/htmlRoutes")(app);

// Start server and listen on PORT
app.listen(PORT, function(){
    console.log("FriendFinder App Server is listening on PORT: " + PORT);
});