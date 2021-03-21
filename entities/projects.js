import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Projects = db.define("projects",{
    id:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    project_name:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    start_date:
    {
        type: Sequelize.DATE,
        allowNull: true
    },
    planned_end_date: 
    {
        type: Sequelize.DATE,
        allowNull: true
    },
    description:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    project_code:
    {
        type: Sequelize.STRING,
        allowNull: true
    }

})

export default Projects;