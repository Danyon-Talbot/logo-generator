const { Square } = require('./shapes.js');
const testing = require('jest');

// Describes Test suite for Square
describe('Square', () => {
    test('renders a square with the correct properties', () => {
        // Creates new Square with these properties
        const shape = new Square('green', 'black', 'CAB');
        const expectedResult = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<rect x="75" y="25" width="150" height="150" fill="green" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">CAB</text>
</svg>`;

        // Asserts that the result is equal
        expect(shape.render()).toEqual(expectedResult);
    });
  });