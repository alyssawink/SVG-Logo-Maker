const { Circle, Square, Triangle } = require("./shapes");

// Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        const color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="${color}"></circle>`);
    });
});