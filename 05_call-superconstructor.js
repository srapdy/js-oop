function Shape(color) {
    this.color = color;
}
Shape.prototype.draw = function() { }

function Circle(radius, color) {
    Shape.call(this, color); // call the super's constructor
    this.radius = radius;
}

// Set prototype of Circle to be Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const c1 = new Circle(1, 'blue');
console.log(c1.color === 'blue'); // true


// Define a function called extend that we can reuse to set prototype of an object
function extend(parentType, childType) {
    childType.prototype = Object.create(parentType.prototype);
    childType.prototype.constructor = childType;
}
// we could then call extend(Shape, Circle);