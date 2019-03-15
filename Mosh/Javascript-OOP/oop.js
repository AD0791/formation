// html element object
// parent 
function HtmlElement() {
    this.click = function () {
        console.log("click");
    };
}
HtmlElement.prototype.focus = function () {
    console.log('focus');
}

// html select object 
// Child
function HtmlSelect(items = []) {
    this.items = items;
    this.addItems = function (item) {
        this.items.push(item);
    }
    this.removeItems = function (item) {
        this.items.splice(this.items.indexof(item), 1);
    }
}

// normally we would do this
// because we know with this method 
// we won't inherit the click method
// HtmlSelect.prototype = Object.create(HtmlElement.prototype);

HtmlSelect.prototype = new HtmlElement();
// reset the constructor
HtmlSelect.prototype.constructor = HtmlSelect;




const h = new HtmlElement();
const s = new HtmlSelect();

console.log(h); // parent
console.log(s); // child