// Создаем класс Taxi
class Taxi {
  constructor(brand, model, year, color, price, plateNumber, fuelConsumption) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.plateNumber = plateNumber;
    this.fuelConsumption = fuelConsumption; // Добавляем параметр расхода топлива
  }
}
module.exports = Taxi;