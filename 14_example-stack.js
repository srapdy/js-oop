// Implement a stack with push(), pop(), peek() and count property using ES6 classes

const _items = new WeakMap();
class Stack {
    constructor() {
        _items.set(this, []);
    }

    push(obj) {
        _items.get(this).push(obj);
    }

    pop() {
        const items = _items.get(this);
        if (items.length === 0)
            throw new Error('Stack is empty.');
        return items.pop();
    }

    peek() {
        const items = _items.get(this);
        if (items.length === 0)
            throw new Error('Stack is empty.');
        return items[items.length - 1];
    }

    get count() {
        return _items.get(this).length;
    }

}

const s = new Stack();
s.push(1);
s.push('a');
s.push({"name": "sridhar"});
console.log(s);
console.log(s.count);
console.log(s.peek());
console.log(s.pop());
console.log(s.count);
console.log(s.pop());
console.log(s.pop());
console.log(s.count);
console.log(s.peek());