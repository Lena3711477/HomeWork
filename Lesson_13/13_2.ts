//2. Создайте интерфейсы для ролей User и Admin, после этого создайте 
//интерйфей Person, который будет соответствовать массиву
import { getAutomaticTypeDirectiveNames } from "typescript";
import { userInt, users } from "./13_1";

interface Admin extends userInt {
    role: string;
}
//interface Person  extends userInt, Admin{}

//type Person = unknown;
type Person = userInt | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        occupation: 'Administrator',
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        occupation: 'World saver',
        role: 'World saver'
    }

];
for (const user of users) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Occupation: ${user.occupation}`);
    if (user.car) {
        console.log(`Car: ${user.car}`);
    }
    if (user.children) {
        console.log(`Children: ${user.children}`);
    }
    console.log('///');
}

for (const person of persons) {
    console.log(`Person Name: ${person.name}`);
    console.log(`Person Age: ${person.age}`);
    if ('role' in person) {
        console.log(`Person Role: ${person.role}`);
    }
    console.log('---');
}