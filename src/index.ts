
import {Employee, Manager} from './2'
import {Wizard} from './3'
import {Key, Person, House, MyHouse } from './4'

// test 2.ts
console.log('--------- test 2.ts')
const employee = new Employee("Vasyl", "worker", 10000);
console.log(employee.getEmployeeDetails());

const manager = new Manager("Petro", "Director", 100000);
console.log(manager.getEmployeeDetails());

// test 3.ts
console.log('--------- test 3.ts')
const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp()

// test 4.ts
console.log('--------- test 4.ts')
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

