const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('sale', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },

        products_id: {
            type: DataTypes.UUID
        },

        qty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        sale_at: {
            type: DataTypes.DATE,
            allowNull: false
        },

        users_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        
    }, {
        timetamps: false
    });
};