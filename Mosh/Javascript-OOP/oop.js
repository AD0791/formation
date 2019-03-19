const _items = new WeakMap();
class Stack {
  constructor() {
    _items.set(this, []); // private
  }
  push(obj) {
    // add obj to the end of the array
    _items.get(this).push(obj);
  }
  pop() {
    if (_items.get(this).length === 0) {
      throw new Error('Stack is empty');
    }
    return _items.get(this).pop();
  }
  peek() {
    if (_items.get(this).length === 0) {
      throw new Error('Stack is empty');
    }
    return _items.get(this)[_items.get(this).length - 1];
  }
  // send this as read only
  get count() {
    return _items.get(this).length;
  }
}

const s = new Stack();
console.log(s);