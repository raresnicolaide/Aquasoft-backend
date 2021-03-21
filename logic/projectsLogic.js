import Projects from '../entities/projects.js';

export async function getProjects() {
    return await Projects.findAll();
}