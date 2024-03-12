const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { extend } = require('lodash');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.int,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.string,
            allowNull: false,
            validate: {
                length: [10]
            },
        },
        user_id: {
            type: DataTypes.int,
            allowNull: false,
            references: {
                mdoel: "user",
                key: "id"
            },
        },
        post_id: {
            type: DataTypes.int,
            allowNull: false,
            references: {
                model: "post",
                key: "id"
            },
        },
    },
    {
    sequelize,
    modelName: "comment",
    }
);

module.exports = Comment;