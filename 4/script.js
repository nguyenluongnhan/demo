const links = document.querySelector(".nav_link");
const toggles = document.querySelector(".nav_toggle");

toggles.addEventListener('click', function() {
    links.classList.toggle("showlink");
    // console.log(links,toggles,links.classList);
});