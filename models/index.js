const Sequelize = require('sequelize');
const Calendar = require('./Calendar');


const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Calendar = Calendar;

Calendar.init(sequelize);




module.exports = db;