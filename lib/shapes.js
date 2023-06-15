class Shapes {
  constructor(logoText, textColor, logoShape, shapeColor) {
    this.logoText = logoText;
    this.textColor = textColor;
    this.logoShape = logoShape;
    this.shapeColor = shapeColor;
  }
}

class Triangle extends Shapes {
  setColor(shapeColor) {
    const colorHTML = `fill=${shapeColor}`;
    return colorHTML;
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" ${this.setColor(
      shapeColor
    )} />`;
  }
}

class Square extends Shapes {
  // setColor();
  // render() {
  //   this.setColor();
  // };
}

class Circle extends Shapes {
  // setColor();
  // render() {
  //   this.setColor();
  // };
}

// module.exports = Shapes;
module.exports = { Triangle, Square, Circle };
