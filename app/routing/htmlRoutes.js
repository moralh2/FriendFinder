// Node Path Package
var path = require("path");

// Export routes to server
// Include server in fnc
module.exports = function(app) {

    //Route for Survey
    app.get("/survey", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    // Route for Catch-All - Lead to Home
    app.get("*", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/home.html"))
    });



}