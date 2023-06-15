// Notes from AskBCS:
// Next you will need to make an SVG class with constructors for the shape element and text element.
// This SVG class should have a render method to return an SVG element with the shape element and text element inside the SVG element.
// Also you will need to create a method for generating the text element. It will need to receive the text input and color and return a text element utilizing both.

class Shapes {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  setColor(shapeColor) {
    this.shapeColor = `fill="${shapeColor}"`;
  }
}

class SVG {
  constructor(logoText, textColor) {
    this.logoText = logoText;
    this.textColor = textColor;
  }

  renderText() {
    return `<text x="100" y="100" font-family="Verdana" font-size="35" fill="${this.textColor}">${this.logoText}</text>`;
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" ${this.shapeColor}/>`;
  }
}

class Square extends Shapes {
  render() {
    return `<rect x="20" y="10" width="200" height="200" ${this.shapeColor}/>`;
  }
}

class Circle extends Shapes {
  render() {
    return `<circle cx="25" cy="75" r="100" ${this.shapeColor}/>`;
  }
}

module.exports = { SVG, Triangle, Square, Circle };
