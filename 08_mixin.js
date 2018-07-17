// Mixin in composition of objects to form new objects (instead of chosing hierarchy)
function mixin(target, ...sources) { // rest operator 
    // Object.assign() adds properties of all source objects to the target object
    Object.assign(target, ...sources); // spread operator to convert 'sources' array to individual args
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
}

const canWalk = {
    walk: function() {
        console.log('walk');
    }
}

const canSwim = {
    swim: function() {
        console.log('swim');
    }
}

// constructor functions
function Person() {}
function Goldfish() {}

mixin(Person.prototype, canEat, canWalk); // adds all properties of canEat and canwalk object to Person object
mixin(Goldfish.prototype, canEat, canSwim);

const person1 = new Person();
const Goldfish1 = new Goldfish();

console.log(person1);
console.log(Goldfish1);
