// Modules are used so that only required functionality is exposed and to hide implementation detail
// Currently there are two ways to use modules
// CommonJs modules (Node.js)
// ES6 modules (browser)

// CommonJs modules use module.exports to export and use require() to import
class Circle {

}
module.exports = Circle;
// To import the above module from another .js file, use require('./Circle)

// ES6 modules use export keyword to export and import command to import
export class Square {

}
// To import the above module from another .js file, use as below -
// import {Circle} from './Circle.js'
// Say you are importing the Circle.js from index.js, then make sure to set the "type" attribute of the <script> element to module
// <script type="module" src="index.js"></script>

