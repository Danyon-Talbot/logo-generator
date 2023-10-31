const { Circle } = require('./shapes.js');
const testing = require('jest');

describe('Circle', () => {
    test('renders a circle with the correct properties.', () => {
        const shape = new Circle('red', 'blue', 'ABC');
        const expectedResult = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="red" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text>
        </svg>`;

        expect(shape.render()).toEqual(expectedResult);
    });
}); 
