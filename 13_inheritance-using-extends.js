// ES6

class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log('move Shape');
    }
}

class Circle extends Shape { // extends simplifies the inheritance (no need to set prototype property)
    constructor(color, radius) {
        super(color); // must call super's constructor if the derived class contains a constructor
        this.radius = radius;
    }

    move() { // override method
        super.move(); // call super object's version optionally
        console.log('move circle');
    }

    draw() {
        console.log('draw');
    }

}

const c1 = new Circle('red', 1);
console.log(c1);
c1.draw();
c1.move();