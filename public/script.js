document.addEventListener('DOMContentLoaded', () => {
    // Script For Login And Register
    const
        loginForm = document.querySelector(".login_wrapper"),
        RegisterForm = document.querySelector(".register_wrapper"),
        registerClose = document.querySelector("#reg_cls"),
        loginClose = document.querySelector("#login_cls"),
        formCloseBtn = document.querySelector(".form_close"),
        registerBtn = document.querySelector("#register_btn"),
        loginBtn = document.querySelector("#login_btn"),
        pwShowHide = document.querySelectorAll(".pw_hide");




    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            loginForm.classList.add("show");
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener("click", () => {
            RegisterForm.classList.add("show");
        });
    }

    if (registerClose) {
        registerClose.addEventListener("click", () => RegisterForm.classList.remove("show"));
    }

    if (loginClose) {
        loginClose.addEventListener("click", () => loginForm.classList.remove("show"));
    }


    if (pwShowHide) {
        pwShowHide.forEach((icon) => {
            icon.addEventListener("click", () => {
                let getpwInput = icon.parentElement.querySelector("input");
                if (getpwInput.type === "password") {
                    getpwInput.type = "text";
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                }
                else {
                    getpwInput.type = "password";
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                }
            });

        });
    }

    const menuOpenbtn = document.querySelector('.toggle_button'),
          menuClosebtn = document.querySelector('.close');
    const menuItems = document.querySelector('.nav_item');
    menuOpenbtn.addEventListener('click',() =>{
        menuItems.classList.add('show-menu');
    });
    menuClosebtn.addEventListener('click',() =>{
        menuItems.classList.remove('show-menu');
    });
});


