const deletePost = async (post_id) => {
    const response = await fetch(`/api/posts/${posT_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json"}
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert("Delete attempt failed")
    }
};

const deletePostHandler = (event) => {
    if (event.target.matches(".delete-post")) {
        const post_id = event.target.getAttribute("data-post-id");
        deletePost(post_id);
    }
};

document.addEventListener('click', deletePostHandler)