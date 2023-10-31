
import {Employee, Manager} from './2'

// test 2.ts
const employee = new Employee("Vasyl", "worker", 10000);
console.log(employee.getEmployeeDetails());

const manager = new Manager("Petro", "Director", 100000);
console.log(manager.getEmployeeDetails());