function extend(parentType, childType) {
    childType.prototype = Object.create(parentType.prototype);
    childType.prototype.constructor = childType;
}

function Shape(color) {
    this.color = color;
}

Shape.prototype.draw = function() {
    console.log('draw shape');
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

function Square(size, color) {
    Shape.call(this, color);
    this.size = size;
}

extend(Shape, Circle);
extend(Shape, Square);

Circle.prototype.draw = function() {
    console.log('draw circle');
}

Square.prototype.draw = function() {
    console.log('draw square');
}

const shapes = [
    new Circle(),
    new Square()
];

for (let shape of shapes) {
    shape.draw(); // Polymorphism in action depending on the type of shape
}

// World without polymorphism
//for (let shape of shapes) {
//    if (shape instanceof Circle) drawCircle(); // we would have to write drawCircle() function
//    if (shape instanceof Square) drawSquare(); // we would have to write drawSquare() function
//}

// NOTE: DO NOT overuse inheritance. Stick to one level of hierarchy in inheritance.
// Prefer composition over inheritance as it offers more flexibility without hierarchy.
