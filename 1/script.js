const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById("bai1_button");

const color = document.querySelector('.color');

button.addEventListener('click', function(){
        const numberRandom = Math.floor(Math.random()*4);
        console.log(numberRandom);
        document.body.style.background = colors[numberRandom];
        color.textContent = colors[numberRandom];
});

