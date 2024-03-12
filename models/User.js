const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcryptjs = require('bcryptjs');
const { log } = require('console');

class User extends Model {
    checkPassword(loginPw) {
        return bcryptjs.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.int,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.string,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.string,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.string,
            allowNull: false,
            validate: {
                length: [10]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newUser) {
                newUser.password = await bcryptjs.hash(newUser.password, 10);
                return newUser;
            },
            async beforeUpdate(updatedUser) {
                updatedUser.password = await bcryptjs.hash(updatedUser.password, 10);
                return updatedUser;
            }
        },
        sequelize,
        modelName: 'user',
    }
);

module.exports = User;