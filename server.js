// Node Express Package
var express = require("express");

var path = require("path");


// Create Node server
var app = express();

// PORT 8080 unless Heroku
var PORT = process.env.PORT || 8080;

// Data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// require("./assets/javascript/main")

app.use(express.static('assets/javascript'));

// app.use(express.static(__dirname + '/public'));

// app.use('/assets',express.static(path.join(__dirname, '../assets/')));


// app.use(express.static('./assets'))

// app.use('/static', express.static('./assets'))

// app.use("./assets", express.static(__dirname + './assets'));


// Router
require("./app/routing/htmlRoutes")(app);

// app.use(express.static('assets'))

// Start server and listen on PORT
app.listen(PORT, function(){
    console.log("FriendFinder App Server is listening on PORT: " + PORT);
});