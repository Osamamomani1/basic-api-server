'use strict';

const POSTGRES_URI = "postgresql://osama:0000@localhost:5432/lab3";
const { Sequelize, DataTypes } = require('sequelize');
const clothes = require('./clothes');
const food = require('./food');

let sequelizeOptions = {};
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

// lets define our Schema
console.log(food(sequelize, DataTypes));
module.exports = {
    Clothes: clothes(sequelize, DataTypes),
    Food: food(sequelize, DataTypes),
    db: sequelize
}