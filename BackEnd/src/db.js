const { Sequelize } = require('sequelize');
require('dotenv').config();
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
} = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/trespi`);

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully');
} catch (error) {
    console.error('Unable to connect tothe database:', error);
}