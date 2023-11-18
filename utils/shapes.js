// switch to check selected shape, if shape matches, use specific class
// if shape = triangle 
// const shape = new Triangle(etc, etc)


class Triangle{
  constructor(text, textColor, shapeColor){
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  render(){
    return ``
  }
}

class Square{
  constructor(text, textColor, shapeColor){
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  render(){
    return ``
  }
}

class Circle{
  constructor(text, textColor, shapeColor){
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  render(){
    return ``
  }
}

function createShape(){
}

module.exports = {
  Triangle,
  Circle,
  Square,
  createShape,
}