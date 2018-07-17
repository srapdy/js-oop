// ECMA 6 defines classes. In javascript, a class is a syntactic sugar for prototypes

// Class declaration syntax
class Circle {
    constructor(radius) {
        this.radius = radius;
        // functions defined within the constructor are on the Circle object
        this.move = function() {
            console.log('move circle');
        }
    }
    // functions defined outside the constructor are attached to the prototype of the Circle object
    draw() {
        console.log('draw circle');
    }

    static parse(str) {
        return new Circle(JSON.parse(str).radius);
    }
}

// Class expression syntax
const Square = class {

}; // statements end with semi-colon

const c = new Circle(1);

// NOTE: Unlike functions (where function declaration are hoisted), class declaration and expressions are not hoisted.
// i.e., they are not raised to the top of the program by the javascript engine and cannot be used before they are declared.

console.log(typeof Circle);  // 'function' - shows that it is a constructor function and so class is just a syntactic sugar

console.log(c);

//console.log(c.parse('{"radius": 1}')); // error that c.parse() is not a function because it is not an instance method
const c2 = Circle.parse('{"radius": 1}'); // note that the static method is directly accessed on the Circle class object
console.log(c2);