const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('sale', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        qty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        sale_at: {
            type: DataTypes.DATEONLY,
            allowNull:false
        },

        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    }, {
        timestamps: false,
    });
};