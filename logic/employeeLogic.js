import Employee from '../entities/employees.js';

function validateEmployees(Employees) {
    console.log(Employees.id);
    if (!Employees || Object.entries(Employees).length === 0)
        return { hasErrors: true, message: "You must provide employee information"};
    if (!Employees.id) 
        return { hasErrors: true, message: "You must provide an id for the employee"};
    if (!Employees.name) 
        return { hasErrors: true, message: "You must provide a name for the employee"};
    if (!Employees.email)
        return { hasErrors: true, message: "You must provide an email for the employee"}
    if (!Employees.hire_date)
        return { hasErrors: true, message: "You must provide a hire date for the employee"}
    if (!Employees.salary)
        return { hasErrors: true, message: "You must provide a salary for the employee"}
    if (!Employees.job_title)
        return { hasErrors: true, message: "You must provide a job title for the employee"}
    if (!Employees.project_id)
        return { hasErrors: true, message: "You must provide a project id for the employee"}
    return { hasErrors: false, message: ""};
}

export async function getEmployees() {
    return await Employee.findAll();
}

export async function createEmployees(Employees) {
    let error = validateEmployees(Employees);

    if (error.hasErrors)
        return error;

    return await Employee.create(Employees);
}

export async function getEmployeeById(id) {
    return await Employee.findByPk(id);
}

export async function updateEmployees(id, Employees) {
    if (parseInt(id) !== parseInt(Employees.id)) 
        return { hasErrors: true, message: "Entity id diff"};

    let updateEntitity = await getEmployeeById(id);
    
    if (!updateEntitity)
        return { hasErrors: true, message: "There isn't an employee with this id"};

    let error = validateEmployees(Employees);

    if (error.hasErrors)
        return error;

    return await updateEntitity.update(Employees);
}

export async function deleteEmployees(id) {
    let deleteEntity = await getEmployeeById(id);
    if (!deleteEntity)
        return { hasErrors: true, message: "There isn't an employee with this id" };

    return await deleteEntity.destroy();
}