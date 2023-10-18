//даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр 
//в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )
const x2 = 1235;
const x1 = 4215;
let x;
let n = 4;
let kol1 = 0;
let kol2 = 0;
function kol(x1, x2) {
    const chislo1 = x1.toString().split('').map(Number);
    const chislo2 = x2.toString().split('').map(Number);
    for (let i = 0; i < 4; i++) {
        if (chislo1[i] === chislo2[i]) {
            kol1++;
            console.log(`число ${chislo1[i] = chislo2[i]} совпадает по значению и позиции`);
        }
        else if (chislo1.includes(chislo2[i])) {
            kol2++
            console.log(`число ${chislo1[i] = chislo2[i]} совпадает по значению`);
        }
    }
    return [chislo1, chislo2, kol1];
}
console.log('первое число=', x1);
console.log('второе число=', x2)
kol(x1, x2);
console.log('количество цифр в этих числах совпадают по значению и позиции равна', kol1);
console.log('количество цифр в этих числах совпадают по значению равна', kol2);
