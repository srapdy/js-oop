function extend(parentType, childType) {
    childType.prototype = Object.create(parentType.prototype);
    childType.prototype.constructor = childType;
}

function Shape(color) {
    this.color = color;
}

Shape.prototype.draw = function() { 
    console.log('draw Shape');
}

function Circle(radius) {
    Shape.call(this, 'blue');
    this.radius = radius;
}

// First extend Shape
extend(Shape, Circle);
// Then override the method as prototype property is reset by the extend() function
Circle.prototype.draw = function() {
    console.log('draw Circle');
}

const c1 = new Circle(1);
console.log(c1);
c1.draw(); // calls Circle's override implementation

console.log(typeof c1); // 'object'
console.log(c1 instanceof Circle); // true