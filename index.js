const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes'); // Import your shape classes

async function main() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      message: 'Enter Three Initials:',
      name: 'textContent',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      message: 'Enter Text Colour (Keyword or Hex):',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Choose Shape:',
      name: 'shape',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      message: 'Enter Shape Colour (Keyword or Hex):',
      name: 'shapeColor',
    },
  ]);

  const { shapeColor, textContent, textColor, shape } = userInput;

  let shapeInstance;
  switch (shape.toLowerCase()) {
    case 'circle':
      shapeInstance = new Circle(shapeColor, textColor, textContent);
      break;
    case 'triangle':
      shapeInstance = new Triangle(shapeColor, textColor, textContent);
      break;
    case 'square':
      shapeInstance = new Square(shapeColor, textColor, textContent);
      break;
    default:
      console.error('Invalid shape choice');
      return;
  }

  // Generate the SVG data using the shape instance
  const svgData = shapeInstance.render();

  // Save the SVG data to a file
  const filePath = './examples/logo.svg'; // Specify the path to the "examples" folder
  fs.writeFileSync(filePath, svgData, 'utf-8');
  console.log('Generated logo.svg');
}

main();

