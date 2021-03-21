import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './dbConfig.js';
import projects from './routes/projectsRoute.js';
import employees from './routes/employeeRoute.js';


let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', projects);
app.use('/api', employees);



db.authenticate()
    .then(() => {
        console.log("Connection has been established succesfully.");
    })
    .catch(err => {
        console.error("Unable to connect to the database: ", err);
    });

let port = process.env.PORT || 8000;
app.listen(port);
console.log("API is running at " + port);