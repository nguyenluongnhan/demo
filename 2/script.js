const buttons = document.querySelectorAll(".bai2_button")
const valueColor = document.querySelector(".color");

// console.log(buttons);

let count = 0;

buttons.forEach(function (bai2_button){
    bai2_button.addEventListener('click', function(e){
        const style = e.target.classList;
        if(style[1]=='decrease'){
            count--;
            // console.log(count);
        }
        else if(style[1]=='increase'){
            count++;
            // console.log(count);
        }
        else{
            count = 0;
            // console.log(count);
        }
        if(count == 0)
            valueColor.style.color = "#222";
        else if(count > 0)
            valueColor.style.color = "green";
        else 
            valueColor.style.color = "red";
        valueColor.textContent = count;  
    });
});