const { post } = require('../controllers');
const { Post } = require('../models');

const postData = [
    {
        title: "First Blog Post",
        content: "blog post one",
        user_id: 1
    },
    {
        title: "Second Blog Post",
        content: "blog post two",
        user_id: 2
    },
    {
        title: "Third Blog Post",
        content: "blog post three",
        user_id: 3
    },
    {
        title: "Fourth Blog Post",
        content: "blog post four",
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;