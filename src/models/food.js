// 'use strict';

// const Food = (sequelize, DataTypes) => {

//    return sequelize.define('Food', {
//     typeOffood: {
//         type: DataTypes.STRING,
//         // allowNull: false
//     }, 
//     numberOfeaters: {
//         type: DataTypes.STRING
//     }
// }) ;
// }

// module.exports = Food;

'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('Food', {
    typeOffood: {
                type: DataTypes.STRING,
            }, 
    numberOfeaters: {
    type: DataTypes.STRING,
  }
});

module.exports = Food;