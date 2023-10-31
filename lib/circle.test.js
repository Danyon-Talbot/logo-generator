const { Circle } = require('./shapes.js');
const testing = require('jest');

// Describes Test suite for Circle
describe('Circle', () => {
    test('renders a circle with the correct properties.', () => {
        // Creates new Circle with these properties
        const shape = new Circle('red', 'blue', 'ABC');
        const expectedResult = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<circle cx="150" cy="100" r="80" fill="red" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text>
</svg>`;

        // Asserts that the result is equal
        expect(shape.render()).toEqual(expectedResult);
    });
}); 
