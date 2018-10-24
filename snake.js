function getRandomNumberInclusiveRange(lower_range, higher_range) {
  return Math.floor(Math.random() * (higher_range + 1)) + lower_range
}

const NORTH = 'north';
const SOUTH = 'south';
const EAST = 'east';
const WEST = 'west';

class Snake {
  constructor() {
    // TODO - make this a random start
    this.coordinates = [
      {
        x: 0,
        y: 0,
      }
    ];
    
    this.x_progression = -1;
    this.y_progression = 0;
  }
  
  move() {
    var that = this;
    this.coordinates = that.coordinates.map(function(coordinate){
      return {
        x: coordinate.x + that.x_progression,
        y: coordinate.y + that.y_progression,
      }
    })
    return this.coordinates
  }
  
  changeDirection(newDirection) {
    if (newDirection == NORTH) {
      this.x_progression = 0;
      this.y_progression = 1;
    } else if (newDirection == SOUTH) {
      this.x_progression = 0;
      this.y_progression = -1;
    } else if (newDirection == EAST) {
      this.x_progression = 1;
      this.y_progression = 0;
    } else if (newDirection == WEST) {
      this.x_progression = -1;
      this.y_progression = 0;
    }
    return;
  }
}
