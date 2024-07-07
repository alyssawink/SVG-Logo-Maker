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