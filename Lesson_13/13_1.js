"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
exports.users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
];
for (const user of exports.users) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Occupation: ${user.occupation}`);
    if (user.car) {
        console.log(`Car: ${user.car}`);
    }
    if (user.children) {
        console.log(`Children: ${user.children}`);
    }
    console.log('---');
}
