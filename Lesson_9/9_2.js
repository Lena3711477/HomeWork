//Дано число n=1000 (может быть любое число). Делите его на 2 столько раз, пока результат деления не станет меньше 50 
//(может быть любое число). Какое число получится? Посчитайте количество итераций, 
//необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
const n = 1000;
const n1 = 50;
function devision(x,y) {
    let num=0;
    while (x >= y) {
        x = x/ 2;
        num++;
        console.log(x);
    }
    return [x,num];
}
let [a,b]=devision(n, n1);
console.log("Получилось число ", a, "Цикл прошел ", b, " итераций");
