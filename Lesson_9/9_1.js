//1. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
//Если это так - выведите 'да',
// в противном случае выведите 'нет'.
let arr_str = [78, 2, 3, 80, 2, 1];
let sum1 = 0
let sum2 = 0;
function calSum(mas, x, y) {
    sum1 = arr_str[0] + arr_str[1] + arr_str[2];
    sum2 = arr_str[3] + arr_str[4] + arr_str[5];
}
calSum(arr_str, sum1, sum2);
if (sum1 === sum2) 
    console.log('Да')

else if (sum1 != sum2) 
    console.log('Heт');


