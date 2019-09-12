function getRandomNumberInclusiveRange(lower_range, higher_range) {
  return Math.floor(Math.random() * (higher_range + 1)) + lower_range
}

const NORTH = 'north';
const SOUTH = 'south';
const EAST = 'east';
const WEST = 'west';

class Snake {
  constructor(x_progression=-1, y_progression=0) {
    // TODO - make this a random start
    // TODO - how to maintain the first as the head and the last as the tail?
    this.coordinates = [
      {
        x: 0,
        y: 0,
      }
    ];

    this.x_progression = x_progression;
    this.y_progression = y_progression;
  }

  move() {
    let coordinates = this.coordinates;
    let current_head = coordinates[0]
    let new_head = {
      x: current_head.x + this.x_progression,
      y: current_head.y + this.y_progression,
    }

    coordinates.unshift(new_head)
    coordinates.pop()

    this.coordinates = coordinates;
    return this.coordinates
  }

  changeDirection(newDirection) {
    if (newDirection === NORTH) {
      this.x_progression = 0;
      this.y_progression = 1;
    } else if (newDirection === SOUTH) {
      this.x_progression = 0;
      this.y_progression = -1;
    } else if (newDirection === EAST) {
      this.x_progression = 1;
      this.y_progression = 0;
    } else if (newDirection === WEST) {
      this.x_progression = -1;
      this.y_progression = 0;
    }
    return;
  }

  addLength() {
    var current_tail = this.coordinates[this.coordinates.length-1]
    var newTail = {
      x: current_tail.x - (this.x_progression),
      y: current_tail.y - (this.y_progression),
    }

    this.coordinates.push(newTail);
    return this.coordinates
  }

  willHaveCollision(newX, newY) {
    // Since the snake leads with the head, only need to check that the head doesn't overlap with any other part of the snake. Do not need to check the last position of the snake because it will be moving
    // TODO - make sure the addLength, changeDirection work if they were to occur at the same time.
    let coordinates = this.coordinates
    // coordinates not defined, weird!
    for (let i=0; i < coordinates.length-1; i++){
      if (coordinates[i].x === newX && coordinates[i].y === newY){
        return true;
      }
    }
    return false;
  }
}

module.exports = {
  Snake: Snake,
}
