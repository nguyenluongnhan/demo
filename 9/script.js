const video = document.querySelector(".video_container");
const buttons = document.querySelector(".button");

buttons.addEventListener('click', function() {
    if(buttons.classList.contains("pause")) {
        buttons.classList.remove("pause");
        video.play();
    }
    else {
        buttons.classList.add("pause");
        video.pause()
    }
})