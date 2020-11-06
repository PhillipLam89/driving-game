var carData = { direction: null, location: { x: 0, y: 0 }, isMoving: false };
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

  if (event.key === ' ') {
    carData.isMoving = !carData.isMoving;
    if (carData.isMoving === true) {
      interval = setInterval(function () {
        carData.location.x += 4;
        $car.style.left = carData.location.x + 'px';
      }, 16);
    } else {
      clearInterval(interval);
    }
  }
});
var interval = ''; // must declare this globally
