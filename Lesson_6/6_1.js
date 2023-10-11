
let player1 = 0;
let player2 = 0;
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < 3; i++) {
       player1 = Math.floor(Math.random() * 6) + 1;
       sum1 = sum1 + player1;
       console.log(`результат трех бросков игрока №1, ${player1}`);
       
       player2 = Math.floor(Math.random() * 6) + 1;
       sum2 = sum2 + player2;
       console.log(`результат трех бросков игрока №2, ${player2}`);
       
}
console.log (`сумма очков первого игрока ${sum1}`);
console.log (`сумма очков второго игрока ${sum2}`);
if (sum1>sum2) {
       console.log(`выиграл первый игрок`);
} else if (sum1<sum2){
       console.log(`выиграл второй игрок`);
} else console.log(`ничья`);