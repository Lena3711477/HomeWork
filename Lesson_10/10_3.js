//Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет 
//случайное число от 1 до 5. Используйте также функцию getNum, чобы вернуть промис, который 
//с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с помощью await
// будет дожидаться результата getNum, затем будет дожидаться результата getNum, 
// а затем найдет сумму полученных чисел и выводит на экран.
function getNum(delay, min, max) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            resolve(randomNum);
        }, delay);
    });
}
async function getSum() {
    let promise1 = await getNum(3000, 1, 5);
    let promise2 = await getNum(5000, 6, 10);
    let sumPromise = promise1 + promise2;
    console.log("Sum of promise:", sumPromise);
}
getSum()
