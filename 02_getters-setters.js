// Getters and Setters for constructor functions
function Circle(radius) {
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};
    this.draw = function() {
        console.log(`circle with radius ${this.radius} drawn at (${defaultLocation.x},${defaultLocation.y})`);
    };

    // getter and setter for property location
    Object.defineProperty(this, 'location', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid value for location');
            defaultLocation = value;
        }
    });
}

const circle = new Circle(1);
circle.draw();
circle.location = {x: 1, y: 1};
circle.draw();

// Getters and setters for factory functions
function createCircle(radius) {
    let defaultLocation = {x: 0, y: 0};
    return {
        radius,
        draw: function() {
            console.log(`circle with radius ${radius} drawn at (${defaultLocation.x},${defaultLocation.y})`);
        },
        get location() {
            return defaultLocation;
        },
        set location(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid value for location');
            defaultLocation = value;
        }
    }
}
const circle2 = createCircle(2);
circle2.draw();
circle2.location = {x: 2, y: 2};
circle2.draw();