const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('role', {
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

    }, {
        timetamps: false
    });
};