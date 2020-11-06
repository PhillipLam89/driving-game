var carData = { direction: 'east', location: { x: 0, y: 0 }, isMoving: false };
var $car = document.querySelector('img');

var interval = null;
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowDown') {
    carData.direction = 'south';
    $car.className = 'south'; // allows user to choose starting direction before moving with space bar
  } else if (event.key === 'ArrowUp') {
    carData.direction = 'north';
    $car.className = 'north';
  } else if (event.key === 'ArrowRight') {
    carData.direction = 'east';
    $car.className = 'east';
  } else if (event.key === 'ArrowLeft') {
    carData.direction = 'west';
    $car.className = 'west';
  } else if (event.key === ' ') {
    carData.isMoving = !carData.isMoving;
    if (carData.isMoving === true) {
      interval = setInterval(function () {
        if (carData.direction === 'east') {
          $car.className = 'east';
          carData.location.x += 3;
          $car.style.left = carData.location.x + 'px';
        } else if (carData.direction === 'west') {
          $car.className = 'west';
          carData.location.x -= 3;
          $car.style.left = carData.location.x + 'px';
        } else if (carData.direction === 'south') {
          $car.className = 'south';
          carData.location.y += 3;
          $car.style.top = carData.location.y + 'px';
        } else if (carData.direction === 'north') {
          $car.className = 'north';
          carData.location.y -= 3;
          $car.style.top = carData.location.y + 'px';
        }
      }, 16);
    } else {
      clearInterval(interval);
    }
  }
});
