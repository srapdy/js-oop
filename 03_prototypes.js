// Javascript does not have classes. It only has objects. Class inheritance is acheived using prototypes
// A prototype is just a regular object that acts as a parent of another object
// All object in the javascript have a prototype object except Object

// The __proto__ property we see in javascript objects refers to the object's prototype.
// This property is deprecated but can be accessed programatically using Object.getPrototypeof() function
const x = {}; // notice in browser that the object has __proto__
const y = {}; // notice in browser that the object has __proto__
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)); // returns true; YES the both refer to the same parent object
console.log(x.__proto__ === y.__proto__); // true; but this use is depracated use Object.getPrototypeOf() instead
console.log(x.toString()); // [object "Object"] shows that it is an object of type Object

const myArray1 = []; // __proto__ is Array(0) object
const myArray2 = []; // __proto__ is Array(0) object
console.log(Object.getPrototypeOf(myArray1) === Object.getPrototypeOf(myArray2)); // true
console.log(Object.getPrototypeOf(Object.getPrototypeOf(myArray1)) === Object.getPrototypeOf(Object.getPrototypeOf(myArray2))); // true
// myArray1.__proto__ = myArray2__proto__ = Array(0)
// myArray1.__proto__.__proto__ = myArray2.__proto__.__proto__ = Array(0).__proto__ = Object
console.log(myArray1.__proto__.__proto__ === myArray2.__proto__.__proto__); // true

const person = {
    name: 'Sridhar'
};

// The following only shows "name" and not properties on the base object such as toString().
// This is because of attributes that are set on the base object properties
console.log(Object.keys(person));

let objectBase = Object.getPrototypeOf(person); // returns object
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString'); // get the property decriptor of toString property on the given object
console.log(descriptor); // returns attributes attached to the toString property
// the following are the property attributes (descriptors)
// configurable: if the property can be deleted (defaults true)
// enumerable: if the propery can iterated as keys (defaults to false - reason why Object.keys() does not show toString
// writable: if the property is overridable by derived objects (defaults to true)
// value: this contains the value of the property (can be a function, object or primitive)



// The following code defines a property with its attributes
Object.defineProperty(person, 'name', {
    writable: false // makes name a getter-only property
});
person.name = 'someone';
console.log(person.name); // still prints 'Sridhar'

Object.defineProperty(person, 'toString', {
    enumerable: true, // allows the property to be iterated (exposed in keys)
    configurable: true // allows the property to be deleted
});
console.log(Object.keys(person)); // notice that toString appears now in the list of keys
// Note that using definePropery() for toString is equivalent to overriding the toString method from the prototype
// Because we haven't defined an implementation for the property (we just set its attributes),
// the value of the property remains undefined as shown in the console.log() statement below -
console.log(person);

delete person.toString; // deletes only the overridden property not on the prototype
console.log(person);


// Because functions are objects themselves, there are properties and methods on them
// This, constructor function also has properties and methods
// A constructor function's "prototype" property refers to the object that will be used as prototype for objects created using this constructor
let myObj = {}; // created by javascript using Object() constructor
console.log(myObj.__proto__ === Object.prototype); // true

function Circle() {}
const circle = new Circle(); // created by Circle constructor
console.log(circle.__proto__ === Circle.prototype);  // true

console.log(circle.constructor); // refers to Circle() constructor function
console.log(circle.__proto__); // refers to a object whose constructor property is set to Circle() constructor function
console.log(circle.__proto__.constructor === circle.constructor); // true
console.log(circle.__proto__.__proto__ === Object.prototype); // true

// Prototypical inheritance allows us to define members (properties and functions) in the prototype
function Square(area) {
    this.area = area;
    this.move = function() { // instance methods - copied to each objects
        this.draw(); // access proptype members from instance members and vice-versa. must use this operator as if they are instance methods
        console.log(`moved square with area ${this.area}`);
    }
}

Square.prototype.draw = function() {
    console.log(`drawn square with area ${this.area}`); // we are allowed to access instance members from prototype members and vice-versa
}

const square1 = new Square(1);
const square2 = new Square(2);

// see the move() function copied under both objects but draw() function is under __proto__ hence not copied
console.log(square1);
console.log(square2);

square1.move();
square2.move();

console.log(Object.keys(square1)); // returns only instance/own members; not prototype members
for (let key in square1) console.log(key); // returns both instance and prototype members
console.log(square1.hasOwnProperty('move')); // true
console.log(square1.hasOwnProperty('draw')); // false
// DO NOT extend prototype property of in-built objects (like Array for example) to 
// define custom functions as there may be collisions from libraries of future javascript versions

