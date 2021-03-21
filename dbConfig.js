import Sequelize from 'sequelize';

const db = new Sequelize({
    dialect: 'mysql',
    database: 'aquasoft',
    username: 'root',
    host: 'localhost',
    port: '3306 ',
    password: 'rares',
    validateBulkParamters: true,
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

export default db;