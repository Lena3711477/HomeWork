const todayDate = new Date(Date.now()); // 
let dateOld = new Date('2000,1,1');  //
let totalFriday = 0;
while(dateOld <= todayDate)
{
    if(dateOld.getDay() === 5 && dateOld.getDate() === 13) // если пятница увеличиваем счётчик
{
    totalFriday++;
}
dateOld.setDate(dateOld.getDate() + 1); // прибавляем по 1 дню
}
console.log("Всего (пятниц):" + totalFriday);
