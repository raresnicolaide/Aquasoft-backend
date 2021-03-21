import express from 'express';
import { createEmployees, deleteEmployees, getEmployeeById, getEmployees, updateEmployees } from '../logic/employeeLogic.js';

let router = express.Router();


router.route('/employees').get(async (req, res) => {
    try {
        res.status(200).json(await getEmployees());
    } catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/employees/:id').get(async (req, res) => {
    try {
        res.status(200).json(await getEmployeeById(req.params.id));
    } catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/employees').post(async (req, res) => {
    try {
        let employee = await createEmployees(req.body);
        if (employee.hasErrors)
            res.status(400).json(employee);
        else 
            res.status(200).json(await getEmployeeById(employee.id));

    } catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/employees/:id').put(async (req, res) => {
    try {
        let employee = await updateEmployees(req.params.id, req.body);

        if (employee.hasErrors)
            res.status(400).json(employee);
        else 
            res.status(200).json(employee);
    } catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/employees/:id').delete(async (req, res) => {
    try {
        let employee = await deleteEmployees(req.params.id);
        if (employee.hasErrors){
            res.status(400).json(employee);
        }
        else 
            res.status(200).json(employee);
    } catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})
export default router;