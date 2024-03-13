const techSignupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: json.stringify({ username, email, password }),
            headers: { 'Content-type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert ('That username or email is already taken')
        }
    }
};

const techSignupForm = document.querySelector('#signup-form');
if (techSignupForm) {
    techSignupForm.addEventListener('submit', techSignupFormHandler);
}