//Напишите функцию, которая вставит данные в массив в заданные несколько мест в массиве. Дан массив [1, 2, 3, 4, 5]. 
//Сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const Array = [1, 2, 3, 4, 5];
const data_Insert = ['a', 'b', 'c', 'e'];
const positions_Insert = [1, 2, 6, 8];
function insertData(arr, data_Insert, positions) {
    for (let i = 0; i < data_Insert.length; i++) {
        const position = positions[i];
        const elementsToInsert = data_Insert[i];
        arr.splice(position, 0, elementsToInsert);
    }
}insertData(Array, data_Insert, positions_Insert);
console.log(Array);