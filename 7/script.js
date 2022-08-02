const questions = document.querySelectorAll(".question")

questions.forEach( function (question) {
    const buttons = question.querySelector(".button");

    buttons.addEventListener('click', function() {
        questions.forEach(function (item) {
            if(item !== question)
                item.classList.remove("show");
        });
        question.classList.toggle("show");
    });
});
    
