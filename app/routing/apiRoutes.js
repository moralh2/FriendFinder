var friendData = require("../data/friend");

// Export routes to server (need server reference in function)
module.exports = function (app) {

    //Route to get Friends Data
    app.get("/api/friends", function (request, response) {
        response.json(friendData);
    });

    //Route to post Friends Data
    app.post("/api/friends", function (request, response) {
        // Calculate match
        var matchedFriend = calculateMatch(request.body);
        // Push new user
        friendData.push(request.body);
        // Return matching user
        response.json(matchedFriend);
    });

}

// Calls compareScore for each user, then sorts
function calculateMatch(newFriend) {
    var matches = [];
    for (i = 0; i < friendData.length; i++) {
        matches.push(
            {
                name: friendData[i].name,
                score: compareScores(newFriend.scores, friendData[i].scores)
            }
        );
    }

    // Look at score attribute and sort, asc
    matches.sort(function(a,b){
        return (a.score - b.score)
    });

    // Return the closest match
    return matches[0];
}

// Gets the difference between scores, keeps a running sum
function compareScores(newFriendScores, existingFriendScores) {
    var scoreDiff = 0;
    newFriendScores.map(function (currentValue, index) {
        scoreDiff += Math.abs(currentValue - existingFriendScores[index]);
    });
    return scoreDiff;
}