import express from 'express';
import { getProjects } from '../logic/projectsLogic.js';

let router = express.Router();


router.route('/projects').get(async (req, res) => {
    try {
        res.status(200).json(await getProjects());
    } catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})
export default router;