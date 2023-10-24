//Дан массив [3, 4, 1, 2, 7, 30, 50]. Отсортируйте его.
var myarray = [3,4,1,2,7,30,50]
let a, b;
myarray.sort(function (a, b) {
    return a - b;
})
console.log('Сортировка по возрастанию ', myarray);

myarray.sort(function (a, b) {
    return b - a;
})
console.log('Сортировка по убыванию', myarray);