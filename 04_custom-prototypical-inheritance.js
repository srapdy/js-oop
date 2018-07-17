function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.draw = function() {

}
console.log(Circle.prototype); // Circle object represented as __proto__ (to be used for objects created using Circle)
console.log(Circle.prototype.__proto__ === Object.prototype); // Circle object's proto is Object.prototype

let c1 = new Circle(1);
console.log(c1); // An object of type Circle whose prototype is set to Circle.prototype

function Shape() {
}
Shape.prototype.draw = function() {

}
console.log(Shape.prototype); // Shape object
console.log(Shape.prototype.__proto__ === Object.prototype); // true 

console.log(`c1's constructor is Circle? ${c1.constructor === Circle}`);
console.log(`c1's constructor is Circle.prototype.constructor? ${c1.constructor === Circle.prototype.constructor}`);
let oldPrototype = Circle.prototype;
let oldConstructor = Circle.prototype.constructor;
// Let's make Circle's prototype as Shape instead of Object so that draw() on Shape can be used on Circle
Circle.prototype = Object.create(Shape.prototype); 
// Before executing the above line, javascript would have set Circle.prototype = Object.Create(Object.prototype)
console.log(Circle.prototype);
console.log(c1);
console.log(c1.__proto__ === oldPrototype); // true because c1 was created before prototype change

let c2 = new Circle(2);
console.log(c2);
console.log(c2.__proto__ === oldPrototype); // false because c2 was created after prototype change 
console.log(c2.__proto__ === Circle.prototype); // true

// NOTE: Circle.prototype = Object.create(Shape.prototype) does not make the Circle's and Shape's prototype the same
// It simply sets up the hiearchy that Circle inherits from Shape
console.log(c2.__proto__ === Shape.prototype); // false

console.log(`c2's constructor is Circle? ${c2.constructor === Circle}`);
console.log(`c2's constructor is Circle.prototype.constructor? ${c2.constructor === Circle.prototype.constructor}`);
console.log(`Circle.prototype.constructor === Shape.prototype.constructor? ${Circle.prototype.constructor === Shape.prototype.constructor}`); // true
console.log(Circle.prototype.constructor === oldConstructor); // false because setting the Circle's prototype changed this

// Reset the Circle's prototype's constructor after setting the prototype to Object.create(Shape.prototype)
Circle.prototype.constructor = Circle;
console.log(Circle.prototype.constructor === oldConstructor); // true
console.log(Circle.prototype.constructor === Circle); // true

// NOTE: new Circle() is same as new Circle.prototype.constructor(); both create object of type Circle

