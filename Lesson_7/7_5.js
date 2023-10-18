//сортировка массива по возрастанию/убыванию
var myarray = [25, 8, 7, 41, -2]
let a, b;
myarray.sort(function (a, b) {
    return a - b;
})
console.log('Сортировка по возрастанию ', myarray);

myarray.sort(function (a, b) {
    return b - a;
})
console.log('Сортировка по убыванию', myarray);