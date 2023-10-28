const fs = require('fs');
const inquirer = require('inquirer');
const { circleTemplate, triangleTemplate, squareTemplate } = require('./lib/shapes'); // Import your shape templates

async function main() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      message: 'Enter Three Initials:',
      name: 'textContent', // Change 'text' to 'textContent' to match the template variable
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

  let svgTemplate;
  switch (shape.toLowerCase()) {
    case 'circle':
      svgTemplate = circleTemplate;
      break;
    case 'triangle':
      svgTemplate = triangleTemplate;
      break;
    case 'square':
      svgTemplate = squareTemplate;
      break;
    default:
      console.error('Invalid shape choice');
      return;
  }

  const svgData = svgTemplate
    .replace('{{shapeColor}}', shapeColor)
    .replace('{{textContent}}', textContent)
    .replace('{{textColor}}', textColor);

  // Save the SVG data to a file
    const filePath = './examples/logo.svg'; // Specify the path to the "examples" folder
    const writeFilePromise = new Promise((resolve, reject) => {
        fs.writeFile(filePath, svgData, (err) =>
        err ? console.error(err) : console.log('SAVED!'));
    })
    return writeFilePromise;

}

main();

