const items = document.querySelector(".content")
const contents = document.querySelectorAll(".details")
const btns = document.querySelectorAll(".btn")

items.addEventListener('click', function(e) {
    const id =e.target.dataset.id
    if(id){
        btns.forEach( (btn) => {
            btn.classList.remove("show_btn")
        });
        e.target.classList.add("show_btn")
        contents.forEach((content) => {
            content.classList.remove("show_content")
        });
        const s = document.getElementById(id)
        s.classList.add("show_content")
    }
});