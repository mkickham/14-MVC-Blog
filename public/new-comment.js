const newTechCommentFormHandler = async (event) => {
    event.preventDefault();

    const post_id = parseInt(window.location.pathname.split('/').pop());

    const content = document.querySelector('#content-new-tech-comment').value.trim();

    if (content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: json.stringify({ comment_text: content, post_id}),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.reload();
        } else {
            console.log('Response:', response.status);
            console.log('Response', await response.text());
            alert('Failed to post a comment');
        }
    }
};

const newTechCommentForm = document.querySelector('.new-tech-comment-form');
if (newTechCommentForm) {
    newTechCommentForm.addEventListener('submit', newTechCommentFormHandler)
}