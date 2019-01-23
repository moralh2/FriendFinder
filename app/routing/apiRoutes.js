var friendData = require("../data/friend");

// Export routes to server (need server reference in function)
module.exports = function (app) {

    //Route to get Friends Data
    app.get("/api/friends", function (request, response) {
        response.json(friendData);
    });

    //Route to post Friends Data
    app.post("/api/friends", function (request, response) {
        friendData.push(request.body);
        response.json(friendData);
    });

}