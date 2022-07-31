let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    passWord = id("password"),
    form = id("form"),
    errorMsg = classes("error");
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

    form.addEventListener('submit', (e)=> {
        e.preventDefault();

        engine(email, 1, "Email cannot be blank");
    });

    let engine = (id, serial, message) => {
        if(id.value === ""){
            errorMsg[serial].innerHTML.trim() = message;
            failureIcon[serial].style.opacity = "1";
            successIcon[serial].style.opacity = "0";
        }
        else{
            errorMsg[serial].innerHTML = "";
            failureIcon[serial].style.opacity = "0";
            successIcon[serial].style.opacity = "1";
        }
    }

