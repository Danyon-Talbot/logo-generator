const { Triangle } = require('./shapes.js');
const testing = require('jest');

// Describes Test suite for Triangle
describe('Triangle', () => {
    test('renders a triangle with the correct properties', () => {
        // Creates new Triangle with these properties
        const shape = new Triangle('blue', 'yellow', 'CBA');
        const expectedResult = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<polygon points="150,30 50,170 250,170" fill="blue" />
<text x="150" y="150" font-size="60" text-anchor="middle" fill="yellow">CBA</text>
</svg>`;
        
        // Asserts that the result is equal
        expect(shape.render()).toEqual(expectedResult);
    });
});