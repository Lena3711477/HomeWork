//Решить используя промисы и async/await. Сделайте 3 промиса, 
//в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. 
//Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.С помощью Promise.race 
//дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

const promise1 = new Promise((resolve) => {
    const num = getRandomInt(1000, 5000);
    setTimeout(() => {
        return resolve(1);
    }, num);
});
const promise2 = new Promise((resolve) => {
    const num = getRandomInt(1000, 5000);
    setTimeout(() => {
        return resolve(2);
    }, num);
});
const promise3 = new Promise((resolve) => {
    const num = getRandomInt(1000, 5000);
    setTimeout(() => {
        return resolve(3);
    }, num);
});
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
async function runPromise() {
    const result = await Promise.race([promise1, promise2, promise3])
    console.log(result)
}
runPromise();
