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

function calculateMatch(newFriend) {
    var matches = []
    for (i = 0; i < friendData.length; i++) {
        matches.push(
            {
                name: friendData[i].name,
                score: compareScores(newFriend.scores, friendData[i].scores)
            }
        );
    }
    matches.sort(function(a,b){
        if(a.score == b.score)
            return 0;
        if(a.score < b.score)
            return -1;
        if(a.score > b.score)
            return 1;
    });
    return matches;
}

function compareScores(newFriendScores, existingFriendScores) {
    var scoreDiff = 0;
    newFriendScores.map(function (currentValue, index) {
        scoreDiff += Math.abs(currentValue - existingFriendScores[index])
    })
    return scoreDiff;
}

results.sort(function(a,b){
    if(a.score == b.score)
        return 0;
    if(a.score < b.score)
        return -1;
    if(a.score > b.score)
        return 1;
});
