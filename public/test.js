document.addEventListener('DOMContentLoaded', () => {
    const MloginForm = document.querySelector('.lform');
    const MsignupForm = document.querySelector('.rform');
    const emailInputs = document.querySelectorAll('input[type="email"]');
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    const nameInput = document.getElementById('name-Input');

    // Event listener for the signup form
    if (MsignupForm) {
        MsignupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = nameInput.value;
            const email = emailInputs[0].value;
            const password1 = passwordInputs[0].value;
            const password2 = passwordInputs[1].value;

            if (password1 !== password2) {
                alert('Passwords do not match');
                return;
            }

            // Create an object with user data
            const userData = {
                name: name,
                email: email,
                password: password1
            };

            // Send a POST request to your server to store user data
            fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert("Sign Up Is Successful.\n\nPlease Login To use our Services");
                        window.location.href = '/index.html';
                    } else {
                        alert("User Already Exists.");
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    }

    // Event listener for the login form
    if (MloginForm) {
        MloginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = emailInputs[1].value;
            const password = passwordInputs[2].value;

            // Create an object with user login data
            const loginData = {
                email: email,
                password: password
            };

            // Send a POST request to your server to validate login
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Login Successful.
                        alert("Login Successful.");
                        console.log(data)
                        console.log(data.userData.name)

                        const userName = data.userData.name;
                        window.location.href = `/main.html?name=${encodeURIComponent(userName)}`;
                    } else {
                        alert("Wrong Password.");
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    }
});
