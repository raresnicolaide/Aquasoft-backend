import ProjectFromDb from '../entities/projects.js';

function validateProjects(Projects) {
    console.log(Projects.id);
    if (!Projects || Object.entries(Projects).length === 0)
        return { hasErrors: true, message: "You must provide Project information"};
    if (!Projects.project_name) 
        return { hasErrors: true, message: "You must provide a name for the Project"};
    if (!Projects.start_date) 
        return { hasErrors: true, message: "You must provide a start date for the Project"};
    if (!Projects.planned_end_date)
        return { hasErrors: true, message: "You must provide an end date for the Project"}
    if (!Projects.id)
        return { hasErrors: true, message: "You must provide an id for the Project"}
    if (!Projects.description)
        return { hasErrors: true, message: "You must provide a description for the Project"}
    if (!Projects.project_code)
        return { hasErrors: true, message: "You must provide a project code for the Project"}
    return { hasErrors: false, message: ""};
}

export async function getProjects() {
    return await ProjectFromDb.findAll();
}

export async function createProjects(Projects) {
    let error = validateProjects(Projects);

    if (error.hasErrors)
        return error;

    return await ProjectFromDb.create(Projects);
}

export async function getProjectById(id) {
    return await ProjectFromDb.findByPk(id);
}

export async function updateProjects(id, Projects) {
    if (parseInt(id) !== parseInt(Projects.id)) 
        return { hasErrors: true, message: "Entity id diff"};

    let updateEntitity = await getProjectById(id);
    
    if (!updateEntitity)
        return { hasErrors: true, message: "There isn't a project with this id"};

    let error = validateProjects(Projects);

    if (error.hasErrors)
        return error;

    return await updateEntitity.update(Projects);
}

export async function deleteProjects(id) {
    let deleteEntity = await getProjectById(id);
    if (!deleteEntity)
        return { hasErrors: true, message: "There isn't a project with this id" };

    return await deleteEntity.destroy();
}
