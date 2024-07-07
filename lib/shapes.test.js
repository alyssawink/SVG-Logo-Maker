const { Circle, Square, Triangle } = require("./shapes");

// Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        const color = 'red';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="${color}"></circle>`);
    });
});
// Square Shape
describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        const color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="0" width="200" height="200" fill="${color}"></rect>`);
    });
});
// Triangle Shape
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        const color = 'green';
        shape.setColor(color);
        // Corrected points for an equilateral triangle with a base of 200 units
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}"></polygon>`);
    });
});