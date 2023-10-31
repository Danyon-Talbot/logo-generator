const { Circle, Triangle, Square } = require('./shapes.js');
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


describe('Triangle', () => {
    test('renders a triangle with the correct properties', () => {
        const shape = new Triangle('blue', 'yellow', 'CBA');
        const expectedResult = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,30 50,170 250,170" fill="blue" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="yellow">CBA</text>
        </svg>`;
        
        expect(shape.render()).toEqual(expectedResult);
    });
});

describe('Square', () => {
    test('renders a square with the correct properties', () => {
        const shape = new Square('green', 'black', 'CAB');
        const expectedResult = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="75" y="25" width="150" height="150" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">CAB</text>
        </svg>`;
        
        expect(shape.render()).toEqual(expectedResult);
    });
  });