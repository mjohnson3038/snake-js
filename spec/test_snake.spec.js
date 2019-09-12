const rewire = require('rewire');
const sinon = require('sinon');

const snake = rewire('../src/models/snake.js');

describe("Snake changeDirection", function(){
  const parameters = [
      {direction: 'north', expected_x: 0, expected_y: 1},
      {direction: 'south', expected_x: 0, expected_y: -1},
      {direction: 'east', expected_x: 1, expected_y: 0},
      {direction: 'west', expected_x: -1, expected_y: 0},

  ];

  parameters.forEach(function(parameter){
    it("should be able to change directions", function(){
      let snakeObject = new snake.Snake();

      snakeObject.changeDirection(parameter.direction)
      expect(snakeObject.x_progression).toBe(parameter.expected_x);
      expect(snakeObject.y_progression).toBe(parameter.expected_y);
    });
  });
});
