const { User } = require('../models');

const userData = [
    {
        username: "user1",
        email: "sample1@generic.com",
        password: "password123"
    },
    {
        username: "user2",
        email: "anotheremail@email.com",
        password: "codeclass1"
    },
    {
        username: "user3",
        email: "email@sampler.com",
        password: "anotherpassword"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;