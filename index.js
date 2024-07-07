const fs = require('fs'); // Use 'fs' instead of 'graceful-fs' directly
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                    ${this.shapeElement}
                    ${this.textElement}
                </svg>`;
    }

    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'TEXT: Enter up to 3 Characters:',
        validate: function (input) {
            return input.length > 0 && input.length <= 3; // Validate text input length
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'TEXT COLOR: Enter a color keyword or hexadecimal number:',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'SHAPE COLOR: Enter a color keyword or hexadecimal number:',
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Select preferred shape:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
];

async function init() {
    try {
        console.log('Starting init...');
        const answers = await inquirer.prompt(questions);

        const userText = answers.text;
        const userFontColor = answers.textColor;
        const userShapeColor = answers.shapeColor;
        const userShapeType = answers.shapeType;

        let userShape;

        switch (userShapeType.toLowerCase()) {
            case 'circle':
                userShape = new Circle();
                console.log('User selected Circle shape.');
                break;
            case 'square':
                userShape = new Square();
                console.log('User selected Square shape.');
                break;
            case 'triangle':
                userShape = new Triangle();
                console.log('User selected Triangle shape.');
                break;
            default:
                console.log('Invalid shape selection.');
                return;
        }

        userShape.setColor(userShapeColor);

        const svg = new Svg();
        svg.setTextElement(userText, userFontColor);
        svg.setShapeElement(userShape);
        const svgString = svg.render();

        console.log('Shape generation complete!');
        console.log('Writing shape to file...');

        const svgFile = 'logo.svg';
        fs.writeFileSync(svgFile, svgString); // Use synchronous write for simplicity

        console.log(`Congratulations! You have generated ${svgFile}.`);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

init();