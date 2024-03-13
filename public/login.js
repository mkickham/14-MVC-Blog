const techLoginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-tech-login').value.trim();
    const password = document.querySelector('#password-tech-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POSt',
            body: json.stringify({ username, password }),
        }
        );

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('Login attempt failed');
        }
    }
};

const techLoginForm = document.querySelector('.tech-login-form');
if (techLoginForm) {
    techLoginForm.addEventListener('submit', techLoginFormHandler)
}