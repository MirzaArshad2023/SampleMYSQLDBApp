'use strict';
const { Sequelize } = require('sequelize');
// Sequelize is a package that abstracts out the need to write
// SQL queries, relying instead on their models to do it for you
const sequelize = new Sequelize('tvshow',
    'root','MyNewPassword', {
    host: 'localhost',
    dialect: 'mysql'
});
const connectMysql = async () => {
    try {
        await sequelize.authenticate();
        console.log(`Successful connection to MySQL Database
${process.env.DB_NAME}`);
    } catch (error) {
        console.error('Unable to connect to MySQL database:', error);
        process.exit(1);
    }
}
connectMysql();
module.exports = {
    Sequelize: sequelize, connectMysql
}