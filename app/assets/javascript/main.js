$(document).ready(function () {
    loadQuestions();
    initMaterialize();
})

function loadQuestions() {
    var formDiv = $("#survey-form");
    formDiv.empty();
    for (var i in questions) {
        var runningId = "question-" + i;
        var questionDiv = $("<div>").addClass("input-field col s12").attr("id", runningId).text(question[i]);
        var selectTag = $("<select>");

        for (j = 1; j < 6; j++) {
            var option = $("<option>").attr("value", j).text("Option" + j);
            selectTag.append(option);
        }

        questionDiv.append(selectTag);
        formDiv.append(questionDiv);
    }
}

function initMaterialize() {
    $('select').formSelect();
}

var questions = ["I like coffee", "I like sushi", "I hate spiders"];
