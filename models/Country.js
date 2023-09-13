const { Model, DataTypes } = require('sequelize');
const sequelize = require('services/database');

class Country extends Model {}

// Initialize the table
Country.init({
    name: {
        type: DataTypes.STRING
    },
    cca3_code: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName: 'countries', // THIS IS THE TABLE NAME IN THE DATABASE
    modelName: 'countries',
    timestamps: false // CreatedAt and UpdatedAt don't exist in our database
});

module.exports = Country;