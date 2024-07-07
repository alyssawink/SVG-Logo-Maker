// Define a base class Shape
class Shape {
    constructor(color = '') {
        this.color = color; // Initialize color with provided value or default to an empty string
    }

    setColor(color) {
        this.color = color; // Set the color property
    }
}

// Define a Circle class that extends Shape
class Circle extends Shape {
    constructor(color = '', radius = 100) {
        super(color); // Call the constructor of the base class (Shape)
        this.radius = radius; // Set the radius of the circle
    }

    render() {
        // Render an SVG circle element with specified radius and color
        return `<circle cx="50%" cy="50%" r="${this.radius}" fill="${this.color}"></circle>`;
    }
}
// Define a Square class that extends Shape
class Square extends Shape {
    constructor(color = '', size = 200) {
        super(color); // Call the constructor of the base class (Shape)
        this.size = size; // Set the size of the square
    }

    render() {
        // Render an SVG rectangle element (square) with specified size and color
        return `<rect x="50" y="0" width="${this.size}" height="${this.size}" fill="${this.color}"></rect>`;
    }
}

// Define a Triangle class that extends Shape
class Triangle extends Shape {
    constructor(color = '', size = 200) {
        super(color); // Call the constructor of the base class (Shape)
        this.size = size; // Set the size of the square
    }

    render() {
        // Render an SVG triangle element (triangle) with specified size and color
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"></polygon>`;
    }
}

// Export the Circle, Square, and Triangle classes
module.exports = { Circle, Square, Triangle };