const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { extend } = require('lodash');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                length: [10]
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: "users",
                key: "id"
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: "posts",
                key: "id"
            },
        },
    },
    {
    sequelize,
    modelName: "comments",
    }
);

module.exports = Comment;