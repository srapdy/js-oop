function HtmlElement() {
    this.click = function() {
        console.log('Element clicked');
    }
}
HtmlElement.prototype.focus = function() {
    console.log('Element focused');
}

const e = new HtmlElement();
console.log(e);

console.log(e.hasOwnProperty('click')); // true
console.log(e.hasOwnProperty('focus')); // false because it is in HtmlElement's prototype

function HtmlSelectElement(items = []) { // ES6 allows you to specify default
    // prior to ES6, you would have to write this.items = items || [];
    this.items = items;
    this.addItem = function(item) {
        this.items.push(item);
    };
    this.removeItem = function(item) {
        let index = this.items.indexOf(item);
        if (index !== -1) this.items.splice(index, 1);
    };
    this.render = function() {
        // use template string ES6; note also template string within another template string
        // Array.map() returns an array w/ comma-separated elements, so we need to join() with empty string
        return `
<select>${this.items.map(item => `
 <option>${item}</option>`).join('')}
</select>`;
    }
}

// Here we set the prototype of select element to an instance of HtmlElement rather than HtmlElement's prototype
// This is because we want click function which is an instance property not HtmlElement's prototype property
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s = new HtmlSelectElement([1,2]);
s.addItem(1);
s.removeItem(1);
console.log(s);

function HtmlImageElement(src) {
    this.src = src;
    this.render = function() {
        return `<src="${this.src}" />`; // self closing tag
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const img = new HtmlImageElement("http:///someimg");
console.log(img);

const elements = [
    new HtmlSelectElement([1, 3, 5]),
    new HtmlImageElement("http://myimage")
];

for (let element of elements)
    console.log(element.render());