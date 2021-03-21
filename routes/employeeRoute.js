import express from 'express';
import { getEmployees } from '../logic/employeeLogic.js';

let router = express.Router();


router.route('/employees').get(async (req, res) => {
    try {
        res.status(200).json(await getEmployees());
    } catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})
export default router;