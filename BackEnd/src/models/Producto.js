const { DataTypes } = require('sequelize');
//Exportamos una funcion que define el modelo
//Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    //defino el modelo que va tener mi tabla
    sequelize.define('producto', {
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

        description: {
            type: DataTypes.STRING(30),
            allowNull: false
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    });
};