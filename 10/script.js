//show/hide navbar
const toggles = document.querySelector(".nav_toggle")
const container_links = document.querySelector(".container_links")
const links = document.querySelector(".content_links")

// toggles.addEventListener('click', function() {
//     container_links.classList.toggle("show_container_links")
// })
toggles.addEventListener('click', function() {
    const height_Container_link = container_links.getBoundingClientRect().height
    const height_link = links.getBoundingClientRect().height

    console.log(height_link)

    if(height_Container_link === 0)
        container_links.style.height =  `${height_link}px`
    else    
        container_links.style.height = 0
});
// scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    const height_scroll = window.pageYOffset;
    const height_nav = navbar.getBoundingClientRect().height;
    if(height_nav < height_scroll)
        navbar.classList.add("fixed")
    else
        navbar.classList.remove("fixed")
});
