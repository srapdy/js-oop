// Weakmaps are a collection of key-value pairs where keys are objects and value can be anything
// keys cannot be a primitive. It is called a weakmap because the keys are weakly referenced
// i.e., if the objects they represent and not referenced, they could be garbage collected

const _radius = new WeakMap(); // these maps can be made inaccessible outside Circle by packaging in a module
const _move = new WeakMap();
class Circle {
    constructor(radius) {
        _radius.set(this, radius); // sets the value to be the value of the argument passed for radius
        _move.set(this, () => { // a function as a value
            console.log('move');
        });
    }

    draw() {
        _move.get(this)(); // invoke the move function by calling _move weakmap and passing the 'this' object as key
        console.log('draw');
    }
}

const c1 = new Circle(1);
c1.draw();