const inquirer = require('inquirer');
const fs = require('fs/promises');
const { generateCircle, generateTriangle, generateSquare } = require('./shapes');


function validateColor(input) {
    // Regular expression to validate hexadecimal color code
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (!input) {
        return 'Please provide a color value.';
      }
    if (
      input === '' ||
      /^#[0-9A-Fa-f]{3}$/.test(input) ||
      /^#[0-9A-Fa-f]{6}$/.test(input) ||
      /^(black|green|silver|gray|grey|olive|white|yellow|maroon|navy|red|blue|purple|teal|fuchsia|aqua)$/.test(input)
    ) {
      return true;
    }
  
    return 'Please enter a valid color name or hexadecimal code (e.g., "#FF0000" or "red").';
  }
  module.exports.validateColor = validateColor;

function generateShape() {


    const p = inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter three characters of text:',
                validate: (input) => {
                    if (input.length !== 3) {
                        
                        return 'Please enter exactly three characters.';
                    }
                    return true;
                },
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter the text color (name or hexadecimal):',
                validate: validateColor,

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
                validate: validateColor,
            },
        ])
    console.log(p)
    return p.then((answers) => {
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

        return fs.writeFile('logo.svg', svgContent).then((err) => {
            if (err) throw err;
            console.log('Generated logo.svg');
        });
    });
};
module.exports = generateShape;

