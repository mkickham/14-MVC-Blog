const newTechPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-new-tech-post').value.trim();
    const content = document.querySelector('#content-new-tech-post').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: json.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Unable to post')
        }
    }
};

const newTechpostForm = document.querySelector('.new-tech-post-form');
if (newTechpostForm) {
    newTechpostForm.addEventListener('submit', newTechPostFormHandler)
}