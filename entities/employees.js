import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Employees = db.define("employees",{
    id:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    email:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    hire_date: 
    {
        type: Sequelize.DATE,
        allowNull: true
    },
    salary:
    {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    job_title:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    project_id:
    {
        type: Sequelize.INTEGER,
        allowNull: true
    }

})

export default Employees;