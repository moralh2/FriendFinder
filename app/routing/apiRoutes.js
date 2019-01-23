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

// function calculateMatch(newFriend) {
//     for (i = 0; i < friendData.length; i++) {

//     }
// }

// function getDifference(array1, array2) {
//     array1.map(function (currentValue, index) {
//         return Math.abs(currentValue - array2[index])
//     })
// }