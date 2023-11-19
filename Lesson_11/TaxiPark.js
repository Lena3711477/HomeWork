const Car = require('./Car')
class TaxiPark {
  constructor() {
    this.cars = [];
  }
  // Метод для добавления такси в таксопарк
  addTaxi(taxi) {
    this.cars.push(taxi);
  };

  // Метод для подсчета стоимости автопарка
  calculateCost() {
    return this.cars.reduce((total, taxi) => total + taxi.price, 0);
  }

  // Метод для сортировки автомобилей парка по расходу топлива
  sortTaxisByFuelConsumption() {
    this.cars.sort((a, b) => a.fuelConsumption - b.fuelConsumption);
  }
  // Метод для подсчета автомобили в заданном диапазоне параметров
  findCarByParameters(minFuelConsumption, maxFuelConsumption, minPrice, maxPrice) {
    return this.cars.filter((taxi) =>
      taxi.fuelConsumption >= minFuelConsumption && taxi.fuelConsumption <= maxFuelConsumption &&
      taxi.price >= minPrice && taxi.price <= maxPrice
    )
  }
}
module.exports = TaxiPark;






//   ***************
//   addCar(car) {
//     this.cars.push(car);
//   }
//   // Метод для подсчета стоимости автопарка
//   calculateTotalCostAndFuel(distance) {
//     let totalCost = 0;
//     let totalFuel = 0;

//     this.cars.forEach(car => {
//       totalCost += car.calculateCost(distance);
//       totalFuel += (car.fuelConsumption / 100) * distance;
//     });

//     return { totalCost, totalFuel };
//   }
//   // Метод для сортировки автомобилей парка по расходу топлива
//   sortTaxisByFuelConsumption() {
//     this.taxis.sort((a, b) => a.fuelConsumption - b.fuelConsumption);
//   }
//   // Метод для вывода информации о всех такси в таксопарке
//   showTaxis() {
//     this.taxis.forEach(taxi => {
//       console.log(taxi.getInfo());
//     });
//   };


//}
