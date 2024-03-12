const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "I love technology!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Coding is cool",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "Nice thoughts",
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: "My coding job is awesome",
        user_id: 1,
        post_id: 2
    }
];

const seedCommnents = () => Comment.bulkCreate(commentData);

module.exports = seedCommnents;