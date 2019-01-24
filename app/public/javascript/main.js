var questions = [
    "I need coffee in my life", "I am definitely NOT a morning person",
    "I really like scary movies", "I prefer beer to wine",
    "I like dogs over cats", "I enjoy hiking",
    "I watch too much Netflix", "I can't wait for the final season of Game Thrones",
    "I like listening to Classical music on occassion", "I go out to the movies a lot"
];

$(document).ready(function () {
    loadQuestions();
    $('.modal').modal();
    $('.materialboxed').materialbox();
});

$("#form-submit").on("click", function (event) {
    event.preventDefault();

    // Will save selected options
    var optionsArray = []
    for (var i = 1; i <= questions.length; i++) {

        // Only saves first character -- 1-5, or 'C' if not selected
        questionValue = $("#question-" + i + " input.select-dropdown").val()[0];
        optionsArray.push(questionValue);
    }

    // Get name and link from form
    var nameSubmitted = $("#name").val().trim();
    var photoLinkSubmitted = $("#photo").val().trim();

    // Validate name is supplied
    if (nameSubmitted === "") {
        alert("Please enter a name");
    }

    // Validate photo URL is supplied
    else if (photoLinkSubmitted === "") {
        alert("Please enter a photo URL")
    }

    // Validate all questions were answered
    else if (optionsArray.indexOf("C") != -1) {
        alert("Please answer all the questions")
    }

    // If data is valid, convert answers to integers, and post all data
    else {
        var scoresArray = []

        // Parse string integers
        for (var j in optionsArray) {
            scoresArray.push(parseInt(optionsArray[j]));
        }

        // Create obj for new friend
        var newFriend = {
            name: nameSubmitted,
            photo: photoLinkSubmitted,
            scores: scoresArray
        };

        // Post new user
        $.post("/api/friends", newFriend, function (data) {
            if (data) {
                // Function will load data name and link w/ jQuery to modal
                loadMatch(data);
                console.log(JSON.stringify(data))
                $('#modal').modal('open');
            }

            // Clear form
            $("#name").val("");
            $("#photo").val("");
            loadQuestions();
        });
    }
});

// Use jQuery to load all the questions on the page
function loadQuestions() {
    var formDiv = $("#survey-questions");
    formDiv.empty();
    for (var i in questions) {

        // The numId math below concatenates w/o the '+'
        var numId = +1 + +i;
        var runningId = "question-" + numId;
        var questionDiv = $("<div>").addClass("input-field col s12").attr("id", runningId);
        var selectTag = $("<select>");
        var option0 = $("<option>").text("Choose your option")
        option0.attr("disabled", true)
        option0.attr("selected", "selected")
        selectTag.append(option0);
        var defaultOptions = ["1 (Strongly Disagree)", "2", "3", "4", "5 (Strongly Agree)"]

        for (var j in defaultOptions) {
            var option = $("<option>").text(defaultOptions[j]).val(j);
            selectTag.append(option);
        }

        questionDiv.append(selectTag);
        var label = $("<label>").text(questions[i]);
        questionDiv.append(label);
        formDiv.append(questionDiv);
    }

    // Initialize the Materialize selects
    $("select").formSelect();
}

// Set name img source within modal
function loadMatch(matchedFriend) {
    var modalName = $("#modal-match-name") ;
    var modalPhoto = $("#modal-match-image");
    modalName.text(matchedFriend.name);
    modalPhoto.attr("src", matchedFriend.photo);
}