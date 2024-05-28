

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

    const userName = localStorage.getItem('name'),
                userEmail = localStorage.getItem('email');
            if (userName && userEmail) {
                // Use the user's name as needed
                document.querySelectorAll('.userName_display').forEach((n) => {
                    n.innerHTML = userName;
                })
                document.querySelector('.email_address').innerHTML = userEmail;
                document.querySelector('.user_img span').innerHTML = userName[0];
            } else {
                // Handle the case where the userName is not available
                console.log('User name not found.');
            }

    // Script for Main Page
    const menuIcon = document.querySelector('.burger'),
        menu = document.querySelector('.menu');
        // userInfo = document.querySelector('.user_info');

    // const userInfoWidth = userInfo.scrollWidth;
    // menu.style.minWidth = `${userInfoWidth + 60}px`; // Add some padding for better look

    menuIcon.addEventListener('change', () => {
        menu.classList.toggle('active');

    })

    // const userThemePreference = sessionStorage.getItem('theme');
    //     if (userThemePreference === 'dark') {
    //         document.body.classList.add('dark');
    //     }

    const darkLightToggle = document.querySelector('.dark_light_toggle .input');
    darkLightToggle.addEventListener('change', () => {

        document.body.classList.toggle('dark');
        // const currentTheme = document.body.classList.contains('dark') ? 'dark' : '';
        // sessionStorage.setItem('theme',currentTheme);
    })

    const inputLanguageTrigger = document.querySelector('.input_container .language_trigger');
    const inputDropdown = document.querySelector('#input-languages');

    const outputLanguageTrigger = document.querySelector('.output_container .language_trigger');
    const outputDropdown = document.querySelector('#output-languages');

    const swapBtn = document.querySelector('.swapper_icon'),
        inputLanguage = inputLanguageTrigger.querySelector('.selected'),
        outputLanguage = outputLanguageTrigger.querySelector('.selected'),
        inputLanguageText = document.querySelector('#input_text'),
        outputLanguageText = document.querySelector('#output_text');

    function fillDropdown(dropdown, options) {
        options.forEach((option) => {
            const li = document.createElement("li");
            const title = option.name + " (" + option.native + ")";
            li.innerHTML = title;
            li.dataset.value = option.code;
            li.classList.add("option");
            dropdown.appendChild(li);
        });
    }
    fillDropdown(inputDropdown, languages);
    fillDropdown(outputDropdown, languages);


    // Toggle input language dropdown
    inputLanguageTrigger.addEventListener('click', function () {
        inputDropdown.classList.toggle('active');
    });

    // Toggle output language dropdown
    outputLanguageTrigger.addEventListener('click', function () {
        outputDropdown.classList.toggle('active');
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', function (event) {
        if (!inputLanguageTrigger.contains(event.target) && !inputDropdown.contains(event.target)) {
            inputDropdown.classList.remove('active');
        }
        if (!outputLanguageTrigger.contains(event.target) && !outputDropdown.contains(event.target)) {
            outputDropdown.classList.remove('active');
        }
    });

    function translate() {
        const inputText = inputLanguageText.value;
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage.dataset.value}&tl=${outputLanguage.dataset.value}&dt=t&q=${encodeURI(inputText)}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data[0]);
                outputLanguageText.innerHTML = data[0].map((item) => item[0]).join("");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    swapBtn.addEventListener('click', () => {
        const temp = inputLanguage.innerHTML;
        inputLanguage.innerHTML = outputLanguage.innerHTML;
        outputLanguage.innerHTML = temp;

        const tempValue = inputLanguage.dataset.value;
        inputLanguage.dataset.value = outputLanguage.dataset.value;
        outputLanguage.dataset.value = tempValue;

        const tempText = inputLanguageText.value;
        inputLanguageText.value = outputLanguageText.value;
        outputLanguageText.value = tempText;

        translate();
    })

    inputDropdown.querySelectorAll('.option').forEach((op) => {
        op.addEventListener("click", (e) => {
            inputDropdown.classList.toggle("active");
        });
        op.addEventListener("click", (e) => {
            //remove active class from current dropdowns
            inputDropdown.querySelectorAll('.option').forEach((item) => {
                item.classList.remove("active");
            });
            op.classList.add("active");
            const selected = inputLanguageTrigger.querySelector(".selected");
            selected.innerHTML = e.target.innerHTML;
            selected.dataset.value = e.target.dataset.value;
            translate();
        });
    });

    outputDropdown.querySelectorAll('.option').forEach((op) => {
        op.addEventListener("click", (e) => {
            outputDropdown.classList.toggle("active");
        });
        op.addEventListener("click", (e) => {
            //remove active class from current dropdowns
            outputDropdown.querySelectorAll('.option').forEach((item) => {
                item.classList.remove("active");
            });
            op.classList.add("active");
            const selected = outputLanguageTrigger.querySelector(".selected");
            selected.innerHTML = e.target.innerHTML;
            selected.dataset.value = e.target.dataset.value;
            translate();
        });
    });


    

    inputLanguageText.addEventListener('input', (e) => {
        if (inputLanguageText.value.length < 1) {
            outputLanguageText.innerHTML = "";
        }
        if (inputLanguageText.value.length > 5000) {
            inputLanguageText.value = inputTextElem.value.slice(0, 5000);
        }
        translate();
    });

    const speekIcons = document.querySelectorAll('.speak'),
        copyIcon = document.querySelector('.copy'),
        micIcon = document.querySelector('.mic'),
        toast = document.querySelector('.toast');

    let isRecording = false;
    let recognition;

    micIcon.addEventListener('click', () => {
        // Initialize SpeechRecognition if not already initialized
        micIcon.classList.toggle('recording');
        if (micIcon.classList.contains('recording')) {
            micIcon.style.backgroundColor = '#ff0a0a';
            micIcon.style.fontSize = '20px';
            micIcon.innerHTML = '<ion-icon name="square"></ion-icon>';
        } else {
            micIcon.style.backgroundColor = 'var(--controls-color)';
            micIcon.style.fontSize = '25px';
            micIcon.innerHTML = '<ion-icon name="mic"></ion-icon>';
        }
        if (!recognition) {
            window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognition = new SpeechRecognition();
            recognition.interimResults = true;
            recognition.continuous = true;

            // Handle recognition result
            recognition.addEventListener('result', (e) => {
                const transcript = Array.from(e.results)
                    .map((result) => result[0])
                    .map((result) => result.transcript)
                    .join('');
                inputLanguageText.value = transcript;
                translate();
            });

            recognition.addEventListener('error', (e) => {
                console.error('Error during speech recognition:', e.error);
                // otify the user of the error
            });
        }

        // Toggle recording state
        if (isRecording) {
            recognition.stop();
            isRecording = false;
            // console.log('Speech recognition stopped');
        } else {
            recognition.start();
            isRecording = true;
            // console.log('Speech recognition started');
        }
    });

    speekIcons.forEach((icon) => {
        icon.addEventListener('click', () => {
            let utterence;
            if (icon.classList.contains('input')) {
                utterence = new SpeechSynthesisUtterance(inputLanguageText.value);
                utterence.lang = inputLanguage;
            } else {
                utterence = new SpeechSynthesisUtterance(outputLanguageText.value);
                utterence.lang = outputLanguage;
            }
            speechSynthesis.speak(utterence);
        })
    });

    copyIcon.addEventListener('click', () => {
        navigator.clipboard.writeText(outputLanguageText.value);
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    });

    const logoutButton = document.querySelectorAll('#logoutButton');

        // Event listener for the Logout button
        logoutButton.forEach((button) => {            
            button.addEventListener('click', () => {
            // Send a GET request to the /logout route to initiate the logout process
            fetch('/logout')
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        localStorage.removeItem('username');
                        localStorage.removeItem('email');
                        // Redirect the user to the login page or perform other actions as needed
                        window.location.href = '/index.html';
                    } else {
                        // Handle logout error if necessary
                        console.error('Logout failed:', data.message);
                    }
                })
                .catch(error => {
                    console.error('Logout error:', error);
                });
            });
        });

});


