const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
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

        roles_id: {
            type: DataTypes.STRING,
            allowNull: true
        },

    }, {
        timestamps: false
    });
};