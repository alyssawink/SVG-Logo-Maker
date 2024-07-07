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
