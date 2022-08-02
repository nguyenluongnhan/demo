const classes = (classes) => document.querySelector(classes);

const opens = classes(".warrap_button");
const clicks = classes(".warrap_click");
const closes = classes(".button");

opens.addEventListener('click', function() {
    clicks.classList.add("warrap_click_open");
})

closes.addEventListener('click', function() {
    clicks.classList.remove("warrap_click_open");
})
