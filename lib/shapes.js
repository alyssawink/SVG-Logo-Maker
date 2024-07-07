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