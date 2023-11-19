const Taxi  = require('./Car');
const TaxiPark = require('./TaxiPark');

// Создаем объекты такси
const taxi1 = new Taxi('Toyota', 'Camry', 2018, 'Black',2000, 'ABC123', 8);
const taxi2 = new Taxi('Honda', 'Civic', 2017, 'White',1900, 'XYZ789', 7);
const taxi3= new Taxi('Toyota','GR Yaris', 2022, 'Black',2500,'EP-1729', 6); 
const taxi4 = new Taxi('Ford', 'Focus', 2015, 'Black',3000,'EP-2229', 9);
const taxi5 = new Taxi('Chevrolet','Bolt', 2020, 'Black',2800,'EP-2041', 10)

// Создаем объект таксопарка
const taxiPark = new TaxiPark();

// Добавляем такси в таксопарк
taxiPark.addTaxi(taxi1);
taxiPark.addTaxi(taxi2);
taxiPark.addTaxi(taxi3);
taxiPark.addTaxi(taxi4);
taxiPark.addTaxi(taxi5);

// Выводим стоимость автопарка
console.log('Total cost of the taxi park:', taxiPark.calculateCost());

//Выводим отсотированный список автомобилей
taxiPark.sortTaxisByFuelConsumption();
console.log('Сотрировка автомобилей:',taxiPark.cars);

// Выводим список автомобилей пожходящих под заданные паратемры
 const filteredCars = taxiPark.findCarByParameters(9,4000,10,3000);
console.log('Автомобили в заданном диапазоне параметров:', filteredCars);