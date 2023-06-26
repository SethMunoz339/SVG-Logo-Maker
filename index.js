const inquirer = require('inquirer');
const fs = require('fs');
const { generateCircle, generateTriangle, generateSquare } = require('./lib/shapes');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter three characters of text:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (name or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (name or hexadecimal):',
    },
  ])
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    let shapeContent = '';

    switch (shape) {
      case 'circle':
        shapeContent = generateCircle(shapeColor);
        break;
      case 'triangle':
        shapeContent = generateTriangle(shapeColor);
        break;
      case 'square':
        shapeContent = generateSquare(shapeColor);
        break;
      default:
        console.log('Invalid shape selected.');
        return;
    }

    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeContent}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="${textColor}">${text}</text>
    </svg>`;

    fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  });
