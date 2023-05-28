const dbconfig = require('../config/dbconfig.js');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD, {
        host : dbconfig.HOST,
        dialect : dbconfig.dialect,
        operatorsAliases: false,
        pool:{
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            idle: dbconfig.pool.idle,
        }
    }
)

sequelize.authenticate()
.then(()=> {
    console.log('Database Jalan!')
})
.catch(err => {
    console.log('Error' + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.articles = require('./articles.js')(sequelize, DataTypes)
db.tips = require('./tips.js')(sequelize, DataTypes)

db.sequelize.sync({force:false})
.then(() => {
    console.log('Sync Done!')
})

module.exports = db 