import cars from './cars.js'

// Filtrar carros por marca
const filteredCars = cars.filter(car => car.color === 'preto')

console.log(filteredCars)

let toPrint = ''

// Lista de carros
filteredCars.forEach(car => {
   toPrint += car.brand + ' ' + car.color + ' ' + car.year + ', '
});

document.getElementById('carListContainer').innerHTML = toPrint