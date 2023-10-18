//найти максимальное значение числа в массиве ([3,67,15...])
var arr = [3, 67, 15, 45, -2];
let min = 0;
let max = 0;
function minmax(arr, min, max) {
   console.log("Min:", Math.min.apply(null, arr));
   console.log("Max:", Math.max.apply(null, arr));
}
console.log(minmax(arr, min, max));

