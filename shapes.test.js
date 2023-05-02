const Triangle = require("./shapes").Triangle;

test("test triangle render", () => {
    const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="blue" />');
});



const Square = require("./shapes").Square;

test("test square render", () => {
    const shape = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual(`<rect x=50  width="200" height="200" fill="blue" />`);
});

const Circle = require("./shapes").Circle;

test("test circle render", () => {
    const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" fill="blue" />');
});