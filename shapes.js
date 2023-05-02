// Shape class utilizes constructor to define what it means to be a shape - parent class
class Shape {
    constructor() {
      this.color = ""
    }
    // Shape class takes in setColor function
  setColor(color) {
    this.color = color;
    }
}
  // Triangle class inherits properties defined in Shape class
class Triangle extends Shape {
    render() {
      // Returns polygon with color input
      return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}" />`;
    }
  }

// Square class inherits properties defined in Shape class
class Square extends Shape {
    render() {
      // Returns rectangle with color input
      return `<rect x=50  width="200" height="200" fill="${this.color}" />`;
    }
  }
  class Circle extends Shape {
    render() {
      // Returns polygon with color input
      return `<circle cx="50%" cy="50%" r="100" height="100%" fill="${this.color}" />`;
    }
   

}
module.exports = { Triangle, Square, Circle };