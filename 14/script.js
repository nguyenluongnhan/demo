let classes = (classes) => document.querySelector(classes);
const section = classes(".section"),
    form = classes(".grocery"),
    container = classes(".container"),
    lists = classes(".container-content"),
    clear = classes(".clear")

const id_input = document.getElementById("grocery")

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const value = id_input.value
    if(value != ''){
    const article = document.createElement("article");
    article.classList.add("content")
    article.innerHTML = `<p class="title">${value}</p>
        <div class="btn">
            <button type="button" class="edit">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>`
    lists.appendChild(article)
    const del = article.querySelector(".delete")
    const edit = article.querySelector(".edit")
    del.addEventListener('click', function (e) {
        const ele = e.currentTarget.parentElement.parentElement;
        lists.removeChild(ele);
        if (lists.children.length === 0) {
            container.classList.remove("show-container");
        }
    })
    // edit.addEventListener('click', functio(e) {
    // })
    }
    id_input.value='';
})

clear.addEventListener('click', function (e) {
    const contents = document.querySelectorAll(".content");
    if(contents.length > 0){
        contents.forEach( (content) => {
            lists.removeChild(content); 
        });
    }
})