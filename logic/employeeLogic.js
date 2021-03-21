import Employees from '../entities/employees.js';

export async function getEmployees() {
    return await Employees.findAll();
}