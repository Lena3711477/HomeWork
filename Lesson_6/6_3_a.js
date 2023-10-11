let num = 15;
let parts = -3;
let result = [];
let a = num;
if (parts < 0) {
    console.log('Некорректно введено число для деления на части');
} else {
    for (let i = 0; i < parts - 1; i++) {
        count = Math.floor(Math.random() * a);
        result.push(count);
        console.log('count ' + count);
        a = a - count;
        console.log('a ' + a);
    }

    result.push(a);

    console.log('result ' + result);
}