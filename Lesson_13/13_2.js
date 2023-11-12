"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _13_1_1 = require("./13_1");
const persons = [
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
for (const user of _13_1_1.users) {
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
