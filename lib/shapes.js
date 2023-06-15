// Notes from AskBCS:
// In shapes.js you can make the setColor function a method of the Shapes class since each extended class will need it anyway.
// You can also remove all the shape constructors except shapeColor as the others do not pertain to the shape.
// Next you will need to make an SVG class with constructors for the shape element and text element.
// This SVG class should have a render method to return an SVG element with the shape element and text element inside the SVG element.
// Also you will need to create a method for generating the text element. It will need to receive the text input and color and return a text element utilizing both.

class Shapes {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  setColor(shapeColor) {
    const colorHTML = `fill="${shapeColor}"`;
    return colorHTML;
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" ${this.setColor(
      this.shapeColor
    )}/>`;
  }
}

class Square extends Shapes {
  // render() {
  //   this.setColor();
  // };
}

class Circle extends Shapes {
  // render() {
  //   this.setColor();
  // };
}

module.exports = { Triangle, Square, Circle };
