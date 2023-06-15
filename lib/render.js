const Shapes = require("./shapes");

class Triangle extends Shapes {
  constructor(logoText, textColor, logoShape, shapeColor) {
    super(logoShape, shapeColor);
  }
}

class Square extends Shapes {
  constructor(logoText, textColor, logoShape, shapeColor) {
    super(logoShape, shapeColor);
  }
}

class Circle extends Shapes {
  constructor(logoText, textColor, logoShape, shapeColor) {
    super(logoShape, shapeColor);
  }
}
