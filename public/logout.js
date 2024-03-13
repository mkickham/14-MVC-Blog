const techLogout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Logout attempt failed');
    }
};

const techLogoutButton = document.querySelector('#tech-logout');
if (techLogoutButton) {
    techLogoutButton.addEventListener('click', techLogout)
}