const closes = document.querySelector(".nav_close");
const nav_content = document.querySelector(".nav_content");
const toggles = document.querySelector(".nav_toggle");

closes.addEventListener('click', function() {
    nav_content.classList.toggle("nav_content_close");
});

toggles.addEventListener('click', function() {
    nav_content.classList.toggle("nav_content_close");
});