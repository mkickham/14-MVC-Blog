const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.int,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.string,
            allowNull: false
        },
        content: {
            type: DataTypes.text,
            allowNull: false,
            validate: {
                length: [10]
            }
        },
        user_id: {
            type: DataType.int,
            references: {
                model: 'user',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        modelName: "post",
    }
);

module.exports = Post;