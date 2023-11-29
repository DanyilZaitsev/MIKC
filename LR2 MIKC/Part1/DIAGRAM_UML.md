```plantuml
@startuml
class Shape {
  + Constructor(color) : constructor for buildings
  + drow() : abstract method
}

class Line {  
  + constructor(width, height, color) : modified constructor
  + draw() : draw the line
}

class Circle {
  + constructor(radius, color) : modified constructor
  + draw() : draw the circle
}

class Rectangle {
  + constructor(width, height, color) : modified constructor
  + draw() : draw the rectangle
}

class ShapeFactory {
  + createShape() : abstract method
}

class RandomShapeFactory {
    + createLine() : drowing line
    + creatingCircle() : drowing circle
    + creatingRectangle() : drowing rectangle 
}

class Main {
    + shape.draw() : realisation classes
}

Shape --|> Line
Shape --|> Circle
Shape --|> Rectangle
Line --|> RandomShapeFactory
Circle --|> RandomShapeFactory
Rectangle --|> RandomShapeFactory
ShapeFactory --|> RandomShapeFactory
RandomShapeFactory --|> Main
@enduml