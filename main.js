var carData = { direction: null };
var $car = document.querySelector('img');

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowUp') {
    carData.direction = 'north';
    $car.className = 'north';

  } else if (event.key === 'ArrowDown') {
    carData.direction = 'south';
    $car.className = 'south';

  } else if (event.key === 'ArrowRight') {
    carData.direction = 'east';
    $car.className = 'east';

  } else if (event.key === 'ArrowLeft') {
    carData.direction = 'west';
    $car.className = 'west';
  }

});
