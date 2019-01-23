// Node Path Package
var path = require("path");

// Export routes to server
// Include server in fnc
module.exports = function(app) {

    // Route for Home
    app.get("/", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/home.html"))
    });

}