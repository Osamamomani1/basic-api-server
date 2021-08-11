'use strict';

const Clothes = (sequelize, DataTypes) => {
    sequelize.define('Clothes', {
        tshirtColler: {
            type: DataTypes.STRING,
            // allowNull: false
        }, 
        pantsColler: {
            type: DataTypes.STRING,
            // allowNull: false
        }
    });
}

module.exports = Clothes;