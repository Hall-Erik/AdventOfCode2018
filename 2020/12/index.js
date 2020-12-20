const fs = require('fs');

const Ship = require('./ship');

const directions = fs.readFileSync('input.txt', 'utf-8').split('\n').slice('0, -1');

const ship = new Ship();

for (let direction of directions) {
    ship.move(direction);
}

console.log(`Moved ${ship.mDistance} units from starting point`);
