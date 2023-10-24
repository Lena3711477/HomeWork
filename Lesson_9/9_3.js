//Дан массив arr. Найдите среднее арифметическое его элементов. 
//Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79
let array = [12, 15, 20, 25, 59, 79];
function getAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
};
console.log('Cреднее арифметическое элементов массива = ', getAverage(array));