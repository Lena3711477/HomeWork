//удалить из массива все повторяющиеся элементы
const numbers = [25, 8, 7, 41, -2, 8, -8, 7, 51, 6, 4, 6, 8, 9];
function uniq(myArray) {
    const uniqueNumbers = Array.from(new Set(myArray));
    return uniqueNumbers;
} 
let uniqValues = uniq(numbers);
console.log(uniqValues);
