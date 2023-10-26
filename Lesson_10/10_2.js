//Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
//Создайте async функцию, которая с помощью await будет дожидаться результата getNum, 
//затем возводить его в квадрат и выводить на экран

function getNum() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * 5) + 1;
            resolve(num);
        }, 3000);
    });
}
async function squar() {
    const ranNum = await getNum();
    const ranNum1 = ranNum * ranNum;
    console.log('квадрат числа= ' + ranNum1);
}
squar();

