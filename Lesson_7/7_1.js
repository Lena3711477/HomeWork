
//поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
let arr = [1, 2, 3, 4, 5, 6];
function revert(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
} console.log(revert(arr));