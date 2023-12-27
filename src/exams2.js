import cars from './cars.js'

// Filtrar carros por marca
const filteredCars = cars.filter(car => car.brand === 'Ford')

console.log(filteredCars)

let toPrint = ''

// Lista de carros
filteredCars.forEach(car => {
   toPrint += car.brand + ' ' + car.color + ' ' + car.year + ', '
});

document.getElementById('main').innerHTML = toPrint