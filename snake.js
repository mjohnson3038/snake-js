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
    // TODO - how to maintain the first as the head and the last as the tail?
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
  
  addLength() {
    var current_tail = this.coordinates[this.coordinates.length-1]
    var newTail = {
      x: current_tail.x - (this.x_progression),
      y: current_tail.y - (this.y_progression),
    }
    
    this.coordinates.push(newTail);
    return this.coordinates
  }
}
