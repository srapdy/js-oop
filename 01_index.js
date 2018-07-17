// Object literal syntax

const circle1 = { // object literal syntax
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('circle drawn');
    }
}

// we can define circle2 here. But, using literal syntax to define objects is discouraged if the object has at least one method (function) as that behavior needs
// to be duplicated.

// Factory functions
function createCircle(radius) {
    return { // note the return statement
        radius,
        draw: function() {
            console.log('circle drawn');
        }
    };
}

const circle2 = createCircle(1);
circle2.draw();

// Constructor functions
function CreateCircle(radius) {
    this.radius = radius,
    this.draw = function() {
        console.log('circle drawn');
    }
}
const circle3 = new CreateCircle(2); // note the use of "new". Javascript creates an empty object and sets the "this" operator to this object
circle3.draw();

// Every object has a constructor property that refers to the function that was used to construct the object
console.log(circle2.constructor); // shows Object() function because javascript uses new Object() with literal syntax and factory functions
console.log(circle3.constructor);  // shows the constructor function
console.log(CreateCircle.constructor); // shows Function(). So the constructor functions themselves are created by Function().

// Javascript internally does something like below to create construction functions -
const CreateCircle1 = new Function('radius', `
    this.radius = radius,
    this.draw = function() {
        console.log('circle drawn');
    }
`);
const circle4 = new CreateCircle1(1);
console.log(CreateCircle1.constructor); // shows Function() 

console.log(circle4.constructor); // shows anonymous()


CreateCircle.call({}, 1); // this is what javascript engine does internally when you call new CreateCircle(), call method does not return the object back  
CreateCircle.apply({}, [1]);  // same as call except that the arguments are passed in an array

// Properties can be dynamically added to javascript class unlike other OOP languages such as C# or Java 
circle3.location = {x: 1}; // works
console.log(circle3);

// Properties can be dynamically deleted too
delete circle3.location;
console.log(circle3);

// Check if a property exists on an object
if (!('location' in circle3))
    console.log('circle does not contain location property');

// Private members (properties and functions) are declared using "let" keyword
function Person(name) {
    this.name = name;
    let category = 'Human';
    this.describe = function() {
        console.log(`${this.name} is a ${category}`); // category is accessible within this function via closure 
    }
}
const person = new Person('Sridhar');
person.describe();