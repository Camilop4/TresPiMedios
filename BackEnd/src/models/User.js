const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');


module.exports = (sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },

        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },

        document: {
            type: DataTypes.STRING(20),
            allowNull: false
        },

        role_id: {
            type: DataTypes.STRING,
            allowNull: true
        },

    }, {
        timestamps: false
    });

    User.beforeCreate(async (user, options) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
    });

    return User;

};