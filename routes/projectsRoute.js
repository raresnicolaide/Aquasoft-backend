import express from 'express';
import { getProjects, createProjects, getProjectById, deleteProjects, updateProjects } from '../logic/projectsLogic.js';

let router = express.Router();


router.route('/projects').get(async (req, res) => {
    try {
        res.status(200).json(await getProjects());
    } catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/projects/:id').get(async (req, res) => {
    try {
        res.status(200).json(await getProjectById(req.params.id));
    } catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/projects').post(async (req, res) => {
    try {
        let project = await createProjects(req.body);
        if (project.hasErrors)
            res.status(400).json(project);
        else 
            res.status(200).json(await getProjectById(project.id));

    } catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/projects/:id').put(async (req, res) => {
    try {
        let project = await updateProjects(req.params.id, req.body);

        if (project.hasErrors)
            res.status(400).json(project);
        else 
            res.status(200).json(project);
    } catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/projects/:id').delete(async (req, res) => {
    try {
        let project = await deleteProjects(req.params.id);
        if (project.hasErrors){
            res.status(400).json(project);
        }
        else 
            res.status(200).json(project);
    } catch (e) {
        
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

export default router;