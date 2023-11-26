//1. Учитывая данные, определите интерфейс «Пользователь» и используйте его 
//соответствующим образом.
export interface userInt {
    name: string;
    age: Number;
    occupation: string;
    car?: string; // Необязательный параметр
    children?: number; // Необязательный параметр
}
export const users: userInt[] = [
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
    }];
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
    console.log('---');
}
