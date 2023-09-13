const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('countries', '', '', {
    dialect: 'sqlite',
    host: './world_countries.sqlite'
});

module.exports = sequelize;